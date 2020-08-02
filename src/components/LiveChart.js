import React, { useState, useEffect } from "react";
import moment from "moment";
import { Collection, TimeSeries, TimeEvent, IndexedEvent } from "pondjs";
import io from "socket.io-client";

import { MainChart } from "./MainChart";
import * as HistoricalService from "../services/historical.service";

/* Show the chart data through  websocket
 */
const name = "Upstox-price";
const columns = ["time", "open", "high", "low", "close"];

const Livechart = (props) => {
  let [newHistoricalData, setHistoricalData] = useState({});
  let [series, setSeries] = useState();
  let [seriesVolume, setseriesVolume] = useState();

  /* Get the Historical Data through Web socket
     store the historical data into state
    */
  useEffect(() => {
    let ws = io(HistoricalService.getLiveChartData().url);
    ws.on("connect", () => {
      ws.emit("ping", {});
      ws.emit("sub", { state: true });
    });
    ws.on("data", (data) => {
    
      ws.emit("sub", { state: true });
      newHistoricalData = data.split();
      getChartData(newHistoricalData);
    });
    ws.on("error", (error) => {
      console.log(error);
    });
  });

  const getChartData = () => {
    // get the individual value of metics from array of csv
    const events = newHistoricalData.map((item) => {
      const itemArr = item.split(",");
      const time = itemArr[0];
      const open = parseInt(itemArr[1]);
      const high = parseInt(itemArr[2]);
      const low = parseInt(itemArr[3]);
      const close = parseInt(itemArr[4]);

      const timestamp = moment(new Date(parseInt(time)));
      return new TimeEvent(timestamp.toDate(), {
        open: +open,
        close: +close,
        low: +low,
        high: +high,
      });
    });

    const collection = new Collection(events);
    const sortedCollection = collection.sortByTime();
    const seriesData = new TimeSeries({
      name,
      columns,
      collection: sortedCollection,
    });

    // get the volume value from array of csv
    const volumeEvents = newHistoricalData.map((item) => {
      const itemArr = item.split(",");
      const time = itemArr[0];
      let now = moment(new Date(parseInt(time)));
      let date = moment(now).format("YYYY/MM/DD");
      const index = date.replace(/\//g, "-");
      const volume = parseInt(itemArr[5]);
      return new IndexedEvent(index, { volume: +volume });
    });

    const volumeCollection = new Collection(volumeEvents);
    const sortedVolumeCollection = volumeCollection.sortByTime();
    const seriesVolumeData = new TimeSeries({
      name: "Upstox-volume",
      utc: false,
      collection: sortedVolumeCollection,
    });
 
    series = seriesData;
    seriesVolume = seriesVolumeData;
    setSeries(series);
  };
  return (
    <div>
      <MainChart series={series} />
    </div>
  );
};

export default Livechart;
