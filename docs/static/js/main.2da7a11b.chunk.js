(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{24:function(t,e,s){},33:function(t,e,s){},39:function(t,e,s){"use strict";s.r(e);var a=s(2),n=s.n(a),r=s(10),i=s.n(r),o=(s(24),s(17)),c=s(3),l=s(5),d=s(7),h=s(6),u=s(16),k=(s(33),s(1)),m=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(){var t;Object(c.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).onChangeWorkMinutes=function(e){t.props.onchange({workMinutes:e.target.value})},t.onChangeShortBreakMinutes=function(e){t.props.onchange({shortBreakMinutes:e.target.value})},t.onChangeLongBreakMinutes=function(e){t.props.onchange({longBreakMinutes:e.target.value})},t.onChangeLongBreakFreq=function(e){t.props.onchange({longBreakFreq:e.target.value})},t}return Object(l.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{class:"d-flex flex-row form-group",children:[Object(k.jsx)("label",{htmlFor:"work-minutes",class:"p-2 col-form-label",children:"Work cycle minutes"}),Object(k.jsx)("div",{class:"p-2",children:Object(k.jsx)("input",{class:"form-control",type:"number",value:this.props.workMinutes,onChange:this.onChangeWorkMinutes,id:"work-minutes"})})]}),Object(k.jsxs)("div",{class:"d-flex flex-row form-group",children:[Object(k.jsx)("label",{htmlFor:"short-break-minutes",class:"p-2 col-form-label",children:"Short break minutes"}),Object(k.jsx)("div",{class:"p-2",children:Object(k.jsx)("input",{class:"form-control",type:"number",value:this.props.shortBreakMinutes,onChange:this.onChangeShortBreakMinutes,id:"short-break-minutes"})})]}),Object(k.jsxs)("div",{class:"d-flex flex-row form-group",children:[Object(k.jsx)("label",{htmlFor:"long-break-minutes",class:"p-2 col-form-label",children:"Long break minutes"}),Object(k.jsx)("div",{class:"p-2",children:Object(k.jsx)("input",{class:"form-control",type:"number",value:this.props.longBreakMinutes,onChange:this.onChangeLongBreakMinutes,id:"long-break-minutes"})})]}),Object(k.jsxs)("div",{class:"d-flex flex-row form-group",children:[Object(k.jsx)("label",{htmlFor:"long-break-freq",class:"p-2 col-form-label",children:"Long break after n cycles"}),Object(k.jsx)("div",{class:"p-2",children:Object(k.jsx)("input",{class:"form-control",type:"number",value:this.props.longBreakFreq,onChange:this.onChangeLongBreakFreq,id:"long-break-freq"})})]})]})}}]),s}(n.a.Component),p=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).onClickStartWorking=function(){a.setStateAndStorage({isWork:!0,timerRunning:!0}),a.markTimerStart(a.props.timerSeconds,Date.now())},a.onClickReturnToWork=function(){var t=a.props.timerSeconds,e=60*a.props.workMinutes;a.setStateAndStorage({isWork:!0,timerSeconds:e}),a.notifyCycleChange(!1,t,e)},a.onClickGoOnABreak=function(){var t=Math.round(a.props.availableBreakSeconds),e=a.props.timerSeconds;a.setStateAndStorage({isWork:!1,timerSeconds:t,availableBreakSeconds:t}),a.notifyCycleChange(!0,e,t)},a.tick=function(){if(a.props.timerRunning){var t=Date.now(),e=Math.round((t-a.props.timerLastUpdatedAt)/1e3);a.tempState={isWork:a.props.isWork,totalWorkedSeconds:a.props.totalWorkedSeconds,availableBreakSeconds:a.props.availableBreakSeconds,hiddenAvailableBreakSeconds:a.props.hiddenAvailableBreakSeconds,timerLastUpdatedAt:a.props.timerLastUpdatedAt,cycle:a.props.cycle,continousWork:a.props.continousWork,timerSeconds:a.props.timerSeconds};for(var s=e;s>0;s--){if(a.tempState.timerSeconds--,a.tempState.isWork){a.tempState.totalWorkedSeconds++;var n=1*a.props.shortBreakMinutes/a.props.workMinutes;a.tempState.availableBreakSeconds>=60*a.props.shortBreakMinutes?a.tempState.availableBreakSeconds+=n:a.tempState.hiddenAvailableBreakSeconds+=n}else a.tempState.availableBreakSeconds--;a.tempState.timerLastUpdatedAt=t,0===a.tempState.timerSeconds&&a.onTimerFinish()}a.setStateAndStorage(a.tempState)}else a.setStateAndStorage({timerLastUpdatedAt:Date.now()})},a.onTimerFinish=function(){var t=a.tempState.isWork,e={};if(t){var s,n,r=a.tempState.cycle+1,i=a.tempState.availableBreakSeconds;r===a.props.longBreakFreq&&(r=0,i+=60*a.props.longBreakMinutes-60*a.props.shortBreakMinutes),i+=a.tempState.hiddenAvailableBreakSeconds,i=Math.round(i),a.tempState.continousWork?(s=60*a.props.workMinutes,n=!0):(s=i,n=!1),e={timerSeconds:s,availableBreakSeconds:i,hiddenAvailableBreakSeconds:0,isWork:n,cycle:r}}else e={timerSeconds:60*a.props.workMinutes,isWork:!0};e.timerRunning=a.props.autoStartTimers;var o=a.tempState.timerSeconds;a.tempState=Object.assign(a.tempState,e),a.props.showNotification(t?"Work finished":"Break finished"),a.notifyCycleChange(t,o,a.tempState.timerSeconds)},a.notifyCycleChange=function(t,e,s){var n=a.props.timerStartedAt+1e3*(a.props.timerStartedWithSeconds-e),r={wasWork:t,start:a.props.timerStartedAt,end:n};a.props.onTimerFinish(r),a.markTimerStart(s,n)},a.markTimerStart=function(t,e){var s={timerStartedAt:e,timerStartedWithSeconds:t};a.props.setStateAndStorage(s)},a.onClickHoldWork=function(){a.setStateAndStorage({timerRunning:!1}),a.notifyCycleChange(a.props.isWork,a.props.timerSeconds,a.props.timerSeconds)},a.onClickResumeWork=function(){a.setStateAndStorage({timerRunning:!0}),a.markTimerStart(a.props.timerSeconds,Date.now())},a.onChangeContinousWork=function(t){a.setStateAndStorage({continousWork:t.target.checked})},a.onChangeAutoStartTimers=function(t){a.setStateAndStorage({autoStartTimers:t.target.checked})},a.setStateAndStorage=function(t){a.props.setStateAndStorage(t)},setInterval(a.tick,1e3),a.tick(),a}return Object(l.a)(s,[{key:"formatSecondsAsTimer",value:function(t){return String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0")}},{key:"formatSecondsAsText",value:function(t){t=Math.round(t);var e=Math.floor(t/3600)+"",s="1"===e?"hour":"hours";t%=3600;var a=Math.floor(t/60)+"",n=(t%=60)%60+"";return e+" "+s+" "+a+" "+("1"===a?"minute":"minutes")+" "+n+" "+("1"===n?"second":"seconds")}},{key:"cyclesUntilLongBreak",get:function(){return this.props.longBreakFreq-this.props.cycle}},{key:"render",value:function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{class:"row",children:Object(k.jsxs)("div",{class:"col-sm",children:[!0===this.props.timerRunning&&Object(k.jsx)("button",{className:"btn btn-warning",onClick:this.onClickHoldWork,children:"Hold work"}),!1===this.props.timerRunning&&Object(k.jsx)("button",{className:"btn btn-secondary",onClick:this.onClickResumeWork,"data-testid":"resume-work-btn",children:"Resume work"}),null===this.props.isWork&&Object(k.jsx)("button",{className:"btn btn-success",onClick:this.onClickStartWorking,"data-testid":"start-working-btn",children:"Start working"})]})}),Object(k.jsx)("div",{class:"row",children:Object(k.jsx)("div",{class:"col-sm",children:Object(k.jsx)("h1",{"data-testid":"timer",children:this.formatSecondsAsTimer(this.props.timerSeconds)})})}),Object(k.jsx)("div",{class:"row",children:Object(k.jsxs)("div",{class:"col-sm",children:[!0===this.props.isWork&&this.props.availableBreakSeconds?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("button",{className:"btn btn-success",onClick:this.onClickGoOnABreak,children:"Go on a break"})}):null,!1===this.props.isWork?Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("button",{className:"btn btn-secondary",onClick:this.onClickReturnToWork,children:"Return to work"})}):null]})}),Object(k.jsxs)("div",{class:"row",children:[Object(k.jsx)("div",{class:"col-sm font-weight-light text-md-right",children:"Total time worked:"}),Object(k.jsx)("div",{class:"col-sm text-md-left","data-testid":"totalWorkedTime",children:this.formatSecondsAsText(this.props.totalWorkedSeconds)})]}),Object(k.jsxs)("div",{class:"row",children:[Object(k.jsx)("div",{class:"col-sm font-weight-light text-md-right",children:"Available break time:"}),Object(k.jsx)("div",{class:"col-sm text-md-left","data-testid":"availableBreakTime",children:this.formatSecondsAsText(this.props.availableBreakSeconds)})]}),Object(k.jsxs)("div",{class:"row",children:[Object(k.jsxs)("div",{class:"col-sm font-weight-light text-md-right",children:["Cycles until long break (",this.props.longBreakMinutes," minutes):"]}),Object(k.jsx)("div",{class:"col-sm text-md-left","data-testid":"longBreakInfo",children:this.cyclesUntilLongBreak})]}),Object(k.jsx)("div",{class:"row",children:Object(k.jsx)("div",{class:"col-sm",children:Object(k.jsxs)("div",{class:"form-check",children:[Object(k.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",onChange:this.onChangeContinousWork,checked:this.props.continousWork,"data-testid":"cont-work",id:"cont-work-check"}),Object(k.jsx)("label",{class:"form-check-label",htmlFor:"cont-work-check",children:"Continuous work"})]})})}),Object(k.jsx)("div",{class:"row",children:Object(k.jsx)("div",{class:"col-sm",children:Object(k.jsxs)("div",{class:"form-check",children:[Object(k.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",onChange:this.onChangeAutoStartTimers,checked:this.props.autoStartTimers,"data-testid":"auto-start-timers",id:"auto-start-timers-check"}),Object(k.jsx)("label",{class:"form-check-label",htmlFor:"auto-start-timers-check",children:"Start timers automatically"})]})})})]})}}]),s}(n.a.Component),j=s(18),b=s(14),g=s(11),S=s(19),f=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"CREATE_TASK_PLACEHOLDER_TEXT",get:function(){return"Enter task name..."}},{key:"SAVE_NEW_TASK_BUTTON_TEXT",get:function(){return"Save new task"}},{key:"NO_TASK_TEXT",get:function(){return"No task"}}]),t}(),v=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).handleTextInputChange=function(t){a.setState({taskInput:t.target.value,createButtonVisible:!a.props.tasks||!a.props.tasks.includes(t.target.value),visibleTasks:a.props.tasks?a.props.tasks.filter((function(e){return e.includes(t.target.value)})):[]})},a.handleSaveClick=function(){a.props.onTaskCreate(a.state.taskInput),a.setState({taskInput:""})},a.handleTaskSelected=function(t){var e=t.target.value;""===e&&(e=null),a.setState({selectedTask:e}),a.props.onTaskSelected(e)},a.state={taskInput:"",selectedTask:t.selectedTask,visibleTasks:t.tasks,createButtonVisible:!0},a}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(t){this.props.selectedTask!==t.selectedTask&&this.setState({selectedTask:this.props.selectedTask})}},{key:"render",value:function(){var t=this;return Object(k.jsxs)("div",{children:[Object(k.jsx)("input",{type:"text",onChange:this.handleTextInputChange,placeholder:f.CREATE_TASK_PLACEHOLDER_TEXT,value:this.state.taskInput}),this.state.createButtonVisible?Object(k.jsx)("button",{onClick:this.handleSaveClick,children:f.SAVE_NEW_TASK_BUTTON_TEXT}):null,Object(k.jsxs)("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons",style:{"flex-wrap":"wrap"},children:[Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("label",{className:"btn btn-secondary"+(null==this.state.selectedTask?" active":""),htmlFor:"no-task",children:[f.NO_TASK_TEXT,Object(k.jsx)("input",{type:"radio",id:"no-task",name:"task",value:"",autocomplete:"off",onChange:this.handleTaskSelected,checked:null==this.state.selectedTask})]})}),this.state&&this.state.visibleTasks&&this.state.visibleTasks.map((function(e){return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("label",{className:"btn btn-secondary"+(e===t.state.selectedTask?" active":""),htmlFor:e,"data-testid":"button-"+e,children:[e,Object(k.jsx)("input",{type:"radio",id:e,name:"task",value:e,autocomplete:"off",onChange:t.handleTaskSelected,checked:e===t.state.selectedTask})]})})}))]})]})}}]),s}(n.a.Component),O=s(41),x=s(42),y=s(43),T="@@@TOTALS",w=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).formatSeconds=function(t){t/=1e3;var e=Math.floor(t/3600),s=Math.floor(t%3600/60);return"".concat(e,"h").concat(s,"m")},a.state={timesMap:a.calculateTimes()},a}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(t){this.props.eventsTimestamp!==t.eventsTimestamp&&this.setState({timesMap:this.calculateTimes()})}},{key:"calculateTimes",value:function(){var t={},e=0,s=0,a=0;return this.props.events.forEach((function(n){if(n.isWork){var r=Object(O.a)(n.start),i=Object(x.a)(n.start),o=Object(y.a)(n.start);if(r||i||o){var c=n.task;if(null!==c&&void 0!==c&&""!==c&&"null"!==c||(c=f.NO_TASK_TEXT),c in t||(t[c]={today:0,yesterday:0,week:0}),void 0!==n.end){var l=n.end.getTime()-n.start.getTime();r?(t[c].today+=l,e+=l):i&&(t[c].yesterday+=l,s+=l),o&&(t[c].week+=l,a+=l)}}}})),Object.entries(t).forEach((function(t){t[1].todayPercentage=Math.round(t[1].today/e*100)+"%",t[1].yesterdayPercentage=Math.round(t[1].yesterday/s*100)+"%",t[1].weekPercentage=Math.round(t[1].week/a*100)+"%"})),t[T]={today:e,yesterday:s,week:a},t}},{key:"render",value:function(){var t=this;return Object(k.jsxs)("table",{class:"table-sm",children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{children:[Object(k.jsx)("th",{children:"Task"}),Object(k.jsx)("th",{children:"Today"}),Object(k.jsx)("th",{children:"%"}),Object(k.jsx)("th",{children:"Yesterday"}),Object(k.jsx)("th",{children:"%"}),Object(k.jsx)("th",{children:"Week"}),Object(k.jsx)("th",{children:"%"})]})}),Object(k.jsxs)("tbody",{children:[Object.entries(this.state.timesMap).filter((function(t){return t[0]!==T})).map((function(e){return Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:e[0]}),Object(k.jsx)("td",{"data-testid":"today-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].today)}),Object(k.jsx)("td",{"data-testid":"todayp-"+e[0].charAt(0)+e[0].length,children:e[1].todayPercentage}),Object(k.jsx)("td",{"data-testid":"yesterday-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].yesterday)}),Object(k.jsx)("td",{"data-testid":"yesterdayp-"+e[0].charAt(0)+e[0].length,children:e[1].yesterdayPercentage}),Object(k.jsx)("td",{"data-testid":"week-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].week)}),Object(k.jsx)("td",{"data-testid":"weekp-"+e[0].charAt(0)+e[0].length,children:e[1].weekPercentage})]},e[0])})),Object(k.jsxs)("tr",{children:[Object(k.jsx)("td",{children:"Total"}),Object(k.jsx)("td",{"data-testid":"today-total",children:this.formatSeconds(this.state.timesMap[T].today)}),Object(k.jsx)("td",{"data-testid":"todayp-total",children:"100%"}),Object(k.jsx)("td",{"data-testid":"yesterday-total",children:this.formatSeconds(this.state.timesMap[T].yesterday)}),Object(k.jsx)("td",{"data-testid":"yesterdayp-total",children:"100%"}),Object(k.jsx)("td",{"data-testid":"week-total",children:this.formatSeconds(this.state.timesMap[T].week)}),Object(k.jsx)("td",{"data-testid":"weekp-total",children:"100%"})]})]})]})}}]),s}(n.a.Component),B=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).onClickReset=function(){window.confirm("Are you sure you want to reset everything to inital state?")&&a.setStateAndStorage(a.getStateForReset())},a.onClickSettings=function(){a.setState({settingsVisible:!a.state.settingsVisible})},a.setStateAndStorage=function(t){a.setState(t),a.storage&&(a.storage.state=Object.assign(a.state,t))},a.onChangeSettings=function(t){a.setStateAndStorage(t)},a.getDefaultState=function(){return{timerSeconds:60*a.defaultSettings.workMinutes,totalWorkedSeconds:0,isWork:null,availableBreakSeconds:0,hiddenAvailableBreakSeconds:0,cycle:0,notificationsGranted:!1,timerRunning:null,continousWork:!1,timerLastUpdatedAt:Date.now(),autoStartTimers:!0,workMinutes:a.defaultSettings.workMinutes,shortBreakMinutes:a.defaultSettings.shortBreakMinutes,longBreakMinutes:a.defaultSettings.longBreakMinutes,longBreakFreq:a.defaultSettings.longBreakFreq,settingsVisible:!1,events:[],timerStartedAt:null,timerStartedWithSeconds:null,tasks:[]}},a.getStateForReset=function(){var t=a.getDefaultState();return t.continousWork=a.state.continousWork,t.autoStartTimers=a.state.autoStartTimers,t.workMinutes=a.state.workMinutes,t.shortBreakMinutes=a.state.shortBreakMinutes,t.longBreakMinutes=a.state.longBreakMinutes,t.longBreakFreq=a.state.longBreakFreq,t.timerSeconds=60*a.state.workMinutes,t.events=a.state.events,t.tasks=a.state.tasks,t},a.handleTimerStateChange=function(t){a.setStateAndStorage(t)},a.handleShowNotification=function(t){a.notifications&&a.notificationsGranted&&a.notifications.createNotification(t)},a.handleEventCreated=function(t){var e=t.wasWork?"Work":"Break";void 0!==a.state.selectedTask&&(e+=" ("+a.state.selectedTask+")");var s={title:e,isWork:t.wasWork,start:new Date(t.start),end:new Date(t.end),color:t.wasWork?"#3788d8":"orange",task:a.state.selectedTask};if(s.start.getTime()!==s.end.getTime()){var n=[].concat(Object(o.a)(a.state.events),[s]);n.length>1&&n[n.length-1].isWork===n[n.length-2].isWork&&n[n.length-2].end.getTime()===n[n.length-1].start.getTime()&&n[n.length-1].task===n[n.length-2].task&&((n=n.slice(0,n.length-1))[n.length-1].end=new Date(t.end)),a.setStateAndStorage({events:n}),a.setState({eventsTimestamp:Date.now()})}},a.handleTaskCreated=function(t){var e=a.state.tasks;e.push(t),a.setStateAndStorage({tasks:e})},a.handleTaskSelected=function(t){var e=a.state.timerStartedAt+1e3*(a.state.timerStartedWithSeconds-a.state.timerSeconds);a.handleEventCreated({wasWork:a.state.isWork,start:a.state.timerStartedAt,end:e}),a.setStateAndStorage({timerStartedAt:e,timerStartedWithSeconds:a.state.timerSeconds,selectedTask:t})},a.defaultSettings=t.defaultSettings,a.storage=t.storage,a.state=a.getDefaultState(),a.storage&&a.storage.state&&(a.state=Object.assign(a.state,a.storage.state),a.state.events.forEach((function(t){t.start=new Date(Date.parse(t.start)),t.end=new Date(Date.parse(t.end))}))),t.notifications&&(a.notifications=t.notifications,a.notifications.requestPermission().then((function(t){"granted"===t&&(a.notificationsGranted=!0)}))),a.plugins=[b.a],a}return Object(l.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(u.Helmet,{children:Object(k.jsx)("title",{children:"Timer"})}),Object(k.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",integrity:"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",crossorigin:"anonymous"}),Object(k.jsx)("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossOrigin:"anonymous"}),Object(k.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",crossOrigin:"anonymous"}),Object(k.jsx)("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",integrity:"sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV",crossorigin:"anonymous"}),Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("div",{className:"row",children:Object(k.jsx)("div",{className:"col-sm offset-sm-11",children:Object(k.jsx)("button",{className:"btn",onClick:this.onClickReset,"data-testid":"reset-btn",children:"Reset"})})}),Object(k.jsx)(p,{timerSeconds:this.state.timerSeconds,totalWorkedSeconds:this.state.totalWorkedSeconds,isWork:this.state.isWork,availableBreakSeconds:this.state.availableBreakSeconds,hiddenAvailableBreakSeconds:this.state.hiddenAvailableBreakSeconds,cycle:this.state.cycle,timerRunning:this.state.timerRunning,continousWork:this.state.continousWork,timerLastUpdatedAt:this.state.timerLastUpdatedAt,autoStartTimers:this.state.autoStartTimers,workMinutes:this.state.workMinutes,shortBreakMinutes:this.state.shortBreakMinutes,longBreakMinutes:this.state.longBreakMinutes,longBreakFreq:this.state.longBreakFreq,timerStartedAt:this.state.timerStartedAt,timerStartedWithSeconds:this.state.timerStartedWithSeconds,setStateAndStorage:this.handleTimerStateChange,showNotification:this.handleShowNotification,onTimerFinish:this.handleEventCreated}),Object(k.jsx)("button",{className:"btn m-2",type:"button",onClick:this.onClickSettings,children:"Settings"}),Object(k.jsx)("div",{className:this.state.settingsVisible?"collapse show":"collapse",children:Object(k.jsx)("div",{className:"card card-body row",children:Object(k.jsx)(m,{workMinutes:this.state.workMinutes,shortBreakMinutes:this.state.shortBreakMinutes,longBreakMinutes:this.state.longBreakMinutes,longBreakFreq:this.state.longBreakFreq,onchange:this.onChangeSettings})})}),Object(k.jsx)("div",{className:"row",children:Object(k.jsx)(v,{onTaskCreate:this.handleTaskCreated,onTaskSelected:this.handleTaskSelected,tasks:this.state.tasks,selectedTask:this.state.selectedTask})}),Object(k.jsx)("div",{className:"row",children:Object(k.jsx)(w,{events:this.state.events,eventsTimestamp:this.state.eventsTimestamp})}),Object(k.jsx)("div",{className:"card card-body",children:Object(k.jsx)(j.a,{events:this.state.events,plugins:[b.a,g.b,S.a],initialView:"timeGridWeek",headerToolbar:{right:"today prev,next dayGridMonth,timeGridWeek,timeGridDay listWeek"},slotDuration:"00:15:00"})})]})]})}}]),s}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(){return Object(c.a)(this,s),e.call(this,25,5,10,4,480)}return s}(function(){function t(e,s,a,n){Object(c.a)(this,t),this._workMinutes=e,this._shortBreakMinutes=s,this._longBreakMinutes=a,this._longBreakFreq=n}return Object(l.a)(t,[{key:"workMinutes",get:function(){return this._workMinutes}},{key:"shortBreakMinutes",get:function(){return this._shortBreakMinutes}},{key:"longBreakMinutes",get:function(){return this._longBreakMinutes}},{key:"longBreakFreq",get:function(){return this._longBreakFreq}}]),t}()),A=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"requestPermission",value:function(){return Notification.requestPermission()}},{key:"createNotification",value:function(t,e){new Notification(t,e)}}]),t}(),M=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"state",get:function(){return JSON.parse(localStorage.getItem("timer_state"))},set:function(t){localStorage.setItem("timer_state",JSON.stringify(t))}}]),t}();i.a.render(Object(k.jsx)(B,{basename:"/cooltimer",defaultSettings:new C,notifications:new A,storage:new M}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.2da7a11b.chunk.js.map