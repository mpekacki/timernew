(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{24:function(t,e,s){},33:function(t,e,s){},39:function(t,e,s){"use strict";s.r(e);var a=s(2),n=s.n(a),r=s(10),i=s.n(r),o=(s(24),s(17)),c=s(3),l=s(5),d=s(7),h=s(6),u=s(16),m=(s(33),s(1)),k=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(){var t;Object(c.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))).onChangeWorkMinutes=function(e){t.props.onchange({workMinutes:e.target.value})},t.onChangeShortBreakMinutes=function(e){t.props.onchange({shortBreakMinutes:e.target.value})},t.onChangeLongBreakMinutes=function(e){t.props.onchange({longBreakMinutes:e.target.value})},t.onChangeLongBreakFreq=function(e){t.props.onchange({longBreakFreq:e.target.value})},t}return Object(l.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"d-flex flex-row form-group",children:[Object(m.jsx)("label",{htmlFor:"work-minutes",className:"p-2 col-form-label",children:"Work cycle minutes"}),Object(m.jsx)("div",{className:"p-2",children:Object(m.jsx)("input",{className:"form-control",type:"number",value:this.props.workMinutes,onChange:this.onChangeWorkMinutes,id:"work-minutes"})})]}),Object(m.jsxs)("div",{className:"d-flex flex-row form-group",children:[Object(m.jsx)("label",{htmlFor:"short-break-minutes",className:"p-2 col-form-label",children:"Short break minutes"}),Object(m.jsx)("div",{className:"p-2",children:Object(m.jsx)("input",{className:"form-control",type:"number",value:this.props.shortBreakMinutes,onChange:this.onChangeShortBreakMinutes,id:"short-break-minutes"})})]}),Object(m.jsxs)("div",{className:"d-flex flex-row form-group",children:[Object(m.jsx)("label",{htmlFor:"long-break-minutes",className:"p-2 col-form-label",children:"Long break minutes"}),Object(m.jsx)("div",{className:"p-2",children:Object(m.jsx)("input",{className:"form-control",type:"number",value:this.props.longBreakMinutes,onChange:this.onChangeLongBreakMinutes,id:"long-break-minutes"})})]}),Object(m.jsxs)("div",{className:"d-flex flex-row form-group",children:[Object(m.jsx)("label",{htmlFor:"long-break-freq",className:"p-2 col-form-label",children:"Long break after n cycles"}),Object(m.jsx)("div",{className:"p-2",children:Object(m.jsx)("input",{className:"form-control",type:"number",value:this.props.longBreakFreq,onChange:this.onChangeLongBreakFreq,id:"long-break-freq"})})]})]})}}]),s}(n.a.Component),p=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"CREATE_TASK_PLACEHOLDER_TEXT",get:function(){return"Enter task name..."}},{key:"SAVE_NEW_TASK_BUTTON_TEXT",get:function(){return"Save new task"}},{key:"NO_TASK_TEXT",get:function(){return"No task"}},{key:"GO_ON_A_BREAT_BUTTON_TEXT",get:function(){return"Go on a break"}},{key:"RETURN_TO_WORK_BUTTON_TEXT",get:function(){return"Return to work"}},{key:"START_WORKING_BUTTON_TEXT",get:function(){return"Start timer"}},{key:"HOLD_WORK_BUTTON_TEXT",get:function(){return"Hold timer"}},{key:"RESUME_WORK_BUTTON_TEXT",get:function(){return"Resume timer"}},{key:"CONTINOUS_WORK_TEXT",get:function(){return"Continous work"}},{key:"START_TIMERS_AUTOMATICALLY_TEXT",get:function(){return"Start new timers automatically"}},{key:"RESET_CONFIRMATION_TEXT",get:function(){return"Do you want to reset timer values? (tasks, events, settings etc. will be kept)"}},{key:"RESET_BUTTON_TEXT",get:function(){return"Reset timer"}}]),t}(),b=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).onClickStartWorking=function(){a.setStateAndStorage({isWork:!0,timerRunning:!0}),a.markTimerStart(a.props.timerSeconds,Date.now())},a.onClickReturnToWork=function(){var t=a.props.timerSeconds,e=60*a.props.workMinutes;a.setStateAndStorage({isWork:!0,timerSeconds:e}),a.notifyCycleChange(!1,t,e)},a.onClickGoOnABreak=function(){var t=Math.round(a.props.availableBreakSeconds),e=a.props.timerSeconds;a.setStateAndStorage({isWork:!1,timerSeconds:t,availableBreakSeconds:t}),a.notifyCycleChange(!0,e,t)},a.tick=function(){if(a.props.timerRunning){var t=Date.now(),e=Math.round((t-a.props.timerLastUpdatedAt)/1e3);a.tempState={isWork:a.props.isWork,totalWorkedSeconds:a.props.totalWorkedSeconds,availableBreakSeconds:a.props.availableBreakSeconds,hiddenAvailableBreakSeconds:a.props.hiddenAvailableBreakSeconds,timerLastUpdatedAt:a.props.timerLastUpdatedAt,cycle:a.props.cycle,continousWork:a.props.continousWork,timerSeconds:a.props.timerSeconds,totalCombinedTime:a.props.totalCombinedTime};for(var s=e;s>0;s--){if(a.tempState.timerSeconds--,a.tempState.totalCombinedTime++,a.tempState.isWork){a.tempState.totalWorkedSeconds++;var n=1*a.props.shortBreakMinutes/a.props.workMinutes;a.tempState.availableBreakSeconds>=60*a.props.shortBreakMinutes?a.tempState.availableBreakSeconds+=n:a.tempState.hiddenAvailableBreakSeconds+=n}else a.tempState.availableBreakSeconds--;a.tempState.timerLastUpdatedAt=t,0===a.tempState.timerSeconds&&a.onTimerFinish()}a.setStateAndStorage(a.tempState)}else a.setStateAndStorage({timerLastUpdatedAt:Date.now()})},a.onTimerFinish=function(){var t=a.tempState.isWork,e={};if(t){var s,n,r=a.tempState.cycle+1,i=a.tempState.availableBreakSeconds;r===a.props.longBreakFreq&&(r=0,i+=60*a.props.longBreakMinutes-60*a.props.shortBreakMinutes),i+=a.tempState.hiddenAvailableBreakSeconds,i=Math.round(i),a.tempState.continousWork?(s=60*a.props.workMinutes,n=!0):(s=i,n=!1),e={timerSeconds:s,availableBreakSeconds:i,hiddenAvailableBreakSeconds:0,isWork:n,cycle:r}}else e={timerSeconds:60*a.props.workMinutes,isWork:!0};e.timerRunning=a.props.autoStartTimers;var o=a.tempState.timerSeconds;a.tempState=Object.assign(a.tempState,e),a.props.showNotification(t?"Work finished":"Break finished"),a.notifyCycleChange(t,o,a.tempState.timerSeconds)},a.notifyCycleChange=function(t,e,s){var n=a.props.timerStartedAt+1e3*(a.props.timerStartedWithSeconds-e),r={wasWork:t,start:a.props.timerStartedAt,end:n};a.props.onTimerFinish(r),a.markTimerStart(s,n)},a.markTimerStart=function(t,e){var s={timerStartedAt:e,timerStartedWithSeconds:t};a.props.setStateAndStorage(s)},a.onClickHoldWork=function(){a.setStateAndStorage({timerRunning:!1}),a.notifyCycleChange(a.props.isWork,a.props.timerSeconds,a.props.timerSeconds)},a.onClickResumeWork=function(){a.setStateAndStorage({timerRunning:!0}),a.markTimerStart(a.props.timerSeconds,Date.now())},a.onChangeContinousWork=function(t){a.setStateAndStorage({continousWork:t.target.checked})},a.onChangeAutoStartTimers=function(t){a.setStateAndStorage({autoStartTimers:t.target.checked})},a.setStateAndStorage=function(t){a.props.setStateAndStorage(t)},a.interval=setInterval(a.tick,1e3),a.tick(),a}return Object(l.a)(s,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"formatSecondsAsTimer",value:function(t){return String(Math.floor(t/60)).padStart(2,"0")+":"+String(t%60).padStart(2,"0")}},{key:"formatSecondsAsText",value:function(t){t=Math.round(t);var e=Math.floor(t/3600)+"",s="1"===e?"hour":"hours";t%=3600;var a=Math.floor(t/60)+"",n=(t%=60)%60+"";return e+" "+s+" "+a+" "+("1"===a?"minute":"minutes")+" "+n+" "+("1"===n?"second":"seconds")}},{key:"cyclesUntilLongBreak",get:function(){return this.props.longBreakFreq-this.props.cycle}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-sm",children:[!0===this.props.timerRunning&&Object(m.jsx)("button",{className:"btn btn-warning",onClick:this.onClickHoldWork,children:p.HOLD_WORK_BUTTON_TEXT}),!1===this.props.timerRunning&&Object(m.jsx)("button",{className:"btn btn-secondary",onClick:this.onClickResumeWork,"data-testid":"resume-work-btn",children:p.RESUME_WORK_BUTTON_TEXT}),null===this.props.isWork&&Object(m.jsx)("button",{className:"btn btn-success",onClick:this.onClickStartWorking,"data-testid":"start-working-btn",children:p.START_WORKING_BUTTON_TEXT})]})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm",children:Object(m.jsx)("h1",{"data-testid":"timer",children:this.formatSecondsAsTimer(this.props.timerSeconds)})})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-sm",children:[!0===this.props.isWork&&this.props.availableBreakSeconds?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{className:"btn btn-success",onClick:this.onClickGoOnABreak,children:p.GO_ON_A_BREAT_BUTTON_TEXT})}):null,!1===this.props.isWork?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{className:"btn btn-secondary",onClick:this.onClickReturnToWork,children:p.RETURN_TO_WORK_BUTTON_TEXT})}):null]})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-sm font-weight-light text-md-right",children:"Total time worked:"}),Object(m.jsx)("div",{className:"col-sm text-md-left","data-testid":"totalWorkedTime",children:this.formatSecondsAsText(this.props.totalWorkedSeconds)})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-sm font-weight-light text-md-right",children:"Available break time:"}),Object(m.jsx)("div",{className:"col-sm text-md-left","data-testid":"availableBreakTime",children:this.formatSecondsAsText(this.props.availableBreakSeconds)})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-sm font-weight-light text-md-right",children:["Cycles until long break (",this.props.longBreakMinutes," minutes):"]}),Object(m.jsx)("div",{className:"col-sm text-md-left","data-testid":"longBreakInfo",children:this.cyclesUntilLongBreak})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-sm font-weight-light text-md-right",children:"Total time (work + break):"}),Object(m.jsx)("div",{className:"col-sm text-md-left","data-testid":"totalCombinedTime",children:this.formatSecondsAsText(this.props.totalCombinedTime)})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm",children:Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",onChange:this.onChangeContinousWork,checked:this.props.continousWork,"data-testid":"cont-work",id:"cont-work-check"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"cont-work-check",children:p.CONTINOUS_WORK_TEXT})]})})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm",children:Object(m.jsxs)("div",{className:"form-check",children:[Object(m.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",onChange:this.onChangeAutoStartTimers,checked:this.props.autoStartTimers,"data-testid":"auto-start-timers",id:"auto-start-timers-check"}),Object(m.jsx)("label",{className:"form-check-label",htmlFor:"auto-start-timers-check",children:p.START_TIMERS_AUTOMATICALLY_TEXT})]})})})]})}}]),s}(n.a.Component),j=s(18),g=s(14),S=s(11),f=s(19),T=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).handleTextInputChange=function(t){a.setState({taskInput:t.target.value,createButtonVisible:t.target.value&&(!a.props.tasks||!a.props.tasks.some((function(e){return e.toUpperCase()===t.target.value.toUpperCase()}))),visibleTasks:a.getVisibleTasks(t.target.value)})},a.handleSaveClick=function(){a.props.onTaskCreate(a.state.taskInput),a.setState({taskInput:"",visibleTasks:a.getVisibleTasks(""),createButtonVisible:!1})},a.handleTaskSelected=function(t){var e=t.target.value;""===e&&(e=null),a.setState({selectedTask:e}),a.props.onTaskSelected(e)},a.state={taskInput:"",selectedTask:t.selectedTask,visibleTasks:t.tasks,createButtonVisible:!1},a}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(t){(this.props.selectedTask!==t.selectedTask||!!this.props.tasks!==!!t.tasks||this.props.tasks&&t.tasks&&this.props.tasks.length!==t.tasks.length)&&this.setState({selectedTask:this.props.selectedTask,visibleTasks:this.getVisibleTasks(this.state.taskInput)})}},{key:"getVisibleTasks",value:function(t){return this.props.tasks?this.props.tasks.filter((function(e){return e.toUpperCase().includes(t.toUpperCase())})):[]}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"form-inline mb-2",children:[Object(m.jsx)("input",{type:"text",className:"form-control",onChange:this.handleTextInputChange,placeholder:p.CREATE_TASK_PLACEHOLDER_TEXT,value:this.state.taskInput}),this.state.createButtonVisible?Object(m.jsx)("button",{className:"btn btn-primary",onClick:this.handleSaveClick,children:p.SAVE_NEW_TASK_BUTTON_TEXT}):null]}),Object(m.jsxs)("div",{className:"btn-group btn-group-toggle","data-toggle":"buttons",style:{flexWrap:"wrap"},children:[Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("label",{className:"btn btn-secondary"+(null==this.state.selectedTask?" active":""),htmlFor:"no-task",children:[p.NO_TASK_TEXT,Object(m.jsx)("input",{type:"radio",id:"no-task",name:"task",value:"",autoComplete:"off",onChange:this.handleTaskSelected,checked:null==this.state.selectedTask})]})}),this.state&&this.state.visibleTasks&&this.state.visibleTasks.map((function(e){return Object(m.jsxs)("label",{className:"btn btn-secondary"+(e===t.state.selectedTask?" active":""),htmlFor:e,"data-testid":"button-"+e,children:[e,Object(m.jsx)("input",{type:"radio",id:e,name:"task",value:e,autoComplete:"off",onChange:t.handleTaskSelected,checked:e===t.state.selectedTask})]},e)}))]})]})}}]),s}(n.a.Component),O=s(41),v=s(42),x=s(43),y="@@@TOTALS",N=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).formatSeconds=function(t){t/=1e3;var e=Math.floor(t/3600),s=Math.floor(t%3600/60);return"".concat(e,"h").concat(s,"m")},a.state={timesMap:a.calculateTimes()},a}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(t){this.props.eventsTimestamp!==t.eventsTimestamp&&this.setState({timesMap:this.calculateTimes()})}},{key:"calculateTimes",value:function(){var t={},e=0,s=0,a=0;return this.props.events.forEach((function(n){if(n.isWork){var r=Object(O.a)(n.start),i=Object(v.a)(n.start),o=Object(x.a)(n.start);if(r||i||o){var c=n.task;if(null!==c&&void 0!==c&&""!==c&&"null"!==c||(c=p.NO_TASK_TEXT),c in t||(t[c]={today:0,yesterday:0,week:0}),void 0!==n.end){var l=n.end.getTime()-n.start.getTime();r?(t[c].today+=l,e+=l):i&&(t[c].yesterday+=l,s+=l),o&&(t[c].week+=l,a+=l)}}}})),Object.entries(t).forEach((function(t){t[1].todayPercentage=Math.round(t[1].today/e*100)+"%",t[1].yesterdayPercentage=Math.round(t[1].yesterday/s*100)+"%",t[1].weekPercentage=Math.round(t[1].week/a*100)+"%"})),t[y]={today:e,yesterday:s,week:a},t}},{key:"render",value:function(){var t=this;return Object(m.jsxs)("table",{className:"table-sm",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Task"}),Object(m.jsx)("th",{children:"Today"}),Object(m.jsx)("th",{children:"%"}),Object(m.jsx)("th",{children:"Yesterday"}),Object(m.jsx)("th",{children:"%"}),Object(m.jsx)("th",{children:"Week"}),Object(m.jsx)("th",{children:"%"})]})}),Object(m.jsxs)("tbody",{children:[Object.entries(this.state.timesMap).filter((function(t){return t[0]!==y})).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e[0]}),Object(m.jsx)("td",{"data-testid":"today-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].today)}),Object(m.jsx)("td",{"data-testid":"todayp-"+e[0].charAt(0)+e[0].length,children:e[1].todayPercentage}),Object(m.jsx)("td",{"data-testid":"yesterday-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].yesterday)}),Object(m.jsx)("td",{"data-testid":"yesterdayp-"+e[0].charAt(0)+e[0].length,children:e[1].yesterdayPercentage}),Object(m.jsx)("td",{"data-testid":"week-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].week)}),Object(m.jsx)("td",{"data-testid":"weekp-"+e[0].charAt(0)+e[0].length,children:e[1].weekPercentage})]},e[0])})),Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:"Total"}),Object(m.jsx)("td",{"data-testid":"today-total",children:this.formatSeconds(this.state.timesMap[y].today)}),Object(m.jsx)("td",{"data-testid":"todayp-total",children:"100%"}),Object(m.jsx)("td",{"data-testid":"yesterday-total",children:this.formatSeconds(this.state.timesMap[y].yesterday)}),Object(m.jsx)("td",{"data-testid":"yesterdayp-total",children:"100%"}),Object(m.jsx)("td",{"data-testid":"week-total",children:this.formatSeconds(this.state.timesMap[y].week)}),Object(m.jsx)("td",{"data-testid":"weekp-total",children:"100%"})]})]})]})}}]),s}(n.a.Component),w=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).onClickReset=function(){window.confirm(p.RESET_CONFIRMATION_TEXT)&&a.setStateAndStorage(a.getStateForReset())},a.onClickSettings=function(){a.setState({settingsVisible:!a.state.settingsVisible})},a.setStateAndStorage=function(t){a.setState(t),a.storage&&(a.storage.state=Object.assign(a.state,t))},a.onChangeSettings=function(t){a.setStateAndStorage(t)},a.getDefaultState=function(){return{timerSeconds:60*a.defaultSettings.workMinutes,totalWorkedSeconds:0,isWork:null,availableBreakSeconds:0,hiddenAvailableBreakSeconds:0,totalCombinedTime:0,cycle:0,notificationsGranted:!1,timerRunning:null,continousWork:a.defaultSettings.continousWork,timerLastUpdatedAt:Date.now(),autoStartTimers:!0,workMinutes:a.defaultSettings.workMinutes,shortBreakMinutes:a.defaultSettings.shortBreakMinutes,longBreakMinutes:a.defaultSettings.longBreakMinutes,longBreakFreq:a.defaultSettings.longBreakFreq,settingsVisible:!1,events:[],timerStartedAt:null,timerStartedWithSeconds:null,tasks:[]}},a.getStateForReset=function(){var t=a.getDefaultState();return t.continousWork=a.state.continousWork,t.autoStartTimers=a.state.autoStartTimers,t.workMinutes=a.state.workMinutes,t.shortBreakMinutes=a.state.shortBreakMinutes,t.longBreakMinutes=a.state.longBreakMinutes,t.longBreakFreq=a.state.longBreakFreq,t.timerSeconds=60*a.state.workMinutes,t.events=a.state.events,t.tasks=a.state.tasks,t},a.handleTimerStateChange=function(t){a.setStateAndStorage(t)},a.handleShowNotification=function(t){a.notifications&&a.notificationsGranted&&a.notifications.createNotification(t)},a.handleEventCreated=function(t){var e=t.wasWork?"Work":"Break";void 0!==a.state.selectedTask&&(e+=" ("+a.state.selectedTask+")");var s={title:e,isWork:t.wasWork,start:new Date(t.start),end:new Date(t.end),color:t.wasWork?"#3788d8":"orange",task:a.state.selectedTask};if(s.start.getTime()!==s.end.getTime()){var n=[].concat(Object(o.a)(a.state.events),[s]);n.length>1&&n[n.length-1].isWork===n[n.length-2].isWork&&n[n.length-2].end.getTime()===n[n.length-1].start.getTime()&&n[n.length-1].task===n[n.length-2].task&&((n=n.slice(0,n.length-1))[n.length-1].end=new Date(t.end)),a.setStateAndStorage({events:n}),a.setEventsTimestamp()}},a.handleTaskCreated=function(t){var e=a.state.tasks;e.push(t),a.setStateAndStorage({tasks:e}),a.setEventsTimestamp()},a.handleTaskSelected=function(t){var e=a.state.timerStartedAt+1e3*(a.state.timerStartedWithSeconds-a.state.timerSeconds);a.handleEventCreated({wasWork:a.state.isWork,start:a.state.timerStartedAt,end:e}),a.setStateAndStorage({timerStartedAt:e,timerStartedWithSeconds:a.state.timerSeconds,selectedTask:t})},a.defaultSettings=t.defaultSettings,a.storage=t.storage,a.state=a.getDefaultState(),a.storage&&a.storage.state&&(a.state=Object.assign(a.state,a.storage.state),a.state.events.forEach((function(t){t.start=new Date(Date.parse(t.start)),t.end=new Date(Date.parse(t.end))}))),t.notifications&&(a.notifications=t.notifications,a.notifications.requestPermission().then((function(t){"granted"===t&&(a.notificationsGranted=!0)}))),a.plugins=[g.a],a}return Object(l.a)(s,[{key:"setEventsTimestamp",value:function(){this.setState({eventsTimestamp:Date.now()})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u.Helmet,{children:Object(m.jsx)("title",{children:"Timer"})}),Object(m.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",integrity:"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",crossOrigin:"anonymous"}),Object(m.jsx)("script",{src:"https://code.jquery.com/jquery-3.3.1.slim.min.js",integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",crossOrigin:"anonymous"}),Object(m.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",integrity:"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",crossOrigin:"anonymous"}),Object(m.jsx)("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",integrity:"sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV",crossOrigin:"anonymous"}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm offset-sm-11",children:Object(m.jsx)("button",{className:"btn",onClick:this.onClickReset,"data-testid":"reset-btn",children:p.RESET_BUTTON_TEXT})})}),Object(m.jsx)(b,{timerSeconds:this.state.timerSeconds,totalWorkedSeconds:this.state.totalWorkedSeconds,isWork:this.state.isWork,availableBreakSeconds:this.state.availableBreakSeconds,hiddenAvailableBreakSeconds:this.state.hiddenAvailableBreakSeconds,totalCombinedTime:this.state.totalCombinedTime,cycle:this.state.cycle,timerRunning:this.state.timerRunning,continousWork:this.state.continousWork,timerLastUpdatedAt:this.state.timerLastUpdatedAt,autoStartTimers:this.state.autoStartTimers,workMinutes:this.state.workMinutes,shortBreakMinutes:this.state.shortBreakMinutes,longBreakMinutes:this.state.longBreakMinutes,longBreakFreq:this.state.longBreakFreq,timerStartedAt:this.state.timerStartedAt,timerStartedWithSeconds:this.state.timerStartedWithSeconds,setStateAndStorage:this.handleTimerStateChange,showNotification:this.handleShowNotification,onTimerFinish:this.handleEventCreated}),Object(m.jsx)("button",{className:"btn m-2",type:"button",onClick:this.onClickSettings,children:"Settings"}),Object(m.jsx)("div",{className:this.state.settingsVisible?"collapse show":"collapse",children:Object(m.jsx)("div",{className:"card card-body row",children:Object(m.jsx)(k,{workMinutes:this.state.workMinutes,shortBreakMinutes:this.state.shortBreakMinutes,longBreakMinutes:this.state.longBreakMinutes,longBreakFreq:this.state.longBreakFreq,onchange:this.onChangeSettings})})}),Object(m.jsx)("div",{className:"row mb-3",children:Object(m.jsx)(T,{onTaskCreate:this.handleTaskCreated,onTaskSelected:this.handleTaskSelected,tasks:this.state.tasks,selectedTask:this.state.selectedTask})}),Object(m.jsx)("div",{className:"row mb-3",children:Object(m.jsx)(N,{events:this.state.events,eventsTimestamp:this.state.eventsTimestamp})}),Object(m.jsx)("div",{className:"card card-body",children:Object(m.jsx)(j.a,{events:this.state.events,plugins:[g.a,S.b,f.a],initialView:"timeGridWeek",headerToolbar:{right:"today prev,next dayGridMonth,timeGridWeek,timeGridDay listWeek"},slotDuration:"00:10:00",eventDidMount:function(t){t.el.title=t.event.title}})})]})]})}}]),s}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(){return Object(c.a)(this,s),e.call(this,25,5,10,4,480,!0)}return s}(function(){function t(e,s,a,n,r){Object(c.a)(this,t),this._workMinutes=e,this._shortBreakMinutes=s,this._longBreakMinutes=a,this._longBreakFreq=n,this._continousWork=r}return Object(l.a)(t,[{key:"workMinutes",get:function(){return this._workMinutes}},{key:"shortBreakMinutes",get:function(){return this._shortBreakMinutes}},{key:"longBreakMinutes",get:function(){return this._longBreakMinutes}},{key:"longBreakFreq",get:function(){return this._longBreakFreq}},{key:"continousWork",get:function(){return this._continousWork}}]),t}()),C=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"requestPermission",value:function(){return Notification.requestPermission()}},{key:"createNotification",value:function(t,e){new Notification(t,e)}}]),t}(),A=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"state",get:function(){return JSON.parse(localStorage.getItem("timer_state"))},set:function(t){localStorage.setItem("timer_state",JSON.stringify(t))}}]),t}();i.a.render(Object(m.jsx)(w,{basename:"/cooltimer",defaultSettings:new B,notifications:new C,storage:new A}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.2b7a09f9.chunk.js.map