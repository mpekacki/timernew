(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{10:function(t,e,a){t.exports=a(25)},15:function(t,e,a){},24:function(t,e,a){},25:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(8),o=a.n(r),i=(a(15),a(1)),c=a(2),l=a(4),u=a(3),m=a(5),k=a(9),d=(a(24),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).componentWillReceiveProps=function(t){a.setState(t)},a.onChangeWorkMinutes=function(t){a.onchange({workMinutes:t.target.value})},a.onChangeShortBreakMinutes=function(t){a.onchange({shortBreakMinutes:t.target.value})},a.onChangeLongBreakMinutes=function(t){a.onchange({longBreakMinutes:t.target.value})},a.onChangeLongBreakFreq=function(t){a.onchange({longBreakFreq:t.target.value})},a.state={workMinutes:t.workMinutes,shortBreakMinutes:t.shortBreakMinutes,longBreakMinutes:t.longBreakMinutes,longBreakFreq:t.longBreakFreq},a.onchange=t.onchange,a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{class:"d-flex flex-row form-group"},s.a.createElement("label",{for:"work-minutes",class:"p-2 col-form-label"},"Work cycle minutes"),s.a.createElement("div",{class:"p-2"},s.a.createElement("input",{class:"form-control",type:"number",value:this.state.workMinutes,onChange:this.onChangeWorkMinutes,id:"work-minutes"}))),s.a.createElement("div",{class:"d-flex flex-row form-group"},s.a.createElement("label",{for:"short-break-minutes",class:"p-2 col-form-label"},"Short break minutes"),s.a.createElement("div",{class:"p-2"},s.a.createElement("input",{class:"form-control",type:"number",value:this.state.shortBreakMinutes,onChange:this.onChangeShortBreakMinutes,id:"short-break-minutes"}))),s.a.createElement("div",{class:"d-flex flex-row form-group"},s.a.createElement("label",{for:"long-break-minutes",class:"p-2 col-form-label"},"Long break minutes"),s.a.createElement("div",{class:"p-2"},s.a.createElement("input",{class:"form-control",type:"number",value:this.state.longBreakMinutes,onChange:this.onChangeLongBreakMinutes,id:"long-break-minutes"}))),s.a.createElement("div",{class:"d-flex flex-row form-group"},s.a.createElement("label",{for:"long-break-freq",class:"p-2 col-form-label"},"Long break after n cycles"),s.a.createElement("div",{class:"p-2"},s.a.createElement("input",{class:"form-control",type:"number",value:this.state.longBreakFreq,onChange:this.onChangeLongBreakFreq,id:"long-break-freq"}))))}}]),e}(s.a.Component)),h=function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).onClickStartWorking=function(){a.setStateAndStorage({isWork:!0,timerRunning:!0})},a.onClickReturnToWork=function(){a.setStateAndStorage({isWork:!0,timerSeconds:60*a.state.workMinutes})},a.onClickGoOnABreak=function(){var t=Math.round(a.state.availableBreakSeconds);a.setStateAndStorage({isWork:!1,timerSeconds:t,availableBreakSeconds:t})},a.tick=function(){if(a.state.timerRunning){var t=Date.now(),e=Math.round((t-a.state.timerLastUpdatedAt)/1e3);a.tempState=a.state;for(var n=e;n>0;n--){if(a.tempState.timerSeconds--,a.tempState.isWork){a.tempState.totalWorkedSeconds++;var s=1*a.state.shortBreakMinutes/a.state.workMinutes;a.tempState.availableBreakSeconds>=60*a.state.shortBreakMinutes?a.tempState.availableBreakSeconds+=s:a.tempState.hiddenAvailableBreakSeconds+=s}else a.tempState.availableBreakSeconds--;a.tempState.timerLastUpdatedAt=t,0===a.tempState.timerSeconds&&a.onTimerFinish()}a.setStateAndStorage(a.tempState)}else a.setStateAndStorage({timerLastUpdatedAt:Date.now()})},a.onTimerFinish=function(){var t=a.tempState.isWork,e={};if(t){var n,s,r=a.tempState.cycle+1,o=a.tempState.availableBreakSeconds;r===a.state.longBreakFreq&&(r=0,o+=60*a.state.longBreakMinutes-60*a.state.shortBreakMinutes),o+=a.tempState.hiddenAvailableBreakSeconds,o=Math.round(o),a.tempState.continousWork?(n=60*a.state.workMinutes,s=!0):(n=o,s=!1),e={timerSeconds:n,availableBreakSeconds:o,hiddenAvailableBreakSeconds:0,isWork:s,cycle:r}}else e={timerSeconds:60*a.state.workMinutes,isWork:!0};if(e.timerRunning=a.state.autoStartTimers,a.tempState=Object.assign(a.tempState,e),a.notifications&&a.notificationsGranted){var i=t?"Work finished":"Break finished";a.notifications.createNotification(i)}},a.onClickHoldWork=function(){a.setStateAndStorage({timerRunning:!1})},a.onClickResumeWork=function(){a.setStateAndStorage({timerRunning:!0})},a.onClickReset=function(){window.confirm("Are you sure you want to reset everything to inital state?")&&a.setStateAndStorage(a.getDefaultStateWithoutSettings())},a.onClickSettings=function(){a.setState({settingsVisible:!a.state.settingsVisible})},a.onChangeContinousWork=function(t){a.setStateAndStorage({continousWork:t.target.checked})},a.onChangeAutoStartTimers=function(t){a.setStateAndStorage({autoStartTimers:t.target.checked})},a.setStateAndStorage=function(t){a.setState(t),a.storage&&(a.storage.state=Object.assign(a.state,t))},a.onChangeSettings=function(t){a.setStateAndStorage(t)},a.getDefaultState=function(){return{timerSeconds:60*a.defaultSettings.workMinutes,totalWorkedSeconds:0,isWork:null,availableBreakSeconds:0,hiddenAvailableBreakSeconds:0,cycle:0,notificationsGranted:!1,timerRunning:null,continousWork:!1,timerLastUpdatedAt:Date.now(),autoStartTimers:!0,workMinutes:a.defaultSettings.workMinutes,shortBreakMinutes:a.defaultSettings.shortBreakMinutes,longBreakMinutes:a.defaultSettings.longBreakMinutes,longBreakFreq:a.defaultSettings.longBreakFreq,settingsVisible:!1}},a.getDefaultStateWithoutSettings=function(){var t=a.getDefaultState();return t.continousWork=a.state.continousWork,t.autoStartTimers=a.state.autoStartTimers,t.workMinutes=a.state.workMinutes,t.shortBreakMinutes=a.state.shortBreakMinutes,t.longBreakMinutes=a.state.longBreakMinutes,t.longBreakFreq=a.state.longBreakFreq,t.timerSeconds=60*a.state.workMinutes,t},a.defaultSettings=t.defaultSettings,a.storage=t.storage,a.state=a.getDefaultState(),a.storage&&a.storage.state&&(a.state=Object.assign(a.state,a.storage.state)),setInterval(a.tick,1e3),a.tick(),t.notifications&&(a.notifications=t.notifications,a.notifications.requestPermission().then((function(t){"granted"===t&&(a.notificationsGranted=!0)}))),a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"formatSecondsAsTimer",value:function(t){return String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0")}},{key:"formatSecondsAsText",value:function(t){t=Math.round(t);var e=Math.floor(t/3600)+"",a="1"===e?"hour":"hours";t%=3600;var n=Math.floor(t/60)+"",s=(t%=60)%60+"";return e+" "+a+" "+n+" "+("1"===n?"minute":"minutes")+" "+s+" "+("1"===s?"second":"seconds")}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(k.Helmet,null,s.a.createElement("title",null,this.formatSecondsAsTimer(this.state.timerSeconds))),s.a.createElement("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),s.a.createElement("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossorigin:"anonymous"}),s.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",crossorigin:"anonymous"}),s.a.createElement("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",integrity:"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",crossorigin:"anonymous"}),s.a.createElement("div",{class:"container"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm offset-sm-11"},s.a.createElement("button",{className:"btn",onClick:this.onClickReset,"data-testid":"reset-btn"},"Reset"))),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm"},!0===this.state.timerRunning&&s.a.createElement("button",{className:"btn btn-warning",onClick:this.onClickHoldWork},"Hold work"),!1===this.state.timerRunning&&s.a.createElement("button",{className:"btn btn-secondary",onClick:this.onClickResumeWork,"data-testid":"resume-work-btn"},"Resume work"),null===this.state.isWork&&s.a.createElement("button",{className:"btn btn-success",onClick:this.onClickStartWorking,"data-testid":"start-working-btn"},"Start working"))),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm"},s.a.createElement("h1",{"data-testid":"timer"},this.formatSecondsAsTimer(this.state.timerSeconds)))),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm"},!0===this.state.isWork&&this.state.availableBreakSeconds?s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn btn-success",onClick:this.onClickGoOnABreak},"Go on a break")):null,!1===this.state.isWork?s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn btn-secondary",onClick:this.onClickReturnToWork},"Return to work")):null)),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm font-weight-light text-md-right"},"Total time worked:"),s.a.createElement("div",{class:"col-sm text-md-left","data-testid":"totalWorkedTime"},this.formatSecondsAsText(this.state.totalWorkedSeconds))),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm font-weight-light text-md-right"},"Available break time:"),s.a.createElement("div",{class:"col-sm text-md-left","data-testid":"availableBreakTime"},this.formatSecondsAsText(this.state.availableBreakSeconds))),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm font-weight-light text-md-right"},"Cycles until long break (",this.state.longBreakMinutes," minutes):"),s.a.createElement("div",{class:"col-sm text-md-left","data-testid":"longBreakInfo"},this.cyclesUntilLongBreak)),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm"},s.a.createElement("div",{class:"form-check"},s.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",onChange:this.onChangeContinousWork,checked:this.state.continousWork,"data-testid":"cont-work",id:"cont-work-check"}),s.a.createElement("label",{class:"form-check-label",for:"cont-work-check"},"Continuous work")))),s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"col-sm"},s.a.createElement("div",{class:"form-check"},s.a.createElement("input",{class:"form-check-input",type:"checkbox",value:"",onChange:this.onChangeAutoStartTimers,checked:this.state.autoStartTimers,"data-testid":"auto-start-timers",id:"auto-start-timers-check"}),s.a.createElement("label",{class:"form-check-label",for:"auto-start-timers-check"},"Start timers automatically")))),s.a.createElement("button",{class:"btn m-2",type:"button",onClick:this.onClickSettings},"Settings"),s.a.createElement("div",{class:this.state.settingsVisible?"collapse show":"collapse"},s.a.createElement("div",{class:"card card-body"},s.a.createElement(d,{workMinutes:this.state.workMinutes,shortBreakMinutes:this.state.shortBreakMinutes,longBreakMinutes:this.state.longBreakMinutes,longBreakFreq:this.state.longBreakFreq,onchange:this.onChangeSettings})))))}},{key:"cyclesUntilLongBreak",get:function(){return this.state.longBreakFreq-this.state.cycle}}]),e}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).call(this,25,5,10,4,480))}return Object(m.a)(e,t),e}(function(){function t(e,a,n,s){Object(i.a)(this,t),this._workMinutes=e,this._shortBreakMinutes=a,this._longBreakMinutes=n,this._longBreakFreq=s}return Object(c.a)(t,[{key:"workMinutes",get:function(){return this._workMinutes}},{key:"shortBreakMinutes",get:function(){return this._shortBreakMinutes}},{key:"longBreakMinutes",get:function(){return this._longBreakMinutes}},{key:"longBreakFreq",get:function(){return this._longBreakFreq}}]),t}()),f=function(){function t(){Object(i.a)(this,t)}return Object(c.a)(t,[{key:"requestPermission",value:function(){return Notification.requestPermission()}},{key:"createNotification",value:function(t,e){new Notification(t,e)}}]),t}(),S=function(){function t(){Object(i.a)(this,t)}return Object(c.a)(t,[{key:"state",get:function(){return JSON.parse(localStorage.getItem("timer_state"))},set:function(t){localStorage.setItem("timer_state",JSON.stringify(t))}}]),t}();o.a.render(s.a.createElement(h,{basename:"/cooltimer",defaultSettings:new g,notifications:new f,storage:new S}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.d176c282.chunk.js.map