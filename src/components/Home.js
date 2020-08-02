import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Collection, TimeSeries, TimeEvent, IndexedEvent } from "pondjs";

import { getHistoricalList } from "../actions/actions";
import {MainChart} from "./MainChart";

/* Show the chart data through REST API 
*/
const name = "Upstox-price";
const columns = ["time", "open", "high", "low", "close"];

const Home = (props) => {
  let [newHistoricalData, setHistoricalData] = useState({});
  let [series, setSeries] = useState();
  let [seriesVolume, setSeriesVolume] = useState();

  /* Get the Historical Data through web services
     store the historical data into state
    */
  useEffect(() => {
    props.getHistoricalList();
  }, []);

  newHistoricalData = props.historicalData.historicalData;
  if (newHistoricalData.length > 0) {
    
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
  }
  return (
    <div>
      <MainChart series={series} seriesVolume={seriesVolume} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    historicalData: state.historicalData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHistoricalList: () => {
      dispatch(getHistoricalList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
