(this["webpackJsonp25-clock"]=this["webpackJsonp25-clock"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),i=n.n(c),s=n(18),a=n.n(s),o=(n(30),n(7)),u=(n(31),n(19)),p=n(10),h=n(8),b=n(9),j=n(12),l=n(11),d=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).formatTime=function(e){var t=function(e){return Math.floor(e).toString().padStart(2,"0")},n=t(e/6e4),r=t(e%6e4/1e3);return"".concat(n,":").concat(r)},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:this.formatTime(this.props.time)})}}]),n}(c.Component),g=n(51),m=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).updateTimer=function(){var t="session"===e.props.currentType?"break":"session";if(e.props.running&&e.props.currentTimer>0){var n=e.props.currentTimer-500;e.props.dispatch({type:"UPDATE_TIMER",currentTimer:n})}else e.props.running&&0===e.props.currentTimer&&(e.props.dispatch({type:"CHANGE_TYPE",currentType:t,currentTimer:"session"===e.props.currentType?e.props.breakLength:e.props.sessionLength}),e.playAudio())},e.playAudio=function(){var e=document.getElementById("beep");e.currentTime=0,e.play()},e.progressCircle=function(){var t="session"===e.props.currentType?e.props.sessionLength:e.props.breakLength;return e.props.currentTimer/t*100},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.updateTimer()}),10)}},{key:"render",value:function(){return Object(r.jsxs)("div",{id:"Timer",children:[Object(r.jsx)("h2",{className:"capitalize",id:"timer-label",children:this.props.currentType}),Object(r.jsxs)("div",{id:"progress-radius",children:[Object(r.jsx)(g.a,{className:"circularProgress",variant:"determinate",thickness:2,size:"7.9rem",value:this.progressCircle()},this.props.currentTimer/6e4),Object(r.jsx)("h1",{id:"time-left",children:Object(r.jsx)(d,{time:this.props.currentTimer})})]}),Object(r.jsx)("audio",{src:"https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav",preload:"auto",id:"beep"})]})}}]),n}(c.Component),O=Object(p.b)((function(e){return{currentType:e.currentType,currentTimer:e.currentTimer,running:e.running,sessionLength:e.sessionLength,breakLength:e.breakLength}}))(m),T=n(13),f=n(6);n(16).b.add(f.c,f.d,f.e,f.b);var v=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).changeStatus=function(){e.props.dispatch({type:"CHANGE_STATUS",running:!e.props.running})},e.resetTimer=function(){var t=document.getElementById("beep");t.pause(),t.currentTime=0,e.props.dispatch({type:"RESET_TIMER"})},e.currentStatus=function(){return e.props.running?Object(r.jsx)(T.a,{icon:f.c}):Object(r.jsx)(T.a,{icon:f.d})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(r.jsxs)("div",{id:"TimerButtons",children:[Object(r.jsx)("button",{className:"btn-one timer-btn",id:"start_stop",onClick:this.changeStatus,children:this.currentStatus()}),Object(r.jsx)("button",{className:"btn-one timer-btn",id:"reset",onClick:this.resetTimer,children:Object(r.jsx)(T.a,{icon:f.e})})]})}}]),n}(c.Component),y=Object(p.b)((function(e){return{running:e.running}}))(v),L=n(14),k=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(h.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(t,n){e.props[n]<=6e4&&"dec"===t||e.props[n]>=36e5&&"inc"===t||e.props.running||e.updateLength(t,n)},e.updateLength=function(t,n){var r,c,i,s;"sessionLength"===n?(c=e.props.sessionLength,i="breakLength",s=e.props.breakLength):(c=e.props.breakLength,i="sessionLength",s=e.props.sessionLength),c="inc"===t?c+6e4:c-6e4;var a=e.props.currentType.concat("Length")===n?c:e.props.currentTimer;e.props.dispatch((r={type:"UPDATE_LENGTH"},Object(L.a)(r,n,c),Object(L.a)(r,i,s),Object(L.a)(r,"currentTimer",a),r))},e.formatString=function(t){return e.props.type.replace("Length",t)},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)("div",{id:this.formatString("-length-div"),children:[Object(r.jsx)("h3",{className:"capitalize",id:this.formatString("-label"),children:this.formatString(" Length")}),Object(r.jsx)("button",{className:"btn-one",id:this.formatString("-decrement"),onClick:function(){return e.handleClick("dec",e.props.type)},children:Object(r.jsx)(T.a,{icon:f.a})}),Object(r.jsx)("p",{id:this.formatString("-length"),children:"sessionLength"===this.props.type?this.props.sessionLength/6e4:this.props.breakLength/6e4}),Object(r.jsx)("button",{className:"btn-one",id:this.formatString("-increment"),onClick:function(){return e.handleClick("inc",e.props.type)},children:Object(r.jsx)(T.a,{icon:f.b})})]})}}]),n}(c.Component),x=Object(p.b)((function(e){return{running:e.running,sessionLength:e.sessionLength,breakLength:e.breakLength,currentType:e.currentType,currentTimer:e.currentTimer}}))(k),C="UPDATE_TIMER",E="CHANGE_STATUS",S="CHANGE_TYPE",A="UPDATE_LENGTH",N="RESET_TIMER",w={running:!1,currentType:"session",currentTimer:15e5,sessionLength:15e5,breakLength:3e5},_=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(o.a)(Object(o.a)({},e),{},{currentTimer:t.currentTimer});case E:return Object(o.a)(Object(o.a)({},e),{},{running:t.running});case S:return Object(o.a)(Object(o.a)({},e),{},{currentType:t.currentType,currentTimer:t.currentTimer});case A:return Object(o.a)(Object(o.a)({},e),{},{currentTimer:t.currentTimer,sessionLength:t.sessionLength,breakLength:t.breakLength});case N:return Object(o.a)({},w);default:return e}})),P=function(){return Object(r.jsx)(p.a,{store:_,children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(O,{}),Object(r.jsx)(y,{}),Object(r.jsxs)("div",{id:"lengths",children:[Object(r.jsx)(x,{type:"sessionLength"}),Object(r.jsx)(x,{type:"breakLength"})]}),Object(r.jsxs)("p",{id:"author",children:["Created by\xa0",Object(r.jsx)("a",{class:"linkedin",href:"https://www.linkedin.com/in/nicolas-poore/",children:"Nicol\xe1s Poore"})]})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root")),I()}},[[39,1,2]]]);
//# sourceMappingURL=main.ac895f78.chunk.js.map