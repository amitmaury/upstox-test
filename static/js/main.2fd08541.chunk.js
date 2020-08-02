(this["webpackJsonpupstox-test"]=this["webpackJsonpupstox-test"]||[]).push([[0],{187:function(e,t,n){e.exports=n(292)},192:function(e,t,n){},193:function(e,t,n){},289:function(e,t){},292:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(39),o=n.n(i),c=(n(192),n(51)),l=n(44),s=(n(193),Object(l.f)((function(e){var t=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("span",{className:"navbar-toggle-span",onClick:function(){t.current.classList.toggle("active")}},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("ul",{className:"main-nav-bar",ref:t},r.a.createElement("li",null," ",r.a.createElement(c.b,{to:"/",className:"nav-link-bar"},"Home")),r.a.createElement("li",null," ",r.a.createElement(c.b,{to:"/liveChart",className:"nav-link-bar"},"Live Chart")))))}))),m=n(45),u=n(96),h=n(20),p=n.n(h),v=n(6),E=n(178),f=n.n(E),b=function(){return function(e){return e({type:"GET_HISTORICAL_LIST_REQUEST"}),f()("".concat("http://kaboom.rksv.net/api/","historical"),{method:"GET",headers:{"content-type":"application/json","Accept-Encoding":"gzip, deflate"}}).then((function(e){return e.data})).catch((function(e){throw e})).then((function(t){e({type:"GET_HISTORICAL_LIST_SUCCESS",historicalData:t})})).catch((function(t){e({type:"GET_HISTORICAL_LIST_FAILURE",error:t})}))}},g=n(179),d=n(180),w=n(185),I=n(184),T=n(26),O=function(e){Object(w.a)(n,e);var t=Object(I.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).handleTimeRangeChange=function(e){a.setState({timerange:e})},a.state={mode:"log",timerange:new v.TimeRange([1236985288649,1326654398343])},a}return Object(d.a)(n,[{key:"render",value:function(){var e,t,n=this.state.timerange;return void 0!==this.props.series&&(e=this.props.series.crop(n)),void 0!==this.props.seriesVolume&&(t=this.props.seriesVolume.crop(n)),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(T.Resizable,null,r.a.createElement(T.ChartContainer,{timeRange:n,hideWeekends:!0,enablePanZoom:!0,onTimeRangeChanged:this.handleTimeRangeChange,timeAxisStyle:{axis:{fill:"none",stroke:"none"}}},void 0!==this.props.series?r.a.createElement(T.ChartRow,{height:"300"},r.a.createElement(T.Charts,null,r.a.createElement(T.LineChart,{axis:"y",style:{close:{normal:{stroke:"steelblue"}}},columns:["close"],series:e,interpolation:"curveBasis"})),r.a.createElement(T.YAxis,{id:"y",label:"Price",min:e.min("close"),max:e.max("close"),format:",.0f",width:"60",type:this.state.mode})):r.a.createElement("div",null),void 0!==this.props.seriesVolume?r.a.createElement(T.ChartRow,{height:"200",axisMargin:0},r.a.createElement(T.Charts,null,r.a.createElement(T.BarChart,{axis:"y",style:{volume:{normal:{stroke:"steelblue"}}},columns:["volume"],series:t})),r.a.createElement(T.YAxis,{id:"y",label:"Volume",min:t.min("volume"),max:t.max("volume"),width:"60"})):r.a.createElement("div",null)))))}}]),n}(r.a.Component),S=["time","open","high","low","close"],C=Object(u.b)((function(e){return{historicalData:e.historicalData}}),(function(e){return{getHistoricalList:function(){e(b())}}}))((function(e){var t=Object(a.useState)({}),n=Object(m.a)(t,2),i=n[0],o=(n[1],Object(a.useState)()),c=Object(m.a)(o,2),l=c[0],s=(c[1],Object(a.useState)()),u=Object(m.a)(s,2),h=u[0];u[1];if(Object(a.useEffect)((function(){e.getHistoricalList()}),[]),(i=e.historicalData.historicalData).length>0){var E=i.map((function(e){var t=e.split(","),n=t[0],a=parseInt(t[1]),r=parseInt(t[2]),i=parseInt(t[3]),o=parseInt(t[4]),c=p()(new Date(parseInt(n)));return new v.TimeEvent(c.toDate(),{open:+a,close:+o,low:+i,high:+r})})),f=new v.Collection(E).sortByTime(),b=new v.TimeSeries({name:"Upstox-price",columns:S,collection:f}),g=i.map((function(e){var t=e.split(","),n=t[0],a=p()(new Date(parseInt(n))),r=p()(a).format("YYYY/MM/DD").replace(/\//g,"-"),i=parseInt(t[5]);return new v.IndexedEvent(r,{volume:+i})})),d=new v.Collection(g).sortByTime();l=b,h=new v.TimeSeries({name:"Upstox-volume",utc:!1,collection:d})}return r.a.createElement("div",null,r.a.createElement(O,{series:l,seriesVolume:h}))})),j=n(182),x=n.n(j),y=["time","open","high","low","close"],D=function(e){var t=Object(a.useState)({}),n=Object(m.a)(t,2),i=n[0],o=(n[1],Object(a.useState)()),c=Object(m.a)(o,2),l=c[0],s=c[1],u=Object(a.useState)(),h=Object(m.a)(u,2);h[0],h[1];Object(a.useEffect)((function(){var e=x()("http://kaboom.rksv.net/watch");e.on("connect",(function(){e.emit("ping",{}),e.emit("sub",{state:!0})})),e.on("data",(function(t){e.emit("sub",{state:!0}),i=t.split(),E(i)})),e.on("error",(function(e){console.log(e)}))}));var E=function(){var e=i.map((function(e){var t=e.split(","),n=t[0],a=parseInt(t[1]),r=parseInt(t[2]),i=parseInt(t[3]),o=parseInt(t[4]),c=p()(new Date(parseInt(n)));return new v.TimeEvent(c.toDate(),{open:+a,close:+o,low:+i,high:+r})})),t=new v.Collection(e).sortByTime(),n=new v.TimeSeries({name:"Upstox-price",columns:y,collection:t}),a=i.map((function(e){var t=e.split(","),n=t[0],a=p()(new Date(parseInt(n))),r=p()(a).format("YYYY/MM/DD").replace(/\//g,"-"),i=parseInt(t[5]);return new v.IndexedEvent(r,{volume:+i})})),r=new v.Collection(a).sortByTime(),o=new v.TimeSeries({name:"Upstox-volume",utc:!1,collection:r});o,s(l=n)};return r.a.createElement("div",null,r.a.createElement(O,{series:l}))},L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(s,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:C}),r.a.createElement(l.a,{exact:!0,path:"/liveChart",component:D}))))};var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(52),k=n(183),A={historicalData:[],isFetching:!1,error:void 0},U=Object(_.c)({historicalData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_HISTORICAL_LIST_REQUEST":return Object.assign({},e,{isFetching:!0});case"GET_HISTORICAL_LIST_SUCCESS":return Object.assign({},e,{isFetching:!1,historicalData:t.historicalData});case"GET_HISTORICAL_LIST_FAILURE":return Object.assign({},e,{isFetching:!1,error:t.error});default:return e}}}),Y=Object(_.d)(U,Object(_.a)(k.a));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:Y},r.a.createElement(R,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.2fd08541.chunk.js.map