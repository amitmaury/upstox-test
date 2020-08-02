import React from "react";

import { TimeRange } from "pondjs";
import {
  Resizable,
  Charts,
  BarChart,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart
} from "react-timeseries-charts";

export class MainChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "log",
      timerange: new TimeRange([1236985288649, 1326654398343]),
    };
  }

  handleTimeRangeChange = (timerange) => {
    this.setState({ timerange });
  };

  render() {
    let croppedSeries;
    let croppedVolumeSeries;
    const { timerange } = this.state;
    if (this.props.series !== undefined) {
      croppedSeries = this.props.series.crop(timerange);
    }
    if(this.props.seriesVolume !== undefined){
      croppedVolumeSeries = this.props.seriesVolume.crop(timerange);
    }

    return (
      <div className="row">
        <div className="col-md-12">
          <Resizable>
            <ChartContainer
                timeRange={timerange}
                hideWeekends={true}
                enablePanZoom={true}
                onTimeRangeChanged={this.handleTimeRangeChange}
                timeAxisStyle={{ axis: { fill: "none", stroke: "none" } }}
              >
                {this.props.series !== undefined ? (
             
                <ChartRow height="300">
                  <Charts>
                    <LineChart
                      axis="y"
                      style={{ close: { normal: { stroke: "steelblue" } } }}
                      columns={["close"]}
                      series={croppedSeries}
                      interpolation="curveBasis"
                    />
                  </Charts>
                  <YAxis
                    id="y"
                    label="Price"
                    min={croppedSeries.min("close")}
                    max={croppedSeries.max("close")}
                    format=",.0f"
                    width="60"
                    type={this.state.mode}
                  />
                </ChartRow>
                 ) : (
                  <div></div>
                )}
                 {this.props.seriesVolume !== undefined ? (
             
                <ChartRow height="200" axisMargin={0}>
                  <Charts>
                    <BarChart
                      axis="y"
                      style={{ volume: { normal: { stroke: "steelblue" } } }}
                      columns={["volume"]}
                      series={croppedVolumeSeries}
                    />
                  </Charts>
                  <YAxis
                    id="y"
                    label="Volume"
                    min={croppedVolumeSeries.min("volume")}
                    max={croppedVolumeSeries.max("volume")}
                    width="60"
                  />
                </ChartRow>
                ) : (
                  <div></div>
                )}
              </ChartContainer>
           
          </Resizable>
        </div>
      </div>
    );
  }
}
