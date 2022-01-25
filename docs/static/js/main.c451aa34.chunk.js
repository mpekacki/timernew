(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{103:function(t,e,a){},178:function(t,e,a){"use strict";a.r(e);a(91),a(92);var s=a(1),n=a.n(s),i=a(17),r=a.n(i),o=a(88),c=a(15),l=a(16),d=a(24),h=a(23),u=a(82),k=(a(103),a(12)),j=a(10),m=a(9),b=a(3),g=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).onChangeWorkMinutes=function(e){t.props.onchange({workMinutes:+e.target.value})},t.onChangeShortBreakMinutes=function(e){t.props.onchange({shortBreakMinutes:+e.target.value})},t.onChangeLongBreakMinutes=function(e){t.props.onchange({longBreakMinutes:+e.target.value})},t.onChangeLongBreakFreq=function(e){t.props.onchange({longBreakFreq:+e.target.value})},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(k.a,{children:[Object(b.jsxs)(j.a,{children:[Object(b.jsx)(m.a,{sm:6,children:Object(b.jsxs)(k.a.Group,{as:j.a,children:[Object(b.jsx)(k.a.Label,{column:!0,xs:8,children:"Work cycle minutes"}),Object(b.jsx)(m.a,{xs:4,children:Object(b.jsx)(k.a.Control,{type:"number",value:this.props.workMinutes,onChange:this.onChangeWorkMinutes})})]})}),Object(b.jsx)(m.a,{sm:6,children:Object(b.jsxs)(k.a.Group,{as:j.a,children:[Object(b.jsx)(k.a.Label,{column:!0,xs:8,children:"Short break minutes"}),Object(b.jsx)(m.a,{xs:4,children:Object(b.jsx)(k.a.Control,{type:"number",value:this.props.shortBreakMinutes,onChange:this.onChangeShortBreakMinutes})})]})})]}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(m.a,{sm:6,children:Object(b.jsxs)(k.a.Group,{as:j.a,children:[Object(b.jsx)(k.a.Label,{column:!0,xs:8,children:"Long break minutes"}),Object(b.jsx)(m.a,{xs:4,children:Object(b.jsx)(k.a.Control,{type:"number",value:this.props.longBreakMinutes,onChange:this.onChangeLongBreakMinutes})})]})}),Object(b.jsx)(m.a,{sm:6,children:Object(b.jsxs)(k.a.Group,{as:j.a,children:[Object(b.jsx)(k.a.Label,{column:!0,xs:8,children:"Long break after n cycles"}),Object(b.jsx)(m.a,{xs:4,children:Object(b.jsx)(k.a.Control,{type:"number",value:this.props.longBreakFreq,onChange:this.onChangeLongBreakFreq})})]})})]})]})}}]),a}(n.a.Component),O=a(89),T=a(67),f=a(52),S=a(83),p=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"CREATE_TASK_PLACEHOLDER_TEXT",get:function(){return"Enter task name..."}},{key:"SAVE_NEW_TASK_BUTTON_TEXT",get:function(){return"Save new task"}},{key:"NO_TASK_TEXT",get:function(){return"No task"}},{key:"GO_ON_A_BREAT_BUTTON_TEXT",get:function(){return"Go on a break"}},{key:"RETURN_TO_WORK_BUTTON_TEXT",get:function(){return"Return to work"}},{key:"START_WORKING_BUTTON_TEXT",get:function(){return"Start"}},{key:"HOLD_WORK_BUTTON_TEXT",get:function(){return"Hold"}},{key:"RESUME_WORK_BUTTON_TEXT",get:function(){return"Resume"}},{key:"CONTINOUS_WORK_TEXT",get:function(){return"Continous work"}},{key:"START_TIMERS_AUTOMATICALLY_TEXT",get:function(){return"Start new timers automatically"}},{key:"RESET_CONFIRMATION_TEXT",get:function(){return"Do you want to reset timer values? (tasks, events, settings etc. will be kept)"}},{key:"RESET_BUTTON_TEXT",get:function(){return"Reset"}},{key:"CONFIRM_HOLD_TIMER_BUTTON_TEXT",get:function(){return"Yes, hold timer"}},{key:"CONFIRM_HOLD_TIMER_MODAL_HEADER",get:function(){return"Warning!"}},{key:"CONFIRM_HOLD_TIMER_MODAL_TEXT",get:function(){return'This option should only be used if you\'re stopping work for a significant amount of time. It should not be used for normal mid-work breaks - instead, please wait for the "Go on a break" button to become available.\n\nAre sure you want to hold the timer anyway?'}},{key:"WORK_LABEL_TEXT",get:function(){return"Work"}},{key:"BREAK_LABEL_TEXT",get:function(){return"Break"}},{key:"BREAK_WILL_BECOME_AVAILABLE_TEXT",get:function(){return"A break will be available when the current work timer finishes."}},{key:"REMOVE_TASK_BUTTON_TEXT",get:function(){return"Remove task"}},{key:"getRemoveTaskConfirmationText",value:function(t){return'Are sure you want to remove the task "'.concat(t,'"?')}},{key:"ALWAYS_START_FULL_WORK_TEXT",get:function(){return"Always start full work timer"}}]),t}(),x=a(53),v=a(90),w=a(41),y=a(13),C=a(185),_=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).handleTextInputChange=function(t){var e=t.target.value;s.setState({taskInput:e})},s.handleSaveClick=function(){s.props.onTaskCreate(s.state.taskInput.trim()),s.setState({taskInput:""})},s.handleTaskSelected=function(t){s.props.onTaskSelected(t)},s.createButtonVisible=function(){return s.state.taskInput&&""!==s.state.taskInput.trim()&&(!s.props.tasks||!s.props.tasks.some((function(t){return t.toUpperCase()===s.state.taskInput.toUpperCase()})))},s.handleRemoveClick=function(){window.confirm(p.getRemoveTaskConfirmationText(s.props.selectedTask))&&s.props.onTaskRemoved(s.props.selectedTask)},s.handleMoreTasksToggleClick=function(){s.setState({showMore:!s.state.showMore})},s.handleClearInputButtonClick=function(){s.setState({taskInput:""})},s.state={taskInput:"",showMore:!1},s}return Object(l.a)(a,[{key:"getVisibleTasks",value:function(){var t=this,e=this.props.tasks?this.props.tasks.filter((function(e){return e.toUpperCase().includes(t.state.taskInput.toUpperCase())})):[];if(this.props.totalMaxVisibleCharacters){var a=[];return e.reduce((function(e,s){return e<t.props.totalMaxVisibleCharacters&&a.push(s),e+s.length}),0),a}return e}},{key:"render",value:function(){var t=this,e=0,a=this.props.tasks?this.props.tasks.filter((function(e){return e.toUpperCase().includes(t.state.taskInput.toUpperCase())})):[];if(this.props.totalMaxVisibleCharacters){var s=[];a.reduce((function(e,a){return e<t.props.totalMaxVisibleCharacters&&s.push(a),e+a.length}),0),e=a.length-s.length,this.state.showMore||(a=s)}var n=this.state.showMore?"show less tasks":"show "+e+" more tasks";return Object(b.jsxs)(x.a,{children:[Object(b.jsxs)(j.a,{className:"mb-2",children:[Object(b.jsx)(m.a,{xs:9,children:Object(b.jsx)(k.a,{inline:!0,children:Object(b.jsxs)(k.a.Group,{controlId:"taskInput",className:"mr-1",children:[Object(b.jsxs)(C.a,{children:[Object(b.jsx)(k.a.Control,{type:"text",onChange:this.handleTextInputChange,placeholder:p.CREATE_TASK_PLACEHOLDER_TEXT,value:this.state.taskInput}),""!==this.state.taskInput&&Object(b.jsx)(C.a.Append,{children:Object(b.jsx)(y.a,{as:"span",onClick:this.handleClearInputButtonClick,variant:"light","data-testid":"clear-input-btn",children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})]})})})]}),e>0&&this.state.showMore&&Object(b.jsx)(y.a,{variant:"light",className:"float-left ml-3","data-testid":"more-tasks-btn",onClick:this.handleMoreTasksToggleClick,children:n})]})})}),this.props.selectedTask&&Object(b.jsx)(m.a,{xs:3,children:Object(b.jsx)(y.a,{variant:"outline-danger",size:"sm",onClick:this.handleRemoveClick,className:"float-right",children:p.REMOVE_TASK_BUTTON_TEXT})})]}),this.createButtonVisible()?Object(b.jsx)(j.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsxs)(y.a,{type:"primary",onClick:this.handleSaveClick,className:"float-left",children:[p.SAVE_NEW_TASK_BUTTON_TEXT,' "',this.state.taskInput,'"']})})}):null,Object(b.jsx)(j.a,{children:Object(b.jsxs)(m.a,{children:[Object(b.jsxs)(v.a,{type:"radio",name:"tasks",style:{flexWrap:"wrap"},className:"float-left",value:this.props.selectedTask,onChange:this.handleTaskSelected,children:[Object(b.jsx)(w.a,{id:"radio-null",value:"",children:p.NO_TASK_TEXT}),a.map((function(t){return Object(b.jsx)(w.a,{id:"radio-"+t,value:t,"data-testid":"button-"+t,children:t},t)}))]}),e>0&&Object(b.jsx)(y.a,{variant:"light",className:"float-left","data-testid":"more-tasks-btn",onClick:this.handleMoreTasksToggleClick,children:n})]})})]})}}]),a}(n.a.Component),A=a(186),B=a(187),M=a(188),W=a(189),E=a(84),R="@@@TOTALS",N=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).formatSeconds=function(t){t/=1e3;var e=Math.floor(t/3600),a=Math.floor(t%3600/60);return"".concat(e,"h").concat(a,"m")},s.state={timesMap:s.calculateTimes()},s}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(t){this.props.eventsTimestamp!==t.eventsTimestamp&&this.setState({timesMap:this.calculateTimes()})}},{key:"calculateTimes",value:function(){var t=this,e={},a=0,s=0,n=0,i=0;return this.props.events.forEach((function(t){if(t.isWork){var r=Object(A.a)(t.start),o=Object(B.a)(t.start),c=Object(M.a)(t.start),l=Object(W.a)(t.start);if(r||o||c||l){var d=t.task;if(null!==d&&void 0!==d&&""!==d&&"null"!==d||(d=p.NO_TASK_TEXT),d in e||(e[d]={today:0,yesterday:0,week:0,month:0}),void 0!==t.end){var h=t.end.getTime()-t.start.getTime();r?(e[d].today+=h,a+=h):o&&(e[d].yesterday+=h,s+=h),c&&(e[d].week+=h,n+=h),l&&(e[d].month+=h,i+=h)}}}})),Object.entries(e).forEach((function(e){e[1].todayPercentage=t.getPercentage(e[1].today,a),e[1].yesterdayPercentage=t.getPercentage(e[1].yesterday,s),e[1].weekPercentage=t.getPercentage(e[1].week,n),e[1].monthPercentage=t.getPercentage(e[1].month,i)})),e[R]={today:a,yesterday:s,week:n,month:i},e}},{key:"getPercentage",value:function(t,e){var a=Math.round(t/e*100);return isNaN(a)?"-":a+"%"}},{key:"render",value:function(){var t=this;return Object(b.jsxs)(E.a,{size:"sm",responsive:!0,children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Task"}),Object(b.jsx)("th",{children:"Today"}),Object(b.jsx)("th",{children:"%"}),Object(b.jsx)("th",{children:"Yesterday"}),Object(b.jsx)("th",{children:"%"}),Object(b.jsx)("th",{children:"Week"}),Object(b.jsx)("th",{children:"%"}),Object(b.jsx)("th",{children:"Month"}),Object(b.jsx)("th",{children:"%"})]})}),Object(b.jsxs)("tbody",{children:[Object.entries(this.state.timesMap).filter((function(t){return t[0]!==R})).map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e[0]}),Object(b.jsx)("td",{"data-testid":"today-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].today)}),Object(b.jsx)("td",{"data-testid":"todayp-"+e[0].charAt(0)+e[0].length,children:e[1].todayPercentage}),Object(b.jsx)("td",{"data-testid":"yesterday-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].yesterday)}),Object(b.jsx)("td",{"data-testid":"yesterdayp-"+e[0].charAt(0)+e[0].length,children:e[1].yesterdayPercentage}),Object(b.jsx)("td",{"data-testid":"week-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].week)}),Object(b.jsx)("td",{"data-testid":"weekp-"+e[0].charAt(0)+e[0].length,children:e[1].weekPercentage}),Object(b.jsx)("td",{"data-testid":"month-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].month)}),Object(b.jsx)("td",{"data-testid":"monthp-"+e[0].charAt(0)+e[0].length,children:e[1].monthPercentage})]},e[0])})),Object(b.jsxs)("tr",{class:"font-italic",children:[Object(b.jsx)("td",{children:"Total"}),Object(b.jsx)("td",{"data-testid":"today-total",children:this.formatSeconds(this.state.timesMap[R].today)}),Object(b.jsx)("td",{"data-testid":"todayp-total",children:"100%"}),Object(b.jsx)("td",{"data-testid":"yesterday-total",children:this.formatSeconds(this.state.timesMap[R].yesterday)}),Object(b.jsx)("td",{"data-testid":"yesterdayp-total",children:"100%"}),Object(b.jsx)("td",{"data-testid":"week-total",children:this.formatSeconds(this.state.timesMap[R].week)}),Object(b.jsx)("td",{"data-testid":"weekp-total",children:"100%"}),Object(b.jsx)("td",{"data-testid":"month-total",children:this.formatSeconds(this.state.timesMap[R].month)}),Object(b.jsx)("td",{"data-testid":"monthp-total",children:"100%"})]})]})]})}}]),a}(n.a.Component),L=a(39),I=a(68),U=a(58),F=a(85),X=a.n(F),D=a(22),H=a(87),K=a(86),V=a(54),P=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var s;return Object(c.a)(this,a),(s=e.call(this,t)).onClickReset=function(){window.confirm(p.RESET_CONFIRMATION_TEXT)&&s.setStateAndStorage(s.getStateForReset())},s.onClickSettings=function(){s.setState({settingsVisible:!s.state.settingsVisible})},s.onClickToggleCalendar=function(){s.setState({calendarVisible:!s.state.calendarVisible})},s.setStateAndStorage=function(t){s.setState(t),s.storage&&!X()(s.storage.state,t)&&(s.storage.state=Object.assign(s.state,t))},s.onChangeSettings=function(t){s.setStateAndStorage(t)},s.getDefaultState=function(){return Object.assign({},s.defaultSettings.defaultState)},s.getStateForReset=function(){var t=s.getDefaultState();return t.continousWork=s.state.continousWork,t.autoStartTimers=s.state.autoStartTimers,t.workMinutes=s.state.workMinutes,t.shortBreakMinutes=s.state.shortBreakMinutes,t.longBreakMinutes=s.state.longBreakMinutes,t.longBreakFreq=s.state.longBreakFreq,t.timerSeconds=60*s.state.workMinutes,t.events=s.state.events,t.tasks=s.state.tasks,t},s.handleTimerStateChange=function(t){s.setStateAndStorage(t)},s.handleShowNotification=function(t){s.notifications&&s.notificationsGranted&&(s.notificationQueued||(s.notificationQueued=!0,setTimeout(s.clearNotificationQueue,1e4),s.notifications.createNotification(t)))},s.clearNotificationQueue=function(){s.notificationQueued=null},s.handleEventCreated=function(t){var e=t.wasWork?"Work":"Break";s.state.selectedTask&&t.wasWork&&(e+=" ("+s.state.selectedTask+")");var a={title:e,isWork:t.wasWork,start:new Date(t.start),end:new Date(t.end),color:t.wasWork?"#3788d8":"orange",task:s.state.selectedTask};if(a.start.getTime()!==a.end.getTime()){var n=[].concat(Object(o.a)(s.state.events),[a]);n.length>1&&n[n.length-1].isWork===n[n.length-2].isWork&&n[n.length-2].end.getTime()===n[n.length-1].start.getTime()&&n[n.length-1].task===n[n.length-2].task&&((n=n.slice(0,n.length-1))[n.length-1].end=new Date(t.end)),s.setStateAndStorage({events:n}),s.setEventsTimestamp()}},s.handleTaskCreated=function(t){var e=s.state.tasks;e.unshift(t),s.setStateAndStorage({tasks:e}),s.setEventsTimestamp()},s.handleTaskSelected=function(t){var e=s.state.timerStartedAt+1e3*(s.state.timerStartedWithSeconds-s.state.timerSeconds);s.handleEventCreated({wasWork:s.state.isWork,start:s.state.timerStartedAt,end:e});var a=s.state.tasks;t&&(a.splice(s.state.tasks.indexOf(t),1),a.splice(0,0,t)),s.setStateAndStorage({timerStartedAt:e,timerStartedWithSeconds:s.state.timerSeconds,selectedTask:t,tasks:a})},s.handleTaskRemoved=function(t){var e=s.state.tasks;e.splice(e.indexOf(t),1);var a=s.state.events.filter((function(e){return e.task!==t}));s.setState({tasks:e,events:a,eventsTimestamp:Date.now(),selectedTask:s.state.selectedTask===t?null:s.state.selectedTask})},s.setEventsTimestamp=function(){s.setState({eventsTimestamp:Date.now()})},s.handleAboutShow=function(){s.setState({showAboutModal:!0})},s.handleAboutClose=function(){s.setState({showAboutModal:!1})},s.onClickStartWorking=function(){s.setStateAndStorage({isWork:!0,timerRunning:!0}),s.markTimerStart(s.state.timerSeconds,Date.now())},s.onClickReturnToWork=function(){var t=s.state.timerSeconds,e=!s.state.alwaysStartFullWork&&s.state.lastWorkTimerSeconds||60*s.state.workMinutes;s.setStateAndStorage({isWork:!0,timerSeconds:e}),s.notifyCycleChange(!1,t,e)},s.onClickGoOnABreak=function(){var t=Math.round(s.state.availableBreakSeconds),e=s.state.timerSeconds;s.setStateAndStorage({isWork:!1,timerSeconds:t,availableBreakSeconds:t}),s.notifyCycleChange(!0,e,t)},s.tick=function(){if(s.state.timerRunning){var t=Date.now(),e=Math.round((t-s.state.timerLastUpdatedAt)/1e3),a=s.calculateNewState(e,t);s.setStateAndStorage(a)}else s.setStateAndStorage({timerLastUpdatedAt:Date.now()})},s.notifyCycleChange=function(t,e,a){var n=s.state.timerStartedAt+1e3*(s.state.timerStartedWithSeconds-e),i={wasWork:t,start:s.state.timerStartedAt,end:n};s.handleEventCreated(i),s.markTimerStart(a,n)},s.markTimerStart=function(t,e){var a={timerStartedAt:e,timerStartedWithSeconds:t};s.setStateAndStorage(a)},s.onClickHoldWork=function(){s.setStateAndStorage({timerRunning:!1}),s.notifyCycleChange(s.state.isWork,s.state.timerSeconds,s.state.timerSeconds),s.handleClose()},s.onClickResumeWork=function(){s.setStateAndStorage({timerRunning:!0}),s.markTimerStart(s.state.timerSeconds,Date.now())},s.onChangeContinousWork=function(t){s.setStateAndStorage({continousWork:t.target.checked})},s.onChangeAutoStartTimers=function(t){s.setStateAndStorage({autoStartTimers:t.target.checked})},s.onChangeAlwaysStartFullWork=function(t){s.setStateAndStorage({alwaysStartFullWork:t.target.checked})},s.handleShow=function(){s.setState({showHoldModal:!0})},s.handleClose=function(){s.setState({showHoldModal:!1})},s.defaultSettings=t.defaultSettings,s.storage=t.storage,s.state=s.getDefaultState(),s.storage&&s.storage.state&&(s.state=Object.assign(s.state,s.storage.state),s.state.events.forEach((function(t){t.start=new Date(Date.parse(t.start)),t.end=new Date(Date.parse(t.end))}))),t.notifications&&(s.notifications=t.notifications,s.notifications.requestPermission().then((function(t){"granted"===t&&(s.notificationsGranted=!0)}))),s.plugins=[T.a],window.Worker?(s.worker=new Worker("./worker.js"),s.worker.onmessage=function(){s.tick()}):s.interval=setInterval(s.tick,1e3),s.tick(),s}return Object(l.a)(a,[{key:"componentWillUnmount",value:function(){this.worker?this.worker.terminate():clearInterval(this.interval)}},{key:"formatSecondsAsTimer",value:function(){return this.getTimerMinutes()+":"+this.getTimerSeconds()}},{key:"getTimerSeconds",value:function(){return String(this.state.timerSeconds%60).padStart(2,"0")}},{key:"getTimerMinutes",value:function(){return String(Math.floor(this.state.timerSeconds/60)).padStart(2,"0")}},{key:"formatSecondsAsText",value:function(t){t=Math.round(t);var e=Math.floor(t/3600)+"",a="1"===e?"hour":"hours";t%=3600;var s=Math.floor(t/60)+"",n=(t%=60)%60+"";return(("0"!==e?e+" "+a+" ":"")+("0"!==s?s+" "+("1"===s?"minute":"minutes")+" ":"")+("0"!==n?n+" "+("1"===n?"second":"seconds"):"")).trim()||"0 minutes"}},{key:"calculateNewState",value:function(t,e){var a=this;this.tempState={isWork:this.state.isWork,totalWorkedSeconds:this.state.totalWorkedSeconds,lastWorkTimerSeconds:this.state.lastWorkTimerSeconds,availableBreakSeconds:this.state.availableBreakSeconds,hiddenAvailableBreakSeconds:this.state.hiddenAvailableBreakSeconds,timerLastUpdatedAt:this.state.timerLastUpdatedAt,cycle:this.state.cycle,continousWork:this.state.continousWork,timerSeconds:this.state.timerSeconds,totalCombinedTime:this.state.totalCombinedTime};for(var s=[],n=null,i=t;i>0;i--){if(this.tempState.timerSeconds--,this.tempState.totalCombinedTime++,this.tempState.isWork){this.tempState.totalWorkedSeconds++,this.tempState.lastWorkTimerSeconds=this.tempState.timerSeconds;var r=1*this.state.shortBreakMinutes/this.state.workMinutes;this.tempState.availableBreakSeconds>=60*this.state.shortBreakMinutes?this.tempState.availableBreakSeconds+=r:this.tempState.hiddenAvailableBreakSeconds+=r}else this.tempState.availableBreakSeconds--;if(this.tempState.timerLastUpdatedAt=e,0===this.tempState.timerSeconds){var o=this.tempState.isWork,c={};if(o){var l=this.tempState.cycle+1,d=this.tempState.availableBreakSeconds;l===this.state.longBreakFreq&&(l=0,d+=60*this.state.longBreakMinutes-60*this.state.shortBreakMinutes),d+=this.tempState.hiddenAvailableBreakSeconds,d=Math.round(d);var h=void 0,u=void 0;this.tempState.continousWork?(h=60*this.state.workMinutes,u=!0):(h=d,u=!1),c={timerSeconds:h,availableBreakSeconds:d,hiddenAvailableBreakSeconds:0,isWork:u,cycle:l}}else c={timerSeconds:!this.state.alwaysStartFullWork&&this.state.lastWorkTimerSeconds||60*this.state.workMinutes,isWork:!0};c.timerRunning=this.state.autoStartTimers;var k=this.tempState.timerSeconds;this.tempState=Object.assign(this.tempState,c),n=o?"Work finished":"Break finished",s.push({isWork:o,lastTimerSeconds:k,newTimerSeconds:this.tempState.timerSeconds})}}return s.forEach((function(t){a.notifyCycleChange(t.isWork,t.lastTimerSeconds,t.newTimerSeconds)})),n&&this.handleShowNotification(n),this.tempState}},{key:"cyclesUntilLongBreak",get:function(){return this.state.longBreakFreq-this.state.cycle}},{key:"getFutureAdditionBreakTime",value:function(){var t=Math.round(this.state.hiddenAvailableBreakSeconds+1*this.state.timerSeconds/(60*this.state.workMinutes)*this.state.shortBreakMinutes*60);return this.state.cycle===this.state.longBreakFreq-1&&(t+=60*(this.state.longBreakMinutes-this.state.shortBreakMinutes)),this.formatSecondsAsText(t)}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(u.Helmet,{defer:!1,children:Object(b.jsxs)("title",{children:[String(Math.floor(this.state.timerSeconds/60)).padStart(2,"0")+":"+String(this.state.timerSeconds%60).padStart(2,"0")," ",!0===this.state.isWork?"Work":!1===this.state.isWork?"Break":"",this.state.isWork&&this.state.selectedTask?" ("+this.state.selectedTask+")":""]})}),Object(b.jsxs)(x.a,{children:[Object(b.jsxs)(D.a,{size:"lg",show:this.state.showAboutModal,onHide:this.handleAboutClose,children:[Object(b.jsx)(D.a.Header,{closeButton:!0,children:Object(b.jsx)(D.a.Title,{children:"About"})}),Object(b.jsxs)(D.a.Body,{children:[Object(b.jsx)("p",{children:'Productivity timer that enables you to work in "25 minutes work - 5 minutes break" model, but designed to be tolerant of situations when you cannot go on a break when you should or when you are forced to cut your break short and go back to work right now. The goal of the app is to always calculate the amount of break time you are entitled to.'}),Object(b.jsxs)("p",{children:["Features:",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"work in sessions that are at least 25 minutes long, but extend them at will as much as you want - the app will calculate the correct amount of break time available to you at all times"}),Object(b.jsx)("li",{children:"get back to work before finishing your break and be able to reclaim the remaining break time later"}),Object(b.jsx)("li",{children:"track how much time you spent on a given task, with precision down to minutes"}),Object(b.jsx)("li",{children:"configure work and break times per your needs"}),Object(b.jsx)("li",{children:"you may safely close the app when the timer is running - when you open the app again, the correct app state will be calculated, taking into account how much time has passed (this also applies to forceful shutdowns like system crashes or power outages)"}),Object(b.jsx)("li",{children:"100% private - all the data is kept locally on your device, nothing is sent to the server - in fact, there is no server backend at all"})]})]})]}),Object(b.jsx)(D.a.Footer,{children:Object(b.jsx)(y.a,{onClick:this.handleAboutClose,children:"Close"})})]}),Object(b.jsx)(j.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(y.a,{variant:"link",onClick:this.handleAboutShow,className:"float-right",children:"About"})})}),Object(b.jsxs)(D.a,{show:this.state.showHoldModal,onHide:this.handleClose,children:[Object(b.jsx)(D.a.Header,{closeButton:!0,children:Object(b.jsx)(D.a.Title,{children:p.CONFIRM_HOLD_TIMER_MODAL_HEADER})}),Object(b.jsx)(D.a.Body,{children:p.CONFIRM_HOLD_TIMER_MODAL_TEXT}),Object(b.jsxs)(D.a.Footer,{children:[Object(b.jsx)(y.a,{variant:"secondary",onClick:this.handleClose,children:"No"}),Object(b.jsx)(y.a,{variant:"primary",onClick:this.onClickHoldWork,children:p.CONFIRM_HOLD_TIMER_BUTTON_TEXT})]})]}),Object(b.jsx)(j.a,{className:"mt-3",children:Object(b.jsx)(m.a,{children:Object(b.jsxs)(V.a,{children:[!0===this.state.timerRunning&&Object(b.jsx)(y.a,{variant:"outline-warning",onClick:this.handleShow,children:p.HOLD_WORK_BUTTON_TEXT}),!1===this.state.timerRunning&&Object(b.jsx)(y.a,{variant:"secondary",onClick:this.onClickResumeWork,"data-testid":"resume-work-btn",children:p.RESUME_WORK_BUTTON_TEXT}),null===this.state.isWork&&Object(b.jsx)(y.a,{variant:"success",onClick:this.onClickStartWorking,"data-testid":"start-working-btn",children:p.START_WORKING_BUTTON_TEXT}),null!==this.state.isWork&&Object(b.jsx)(y.a,{variant:"outline-dark",onClick:this.onClickReset,"data-testid":"reset-btn",children:p.RESET_BUTTON_TEXT})]})})}),Object(b.jsx)(j.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)("h3",{className:"mt-3",children:!0===this.state.isWork?p.WORK_LABEL_TEXT:!1===this.state.isWork?p.BREAK_LABEL_TEXT:""})})}),Object(b.jsx)(j.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)("h1",{"data-testid":"timer",children:this.getTimerMinutes()+":"+this.getTimerSeconds()})})}),Object(b.jsx)(j.a,{children:Object(b.jsxs)(m.a,{children:[!0===this.state.isWork?Object(b.jsx)(b.Fragment,{children:this.state.availableBreakSeconds?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(y.a,{variant:"success",onClick:this.onClickGoOnABreak,children:p.GO_ON_A_BREAT_BUTTON_TEXT})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(H.a,{overlay:Object(b.jsx)(K.a,{id:"tooltip-disabled",children:p.BREAK_WILL_BECOME_AVAILABLE_TEXT}),children:Object(b.jsx)("span",{className:"d-inline-block",children:Object(b.jsx)(y.a,{disabled:!0,variant:"success",style:{pointerEvents:"none"},children:p.GO_ON_A_BREAT_BUTTON_TEXT})})})})}):null,!1===this.state.isWork?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(y.a,{variant:"secondary",onClick:this.onClickReturnToWork,children:p.RETURN_TO_WORK_BUTTON_TEXT})}):null]})}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(m.a,{sm:6,className:"font-weight-light text-md-right",children:"Total time worked:"}),Object(b.jsx)(m.a,{sm:6,className:"text-md-left","data-testid":"totalWorkedTime",children:this.formatSecondsAsText(this.state.totalWorkedSeconds)})]}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(m.a,{sm:6,className:"font-weight-light text-md-right",children:"Available break time:"}),Object(b.jsx)(m.a,{sm:6,className:"text-md-left","data-testid":"availableBreakTime",children:this.formatSecondsAsText(this.state.availableBreakSeconds)})]}),this.state.isWork&&this.state.availableBreakSeconds<60*this.state.shortBreakMinutes&&Object(b.jsx)(j.a,{children:Object(b.jsxs)(m.a,{xs:12,sm:{span:6,offset:6},className:"text-md-left text-muted font-weight-light small",children:["+"," ",Object(b.jsx)("span",{"data-testid":"futureAdditionBreakTime",children:this.getFutureAdditionBreakTime()})," ","after work timer finishes"]})}),Object(b.jsxs)(j.a,{children:[Object(b.jsxs)(m.a,{sm:6,className:"font-weight-light text-md-right",children:["Cycles until long break (",this.state.longBreakMinutes," minutes):"]}),Object(b.jsx)(m.a,{sm:6,className:"text-md-left","data-testid":"longBreakInfo",children:this.cyclesUntilLongBreak})]}),Object(b.jsxs)(j.a,{children:[Object(b.jsx)(m.a,{sm:6,className:"font-weight-light text-md-right",children:"Total time (work + break):"}),Object(b.jsx)(m.a,{sm:6,className:"text-md-left","data-testid":"totalCombinedTime",children:this.formatSecondsAsText(this.state.totalCombinedTime)})]}),Object(b.jsx)(j.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(k.a.Check,{type:"checkbox",label:p.CONTINOUS_WORK_TEXT,checked:this.state.continousWork,id:"cont-work-check","data-testid":"cont-work",onChange:this.onChangeContinousWork})})}),Object(b.jsx)(j.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(k.a.Check,{type:"checkbox",label:p.START_TIMERS_AUTOMATICALLY_TEXT,checked:this.state.autoStartTimers,id:"auto-start-timers-check","data-testid":"auto-start-timers",onChange:this.onChangeAutoStartTimers})})}),Object(b.jsx)(j.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(k.a.Check,{type:"checkbox",label:p.ALWAYS_START_FULL_WORK_TEXT,checked:this.state.alwaysStartFullWork,id:"full-work-check","data-testid":"full-work",onChange:this.onChangeAlwaysStartFullWork})})}),Object(b.jsx)(j.a,{className:"mt-2 mb-2",children:Object(b.jsx)(m.a,{children:Object(b.jsx)(y.a,{variant:"outline-dark",onClick:this.onClickSettings,children:"Settings"})})}),Object(b.jsx)(j.a,{className:"mb-3",children:Object(b.jsx)(m.a,{children:Object(b.jsx)(I.a,{in:this.state.settingsVisible,children:Object(b.jsx)("div",{children:Object(b.jsxs)(L.a,{children:[Object(b.jsx)(L.a.Header,{children:Object(b.jsx)(U.a,{onClick:this.onClickSettings})}),Object(b.jsx)(L.a.Body,{children:Object(b.jsx)(g,{workMinutes:this.state.workMinutes,shortBreakMinutes:this.state.shortBreakMinutes,longBreakMinutes:this.state.longBreakMinutes,longBreakFreq:this.state.longBreakFreq,onchange:this.onChangeSettings})})]})})})})}),Object(b.jsx)(j.a,{className:"mb-3",children:Object(b.jsx)(m.a,{children:Object(b.jsx)(_,{onTaskCreate:this.handleTaskCreated,onTaskSelected:this.handleTaskSelected,tasks:this.state.tasks,selectedTask:this.state.selectedTask,onTaskRemoved:this.handleTaskRemoved,eventsTimestamp:this.state.eventsTimestamp,totalMaxVisibleCharacters:255})})}),Object(b.jsx)(j.a,{className:"mb-3",children:Object(b.jsx)(m.a,{children:Object(b.jsx)(N,{events:this.state.events,eventsTimestamp:this.state.eventsTimestamp})})}),Object(b.jsx)(j.a,{className:"mb-2",children:Object(b.jsx)(m.a,{children:Object(b.jsx)(y.a,{variant:"outline-dark","data-testid":"toggle-calendar-btn",onClick:this.onClickToggleCalendar,children:this.state.calendarVisible?"Hide calendar":"Show calendar"})})}),Object(b.jsx)(j.a,{children:Object(b.jsx)(m.a,{children:Object(b.jsx)(I.a,{in:this.state.calendarVisible,children:Object(b.jsx)(L.a,{children:Object(b.jsx)(L.a.Body,{children:this.state.calendarVisible&&Object(b.jsx)(O.a,{events:this.state.events,plugins:[T.a,f.b,S.a],initialView:"timeGridWeek",headerToolbar:{right:"today prev,next dayGridMonth,timeGridWeek,timeGridDay listWeek"},slotDuration:"00:10:00",height:650,eventDidMount:function(t){t.el.title=t.event.title}})})})})})})]})]})}}]),a}(n.a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var Y=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,190)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,i=e.getLCP,r=e.getTTFB;a(t),s(t),n(t),i(t),r(t)}))},z=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(){Object(c.a)(this,a);return e.call(this,25,5,10,4,true,{timerSeconds:1500,lastWorkTimerSeconds:1500,totalWorkedSeconds:0,isWork:null,availableBreakSeconds:0,hiddenAvailableBreakSeconds:0,totalCombinedTime:0,cycle:0,notificationsGranted:!1,timerRunning:null,continousWork:true,timerLastUpdatedAt:Date.now(),autoStartTimers:!0,alwaysStartFullWork:!0,workMinutes:25,shortBreakMinutes:5,longBreakMinutes:10,longBreakFreq:4,settingsVisible:!1,calendarVisible:!1,events:[],timerStartedAt:null,timerStartedWithSeconds:null,tasks:[],selectedTask:"",showHoldModal:!1})}return a}(function(){function t(e,a,s,n,i,r){Object(c.a)(this,t),this._workMinutes=e,this._shortBreakMinutes=a,this._longBreakMinutes=s,this._longBreakFreq=n,this._continousWork=i,this._defaultState=r}return Object(l.a)(t,[{key:"workMinutes",get:function(){return this._workMinutes}},{key:"shortBreakMinutes",get:function(){return this._shortBreakMinutes}},{key:"longBreakMinutes",get:function(){return this._longBreakMinutes}},{key:"longBreakFreq",get:function(){return this._longBreakFreq}},{key:"continousWork",get:function(){return this._continousWork}},{key:"defaultState",get:function(){return this._defaultState}}]),t}()),Q=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"requestPermission",value:function(){return Notification.requestPermission()}},{key:"createNotification",value:function(t,e){new Notification(t,e)}}]),t}(),J=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"state",get:function(){return JSON.parse(localStorage.getItem("timer_state"))},set:function(t){localStorage.setItem("timer_state",JSON.stringify(t))}}]),t}();r.a.render(Object(b.jsx)(P,{basename:".",defaultSettings:new z,notifications:new Q,storage:new J}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");G?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(a){var s=a.headers.get("content-type");404===a.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):q(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(e,t)}))}}(),Y()},91:function(t,e,a){}},[[178,1,2]]]);
//# sourceMappingURL=main.c451aa34.chunk.js.map