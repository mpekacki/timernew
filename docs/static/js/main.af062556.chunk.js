(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{103:function(t,e,s){},178:function(t,e,s){"use strict";s.r(e);s(91),s(92);var a=s(1),n=s.n(a),i=s(17),r=s.n(i),o=s(88),c=s(14),l=s(15),d=s(22),h=s(21),u=s(82),k=(s(103),s(12)),j=s(10),m=s(9),p=s(3),b=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(){var t;Object(c.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))).onChangeWorkMinutes=function(e){t.props.onchange({workMinutes:+e.target.value})},t.onChangeShortBreakMinutes=function(e){t.props.onchange({shortBreakMinutes:+e.target.value})},t.onChangeLongBreakMinutes=function(e){t.props.onchange({longBreakMinutes:+e.target.value})},t.onChangeLongBreakFreq=function(e){t.props.onchange({longBreakFreq:+e.target.value})},t}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(k.a,{children:[Object(p.jsxs)(j.a,{children:[Object(p.jsx)(m.a,{sm:6,children:Object(p.jsxs)(k.a.Group,{as:j.a,children:[Object(p.jsx)(k.a.Label,{column:!0,xs:8,children:"Work cycle minutes"}),Object(p.jsx)(m.a,{xs:4,children:Object(p.jsx)(k.a.Control,{type:"number",value:this.props.workMinutes,onChange:this.onChangeWorkMinutes})})]})}),Object(p.jsx)(m.a,{sm:6,children:Object(p.jsxs)(k.a.Group,{as:j.a,children:[Object(p.jsx)(k.a.Label,{column:!0,xs:8,children:"Short break minutes"}),Object(p.jsx)(m.a,{xs:4,children:Object(p.jsx)(k.a.Control,{type:"number",value:this.props.shortBreakMinutes,onChange:this.onChangeShortBreakMinutes})})]})})]}),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(m.a,{sm:6,children:Object(p.jsxs)(k.a.Group,{as:j.a,children:[Object(p.jsx)(k.a.Label,{column:!0,xs:8,children:"Long break minutes"}),Object(p.jsx)(m.a,{xs:4,children:Object(p.jsx)(k.a.Control,{type:"number",value:this.props.longBreakMinutes,onChange:this.onChangeLongBreakMinutes})})]})}),Object(p.jsx)(m.a,{sm:6,children:Object(p.jsxs)(k.a.Group,{as:j.a,children:[Object(p.jsx)(k.a.Label,{column:!0,xs:8,children:"Long break after n cycles"}),Object(p.jsx)(m.a,{xs:4,children:Object(p.jsx)(k.a.Control,{type:"number",value:this.props.longBreakFreq,onChange:this.onChangeLongBreakFreq})})]})})]}),Object(p.jsx)(j.a,{children:Object(p.jsx)(m.a,{children:Object(p.jsx)(k.a.Text,{className:"text-muted",children:"Changes are effective after timer reset."})})})]})}}]),s}(n.a.Component),g=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"CREATE_TASK_PLACEHOLDER_TEXT",get:function(){return"Enter task name..."}},{key:"SAVE_NEW_TASK_BUTTON_TEXT",get:function(){return"Save new task"}},{key:"NO_TASK_TEXT",get:function(){return"No task"}},{key:"GO_ON_A_BREAT_BUTTON_TEXT",get:function(){return"Go on a break"}},{key:"RETURN_TO_WORK_BUTTON_TEXT",get:function(){return"Return to work"}},{key:"START_WORKING_BUTTON_TEXT",get:function(){return"Start"}},{key:"HOLD_WORK_BUTTON_TEXT",get:function(){return"Hold"}},{key:"RESUME_WORK_BUTTON_TEXT",get:function(){return"Resume"}},{key:"CONTINOUS_WORK_TEXT",get:function(){return"Continous work"}},{key:"START_TIMERS_AUTOMATICALLY_TEXT",get:function(){return"Start new timers automatically"}},{key:"RESET_CONFIRMATION_TEXT",get:function(){return"Do you want to reset timer values? (tasks, events, settings etc. will be kept)"}},{key:"RESET_BUTTON_TEXT",get:function(){return"Reset"}},{key:"CONFIRM_HOLD_TIMER_BUTTON_TEXT",get:function(){return"Yes, hold timer"}},{key:"CONFIRM_HOLD_TIMER_MODAL_HEADER",get:function(){return"Warning!"}},{key:"CONFIRM_HOLD_TIMER_MODAL_TEXT",get:function(){return'This option should only be used if you\'re stopping work for a significant amount of time. It should not be used for normal mid-work breaks - instead, please wait for the "Go on a break" button to become available.\n\nAre sure you want to hold the timer anyway?'}},{key:"WORK_LABEL_TEXT",get:function(){return"Work"}},{key:"BREAK_LABEL_TEXT",get:function(){return"Break"}},{key:"BREAK_WILL_BECOME_AVAILABLE_TEXT",get:function(){return"A break will be available when the current work timer finishes."}},{key:"REMOVE_TASK_BUTTON_TEXT",get:function(){return"Remove task"}},{key:"getRemoveTaskConfirmationText",value:function(t){return'Are sure you want to remove the task "'.concat(t,'"?')}},{key:"ALWAYS_START_FULL_WORK_TEXT",get:function(){return"Always start full work timer"}}]),t}(),O=s(13),S=s(23),T=s(87),f=s(83),x=s(56),v=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).onClickStartWorking=function(){a.setStateAndStorage({isWork:!0,timerRunning:!0}),a.markTimerStart(a.props.timerSeconds,Date.now())},a.onClickReturnToWork=function(){var t=a.props.timerSeconds,e=!a.props.alwaysStartFullWork&&a.props.lastWorkTimerSeconds||60*a.props.workMinutes;a.setStateAndStorage({isWork:!0,timerSeconds:e}),a.notifyCycleChange(!1,t,e)},a.onClickGoOnABreak=function(){var t=Math.round(a.props.availableBreakSeconds),e=a.props.timerSeconds;a.setStateAndStorage({isWork:!1,timerSeconds:t,availableBreakSeconds:t}),a.notifyCycleChange(!0,e,t)},a.tick=function(){if(a.props.timerRunning){var t=Date.now(),e=Math.round((t-a.props.timerLastUpdatedAt)/1e3),s=a.calculateNewState(e,t);a.setStateAndStorage(s)}else a.setStateAndStorage({timerLastUpdatedAt:Date.now()})},a.notifyCycleChange=function(t,e,s){var n=a.props.timerStartedAt+1e3*(a.props.timerStartedWithSeconds-e),i={wasWork:t,start:a.props.timerStartedAt,end:n};a.props.onTimerFinish(i),a.markTimerStart(s,n)},a.markTimerStart=function(t,e){var s={timerStartedAt:e,timerStartedWithSeconds:t};a.props.setStateAndStorage(s)},a.onClickHoldWork=function(){a.setStateAndStorage({timerRunning:!1}),a.notifyCycleChange(a.props.isWork,a.props.timerSeconds,a.props.timerSeconds),a.handleClose()},a.onClickResumeWork=function(){a.setStateAndStorage({timerRunning:!0}),a.markTimerStart(a.props.timerSeconds,Date.now())},a.onChangeContinousWork=function(t){a.setStateAndStorage({continousWork:t.target.checked})},a.onChangeAutoStartTimers=function(t){a.setStateAndStorage({autoStartTimers:t.target.checked})},a.onChangeAlwaysStartFullWork=function(t){a.setStateAndStorage({alwaysStartFullWork:t.target.checked})},a.setStateAndStorage=function(t){a.props.setStateAndStorage(t)},a.handleShow=function(){a.setState({showHoldModal:!0})},a.handleClose=function(){a.setState({showHoldModal:!1})},window.Worker?(a.worker=new Worker("./worker.js"),a.worker.onmessage=function(){a.tick()}):a.interval=setInterval(a.tick,1e3),a.tick(),a.state={showHoldModal:!1},a}return Object(l.a)(s,[{key:"componentWillUnmount",value:function(){this.worker?this.worker.terminate():clearInterval(this.interval)}},{key:"formatSecondsAsTimer",value:function(){return this.getTimerMinutes()+":"+this.getTimerSeconds()}},{key:"getTimerSeconds",value:function(){return String(this.props.timerSeconds%60).padStart(2,"0")}},{key:"getTimerMinutes",value:function(){return String(Math.floor(this.props.timerSeconds/60)).padStart(2,"0")}},{key:"formatSecondsAsText",value:function(t){t=Math.round(t);var e=Math.floor(t/3600)+"",s="1"===e?"hour":"hours";t%=3600;var a=Math.floor(t/60)+"",n=(t%=60)%60+"";return(("0"!==e?e+" "+s+" ":"")+("0"!==a?a+" "+("1"===a?"minute":"minutes")+" ":"")+("0"!==n?n+" "+("1"===n?"second":"seconds"):"")).trim()||"0 minutes"}},{key:"calculateNewState",value:function(t,e){this.tempState={isWork:this.props.isWork,totalWorkedSeconds:this.props.totalWorkedSeconds,lastWorkTimerSeconds:this.props.lastWorkTimerSeconds,availableBreakSeconds:this.props.availableBreakSeconds,hiddenAvailableBreakSeconds:this.props.hiddenAvailableBreakSeconds,timerLastUpdatedAt:this.props.timerLastUpdatedAt,cycle:this.props.cycle,continousWork:this.props.continousWork,timerSeconds:this.props.timerSeconds,totalCombinedTime:this.props.totalCombinedTime};for(var s=t;s>0;s--){if(this.tempState.timerSeconds--,this.tempState.totalCombinedTime++,this.tempState.isWork){this.tempState.totalWorkedSeconds++,this.tempState.lastWorkTimerSeconds=this.tempState.timerSeconds;var a=1*this.props.shortBreakMinutes/this.props.workMinutes;this.tempState.availableBreakSeconds>=60*this.props.shortBreakMinutes?this.tempState.availableBreakSeconds+=a:this.tempState.hiddenAvailableBreakSeconds+=a}else this.tempState.availableBreakSeconds--;if(this.tempState.timerLastUpdatedAt=e,0===this.tempState.timerSeconds){var n=this.tempState.isWork,i={};if(n){var r=this.tempState.cycle+1,o=this.tempState.availableBreakSeconds;r===this.props.longBreakFreq&&(r=0,o+=60*this.props.longBreakMinutes-60*this.props.shortBreakMinutes),o+=this.tempState.hiddenAvailableBreakSeconds,o=Math.round(o);var c=void 0,l=void 0;this.tempState.continousWork?(c=60*this.props.workMinutes,l=!0):(c=o,l=!1),i={timerSeconds:c,availableBreakSeconds:o,hiddenAvailableBreakSeconds:0,isWork:l,cycle:r}}else i={timerSeconds:!this.props.alwaysStartFullWork&&this.props.lastWorkTimerSeconds||60*this.props.workMinutes,isWork:!0};i.timerRunning=this.props.autoStartTimers;var d=this.tempState.timerSeconds;this.tempState=Object.assign(this.tempState,i),this.props.showNotification(n?"Work finished":"Break finished"),this.notifyCycleChange(n,d,this.tempState.timerSeconds)}}return this.tempState}},{key:"cyclesUntilLongBreak",get:function(){return this.props.longBreakFreq-this.props.cycle}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(S.a,{show:this.state.showHoldModal,onHide:this.handleClose,children:[Object(p.jsx)(S.a.Header,{closeButton:!0,children:Object(p.jsx)(S.a.Title,{children:g.CONFIRM_HOLD_TIMER_MODAL_HEADER})}),Object(p.jsx)(S.a.Body,{children:g.CONFIRM_HOLD_TIMER_MODAL_TEXT}),Object(p.jsxs)(S.a.Footer,{children:[Object(p.jsx)(O.a,{variant:"secondary",onClick:this.handleClose,children:"No"}),Object(p.jsx)(O.a,{variant:"primary",onClick:this.onClickHoldWork,children:g.CONFIRM_HOLD_TIMER_BUTTON_TEXT})]})]}),Object(p.jsx)(j.a,{className:"mt-3",children:Object(p.jsx)(m.a,{children:Object(p.jsxs)(x.a,{children:[!0===this.props.timerRunning&&Object(p.jsx)(O.a,{variant:"outline-warning",onClick:this.handleShow,children:g.HOLD_WORK_BUTTON_TEXT}),!1===this.props.timerRunning&&Object(p.jsx)(O.a,{variant:"secondary",onClick:this.onClickResumeWork,"data-testid":"resume-work-btn",children:g.RESUME_WORK_BUTTON_TEXT}),null===this.props.isWork&&Object(p.jsx)(O.a,{variant:"success",onClick:this.onClickStartWorking,"data-testid":"start-working-btn",children:g.START_WORKING_BUTTON_TEXT}),null!==this.props.isWork&&Object(p.jsx)(O.a,{variant:"outline-dark",onClick:this.props.onClickReset,"data-testid":"reset-btn",children:g.RESET_BUTTON_TEXT})]})})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(m.a,{children:Object(p.jsx)("h3",{className:"mt-3",children:!0===this.props.isWork?g.WORK_LABEL_TEXT:!1===this.props.isWork?g.BREAK_LABEL_TEXT:""})})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(m.a,{children:Object(p.jsx)("h1",{"data-testid":"timer",children:this.getTimerMinutes()+":"+this.getTimerSeconds()})})}),Object(p.jsx)(j.a,{children:Object(p.jsxs)(m.a,{children:[!0===this.props.isWork?Object(p.jsx)(p.Fragment,{children:this.props.availableBreakSeconds?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(O.a,{variant:"success",onClick:this.onClickGoOnABreak,children:g.GO_ON_A_BREAT_BUTTON_TEXT})}):Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(T.a,{overlay:Object(p.jsx)(f.a,{id:"tooltip-disabled",children:g.BREAK_WILL_BECOME_AVAILABLE_TEXT}),children:Object(p.jsx)("span",{className:"d-inline-block",children:Object(p.jsx)(O.a,{disabled:!0,variant:"success",style:{pointerEvents:"none"},children:g.GO_ON_A_BREAT_BUTTON_TEXT})})})})}):null,!1===this.props.isWork?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(O.a,{variant:"secondary",onClick:this.onClickReturnToWork,children:g.RETURN_TO_WORK_BUTTON_TEXT})}):null]})}),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(m.a,{sm:6,className:"font-weight-light text-md-right",children:"Total time worked:"}),Object(p.jsx)(m.a,{sm:6,className:"text-md-left","data-testid":"totalWorkedTime",children:this.formatSecondsAsText(this.props.totalWorkedSeconds)})]}),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(m.a,{sm:6,className:"font-weight-light text-md-right",children:"Available break time:"}),Object(p.jsx)(m.a,{sm:6,className:"text-md-left","data-testid":"availableBreakTime",children:this.formatSecondsAsText(this.props.availableBreakSeconds)})]}),this.props.isWork&&this.props.availableBreakSeconds<60*this.props.shortBreakMinutes&&Object(p.jsx)(j.a,{children:Object(p.jsxs)(m.a,{xs:12,sm:{span:6,offset:6},className:"text-md-left text-muted font-weight-light small",children:["+"," ",Object(p.jsx)("span",{"data-testid":"futureAdditionBreakTime",children:this.getFutureAdditionBreakTime()})," ","after work timer finishes"]})}),Object(p.jsxs)(j.a,{children:[Object(p.jsxs)(m.a,{sm:6,className:"font-weight-light text-md-right",children:["Cycles until long break (",this.props.longBreakMinutes," minutes):"]}),Object(p.jsx)(m.a,{sm:6,className:"text-md-left","data-testid":"longBreakInfo",children:this.cyclesUntilLongBreak})]}),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(m.a,{sm:6,className:"font-weight-light text-md-right",children:"Total time (work + break):"}),Object(p.jsx)(m.a,{sm:6,className:"text-md-left","data-testid":"totalCombinedTime",children:this.formatSecondsAsText(this.props.totalCombinedTime)})]}),Object(p.jsx)(j.a,{children:Object(p.jsx)(m.a,{children:Object(p.jsx)(k.a.Check,{type:"checkbox",label:g.CONTINOUS_WORK_TEXT,checked:this.props.continousWork,id:"cont-work-check","data-testid":"cont-work",onChange:this.onChangeContinousWork})})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(m.a,{children:Object(p.jsx)(k.a.Check,{type:"checkbox",label:g.START_TIMERS_AUTOMATICALLY_TEXT,checked:this.props.autoStartTimers,id:"auto-start-timers-check","data-testid":"auto-start-timers",onChange:this.onChangeAutoStartTimers})})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(m.a,{children:Object(p.jsx)(k.a.Check,{type:"checkbox",label:g.ALWAYS_START_FULL_WORK_TEXT,checked:this.props.alwaysStartFullWork,id:"full-work-check","data-testid":"full-work",onChange:this.onChangeAlwaysStartFullWork})})})]})}},{key:"getFutureAdditionBreakTime",value:function(){var t=Math.round(this.props.hiddenAvailableBreakSeconds+1*this.props.timerSeconds/(60*this.props.workMinutes)*this.props.shortBreakMinutes*60);return this.props.cycle===this.props.longBreakFreq-1&&(t+=60*(this.props.longBreakMinutes-this.props.shortBreakMinutes)),this.formatSecondsAsText(t)}}]),s}(n.a.Component),w=s(89),y=s(67),C=s(57),A=s(84),_=s(58),B=s(90),W=s(45),M=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).handleTextInputChange=function(t){var e=t.target.value;a.setState({taskInput:e})},a.handleSaveClick=function(){a.props.onTaskCreate(a.state.taskInput.trim()),a.setState({taskInput:""})},a.handleTaskSelected=function(t){a.props.onTaskSelected(t)},a.createButtonVisible=function(){return a.state.taskInput&&""!==a.state.taskInput.trim()&&(!a.props.tasks||!a.props.tasks.some((function(t){return t.toUpperCase()===a.state.taskInput.toUpperCase()})))},a.handleRemoveClick=function(){window.confirm(g.getRemoveTaskConfirmationText(a.props.selectedTask))&&a.props.onTaskRemoved(a.props.selectedTask)},a.handleMoreTasksToggleClick=function(){a.setState({showMore:!a.state.showMore})},a.state={taskInput:"",showMore:!1},a}return Object(l.a)(s,[{key:"getVisibleTasks",value:function(){var t=this,e=this.props.tasks?this.props.tasks.filter((function(e){return e.toUpperCase().includes(t.state.taskInput.toUpperCase())})):[];if(this.props.totalMaxVisibleCharacters){var s=[];return e.reduce((function(e,a){return e<t.props.totalMaxVisibleCharacters&&s.push(a),e+a.length}),0),s}return e}},{key:"render",value:function(){var t=this,e=0,s=this.props.tasks?this.props.tasks.filter((function(e){return e.toUpperCase().includes(t.state.taskInput.toUpperCase())})):[];if(this.props.totalMaxVisibleCharacters){var a=[];s.reduce((function(e,s){return e<t.props.totalMaxVisibleCharacters&&a.push(s),e+s.length}),0),e=s.length-a.length,this.state.showMore||(s=a)}var n=this.state.showMore?"show less":"show "+e+" more";return Object(p.jsxs)(_.a,{children:[Object(p.jsxs)(j.a,{className:"mb-2",children:[Object(p.jsx)(m.a,{xs:9,children:Object(p.jsxs)(k.a,{inline:!0,children:[Object(p.jsx)(k.a.Group,{controlId:"taskInput",className:"mr-1",children:Object(p.jsx)(k.a.Control,{type:"text",onChange:this.handleTextInputChange,placeholder:g.CREATE_TASK_PLACEHOLDER_TEXT,value:this.state.taskInput})}),this.createButtonVisible()?Object(p.jsxs)(O.a,{type:"primary",onClick:this.handleSaveClick,children:[g.SAVE_NEW_TASK_BUTTON_TEXT,' "',this.state.taskInput,'"']}):null]})}),this.props.selectedTask&&Object(p.jsx)(m.a,{xs:3,children:Object(p.jsx)(O.a,{variant:"outline-danger",size:"sm",onClick:this.handleRemoveClick,className:"float-right",children:g.REMOVE_TASK_BUTTON_TEXT})})]}),Object(p.jsx)(j.a,{children:Object(p.jsxs)(m.a,{children:[Object(p.jsxs)(B.a,{type:"radio",name:"tasks",style:{flexWrap:"wrap"},className:"float-left",value:this.props.selectedTask,onChange:this.handleTaskSelected,children:[Object(p.jsx)(W.a,{id:"radio-null",value:"",children:g.NO_TASK_TEXT}),s.map((function(t){return Object(p.jsx)(W.a,{id:"radio-"+t,value:t,"data-testid":"button-"+t,children:t},t)}))]}),e>0&&Object(p.jsx)(O.a,{variant:"light",className:"float-left","data-testid":"more-tasks-btn",onClick:this.handleMoreTasksToggleClick,children:n})]})})]})}}]),s}(n.a.Component),E=s(184),R=s(185),N=s(186),L=s(187),F=s(85),I="@@@TOTALS",U=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).formatSeconds=function(t){t/=1e3;var e=Math.floor(t/3600),s=Math.floor(t%3600/60);return"".concat(e,"h").concat(s,"m")},a.state={timesMap:a.calculateTimes()},a}return Object(l.a)(s,[{key:"componentDidUpdate",value:function(t){this.props.eventsTimestamp!==t.eventsTimestamp&&this.setState({timesMap:this.calculateTimes()})}},{key:"calculateTimes",value:function(){var t=this,e={},s=0,a=0,n=0,i=0;return this.props.events.forEach((function(t){if(t.isWork){var r=Object(E.a)(t.start),o=Object(R.a)(t.start),c=Object(N.a)(t.start),l=Object(L.a)(t.start);if(r||o||c||l){var d=t.task;if(null!==d&&void 0!==d&&""!==d&&"null"!==d||(d=g.NO_TASK_TEXT),d in e||(e[d]={today:0,yesterday:0,week:0,month:0}),void 0!==t.end){var h=t.end.getTime()-t.start.getTime();r?(e[d].today+=h,s+=h):o&&(e[d].yesterday+=h,a+=h),c&&(e[d].week+=h,n+=h),l&&(e[d].month+=h,i+=h)}}}})),Object.entries(e).forEach((function(e){e[1].todayPercentage=t.getPercentage(e[1].today,s),e[1].yesterdayPercentage=t.getPercentage(e[1].yesterday,a),e[1].weekPercentage=t.getPercentage(e[1].week,n),e[1].monthPercentage=t.getPercentage(e[1].month,i)})),e[I]={today:s,yesterday:a,week:n,month:i},e}},{key:"getPercentage",value:function(t,e){var s=Math.round(t/e*100);return isNaN(s)?"-":s+"%"}},{key:"render",value:function(){var t=this;return Object(p.jsxs)(F.a,{size:"sm",responsive:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Task"}),Object(p.jsx)("th",{children:"Today"}),Object(p.jsx)("th",{children:"%"}),Object(p.jsx)("th",{children:"Yesterday"}),Object(p.jsx)("th",{children:"%"}),Object(p.jsx)("th",{children:"Week"}),Object(p.jsx)("th",{children:"%"}),Object(p.jsx)("th",{children:"Month"}),Object(p.jsx)("th",{children:"%"})]})}),Object(p.jsxs)("tbody",{children:[Object.entries(this.state.timesMap).filter((function(t){return t[0]!==I})).map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e[0]}),Object(p.jsx)("td",{"data-testid":"today-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].today)}),Object(p.jsx)("td",{"data-testid":"todayp-"+e[0].charAt(0)+e[0].length,children:e[1].todayPercentage}),Object(p.jsx)("td",{"data-testid":"yesterday-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].yesterday)}),Object(p.jsx)("td",{"data-testid":"yesterdayp-"+e[0].charAt(0)+e[0].length,children:e[1].yesterdayPercentage}),Object(p.jsx)("td",{"data-testid":"week-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].week)}),Object(p.jsx)("td",{"data-testid":"weekp-"+e[0].charAt(0)+e[0].length,children:e[1].weekPercentage}),Object(p.jsx)("td",{"data-testid":"month-"+e[0].charAt(0)+e[0].length,children:t.formatSeconds(e[1].month)}),Object(p.jsx)("td",{"data-testid":"monthp-"+e[0].charAt(0)+e[0].length,children:e[1].monthPercentage})]},e[0])})),Object(p.jsxs)("tr",{class:"font-italic",children:[Object(p.jsx)("td",{children:"Total"}),Object(p.jsx)("td",{"data-testid":"today-total",children:this.formatSeconds(this.state.timesMap[I].today)}),Object(p.jsx)("td",{"data-testid":"todayp-total",children:"100%"}),Object(p.jsx)("td",{"data-testid":"yesterday-total",children:this.formatSeconds(this.state.timesMap[I].yesterday)}),Object(p.jsx)("td",{"data-testid":"yesterdayp-total",children:"100%"}),Object(p.jsx)("td",{"data-testid":"week-total",children:this.formatSeconds(this.state.timesMap[I].week)}),Object(p.jsx)("td",{"data-testid":"weekp-total",children:"100%"}),Object(p.jsx)("td",{"data-testid":"month-total",children:this.formatSeconds(this.state.timesMap[I].month)}),Object(p.jsx)("td",{"data-testid":"monthp-total",children:"100%"})]})]})]})}}]),s}(n.a.Component),X=s(39),D=s(68),K=s(55),H=s(86),V=s.n(H),P=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(c.a)(this,s),(a=e.call(this,t)).onClickReset=function(){window.confirm(g.RESET_CONFIRMATION_TEXT)&&a.setStateAndStorage(a.getStateForReset())},a.onClickSettings=function(){a.setState({settingsVisible:!a.state.settingsVisible})},a.onClickToggleCalendar=function(){a.setState({calendarVisible:!a.state.calendarVisible})},a.setStateAndStorage=function(t){a.setState(t),a.storage&&!V()(a.storage.state,t)&&(a.storage.state=Object.assign(a.state,t))},a.onChangeSettings=function(t){a.setStateAndStorage(t)},a.getDefaultState=function(){return Object.assign({},a.defaultSettings.defaultState)},a.getStateForReset=function(){var t=a.getDefaultState();return t.continousWork=a.state.continousWork,t.autoStartTimers=a.state.autoStartTimers,t.workMinutes=a.state.workMinutes,t.shortBreakMinutes=a.state.shortBreakMinutes,t.longBreakMinutes=a.state.longBreakMinutes,t.longBreakFreq=a.state.longBreakFreq,t.timerSeconds=60*a.state.workMinutes,t.events=a.state.events,t.tasks=a.state.tasks,t},a.handleTimerStateChange=function(t){a.setStateAndStorage(t)},a.handleShowNotification=function(t){a.notifications&&a.notificationsGranted&&(a.notificationQueued||(a.notificationQueued=!0,setTimeout(a.clearNotificationQueue,1e4),a.notifications.createNotification(t)))},a.clearNotificationQueue=function(){a.notificationQueued=null},a.handleEventCreated=function(t){var e=t.wasWork?"Work":"Break";a.state.selectedTask&&t.wasWork&&(e+=" ("+a.state.selectedTask+")");var s={title:e,isWork:t.wasWork,start:new Date(t.start),end:new Date(t.end),color:t.wasWork?"#3788d8":"orange",task:a.state.selectedTask};if(s.start.getTime()!==s.end.getTime()){var n=[].concat(Object(o.a)(a.state.events),[s]);n.length>1&&n[n.length-1].isWork===n[n.length-2].isWork&&n[n.length-2].end.getTime()===n[n.length-1].start.getTime()&&n[n.length-1].task===n[n.length-2].task&&((n=n.slice(0,n.length-1))[n.length-1].end=new Date(t.end)),a.setStateAndStorage({events:n}),a.setEventsTimestamp()}},a.handleTaskCreated=function(t){var e=a.state.tasks;e.push(t),a.setStateAndStorage({tasks:e}),a.setEventsTimestamp()},a.handleTaskSelected=function(t){var e=a.state.timerStartedAt+1e3*(a.state.timerStartedWithSeconds-a.state.timerSeconds);a.handleEventCreated({wasWork:a.state.isWork,start:a.state.timerStartedAt,end:e});var s=a.state.tasks;t&&(s.splice(a.state.tasks.indexOf(t),1),s.splice(0,0,t)),a.setStateAndStorage({timerStartedAt:e,timerStartedWithSeconds:a.state.timerSeconds,selectedTask:t,tasks:s})},a.handleTaskRemoved=function(t){var e=a.state.tasks;e.splice(e.indexOf(t),1);var s=a.state.events.filter((function(e){return e.task!==t}));a.setState({tasks:e,events:s,eventsTimestamp:Date.now(),selectedTask:a.state.selectedTask===t?null:a.state.selectedTask})},a.setEventsTimestamp=function(){a.setState({eventsTimestamp:Date.now()})},a.handleAboutShow=function(){a.setState({showAboutModal:!0})},a.handleAboutClose=function(){a.setState({showAboutModal:!1})},a.defaultSettings=t.defaultSettings,a.storage=t.storage,a.state=a.getDefaultState(),a.storage&&a.storage.state&&(a.state=Object.assign(a.state,a.storage.state),a.state.events.forEach((function(t){t.start=new Date(Date.parse(t.start)),t.end=new Date(Date.parse(t.end))}))),t.notifications&&(a.notifications=t.notifications,a.notifications.requestPermission().then((function(t){"granted"===t&&(a.notificationsGranted=!0)}))),a.plugins=[y.a],a}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(u.Helmet,{defer:!1,children:Object(p.jsxs)("title",{children:[String(Math.floor(this.state.timerSeconds/60)).padStart(2,"0")+":"+String(this.state.timerSeconds%60).padStart(2,"0")," ",!0===this.state.isWork?"Work":!1===this.state.isWork?"Break":"",this.state.isWork&&this.state.selectedTask?" ("+this.state.selectedTask+")":""]})}),Object(p.jsxs)(_.a,{children:[Object(p.jsxs)(S.a,{size:"lg",show:this.state.showAboutModal,onHide:this.handleAboutClose,children:[Object(p.jsx)(S.a.Header,{closeButton:!0,children:Object(p.jsx)(S.a.Title,{children:"About"})}),Object(p.jsxs)(S.a.Body,{children:[Object(p.jsx)("p",{children:'Productivity timer that enables you to work in "25 minutes work - 5 minutes break" model, but designed to be tolerant of situations when you cannot go on a break when you should or when you are forced to cut your break short and go back to work right now. The goal of the app is to always calculate the amount of break time you are entitled to.'}),Object(p.jsxs)("p",{children:["Features:",Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"work in sessions that are at least 25 minutes long, but extend them at will as much as you want - the app will calculate the correct amount of break time available to you at all times"}),Object(p.jsx)("li",{children:"get back to work before finishing your break and be able to reclaim the remaining break time later"}),Object(p.jsx)("li",{children:"track how much time you spent on a given task, with precision down to minutes"}),Object(p.jsx)("li",{children:"configure work and break times per your needs"}),Object(p.jsx)("li",{children:"you may safely close the app when the timer is running - when you open the app again, the correct app state will be calculated, taking into account how much time has passed (this also applies to forceful shutdowns like system crashes or power outages)"}),Object(p.jsx)("li",{children:"100% private - all the data is kept locally on your device, nothing is sent to the server - in fact, there is no server backend at all"})]})]})]}),Object(p.jsx)(S.a.Footer,{children:Object(p.jsx)(O.a,{onClick:this.handleAboutClose,children:"Close"})})]}),Object(p.jsx)(j.a,{children:Object(p.jsx)(m.a,{children:Object(p.jsx)(O.a,{variant:"link",onClick:this.handleAboutShow,className:"float-right",children:"About"})})}),Object(p.jsx)(v,{timerSeconds:this.state.timerSeconds,lastWorkTimerSeconds:this.state.lastWorkTimerSeconds,totalWorkedSeconds:this.state.totalWorkedSeconds,isWork:this.state.isWork,availableBreakSeconds:this.state.availableBreakSeconds,hiddenAvailableBreakSeconds:this.state.hiddenAvailableBreakSeconds,totalCombinedTime:this.state.totalCombinedTime,cycle:this.state.cycle,timerRunning:this.state.timerRunning,continousWork:this.state.continousWork,timerLastUpdatedAt:this.state.timerLastUpdatedAt,autoStartTimers:this.state.autoStartTimers,alwaysStartFullWork:this.state.alwaysStartFullWork,workMinutes:this.state.workMinutes,shortBreakMinutes:this.state.shortBreakMinutes,longBreakMinutes:this.state.longBreakMinutes,longBreakFreq:this.state.longBreakFreq,timerStartedAt:this.state.timerStartedAt,timerStartedWithSeconds:this.state.timerStartedWithSeconds,setStateAndStorage:this.handleTimerStateChange,showNotification:this.handleShowNotification,onTimerFinish:this.handleEventCreated,onClickReset:this.onClickReset}),Object(p.jsx)(j.a,{className:"mt-2 mb-2",children:Object(p.jsx)(m.a,{children:Object(p.jsx)(O.a,{variant:"outline-dark",onClick:this.onClickSettings,children:"Settings"})})}),Object(p.jsx)(j.a,{className:"mb-3",children:Object(p.jsx)(m.a,{children:Object(p.jsx)(D.a,{in:this.state.settingsVisible,children:Object(p.jsx)("div",{children:Object(p.jsxs)(X.a,{children:[Object(p.jsx)(X.a.Header,{children:Object(p.jsx)(K.a,{onClick:this.onClickSettings})}),Object(p.jsx)(X.a.Body,{children:Object(p.jsx)(b,{workMinutes:this.state.workMinutes,shortBreakMinutes:this.state.shortBreakMinutes,longBreakMinutes:this.state.longBreakMinutes,longBreakFreq:this.state.longBreakFreq,onchange:this.onChangeSettings})})]})})})})}),Object(p.jsx)(j.a,{className:"mb-3",children:Object(p.jsx)(m.a,{children:Object(p.jsx)(M,{onTaskCreate:this.handleTaskCreated,onTaskSelected:this.handleTaskSelected,tasks:this.state.tasks,selectedTask:this.state.selectedTask,onTaskRemoved:this.handleTaskRemoved,eventsTimestamp:this.state.eventsTimestamp,totalMaxVisibleCharacters:255})})}),Object(p.jsx)(j.a,{className:"mb-3",children:Object(p.jsx)(m.a,{children:Object(p.jsx)(U,{events:this.state.events,eventsTimestamp:this.state.eventsTimestamp})})}),Object(p.jsx)(j.a,{className:"mb-2",children:Object(p.jsx)(m.a,{children:Object(p.jsx)(O.a,{variant:"outline-dark","data-testid":"toggle-calendar-btn",onClick:this.onClickToggleCalendar,children:this.state.calendarVisible?"Hide calendar":"Show calendar"})})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(m.a,{children:Object(p.jsx)(D.a,{in:this.state.calendarVisible,children:Object(p.jsx)(X.a,{children:Object(p.jsx)(X.a.Body,{children:this.state.calendarVisible&&Object(p.jsx)(w.a,{events:this.state.events,plugins:[y.a,C.b,A.a],initialView:"timeGridWeek",headerToolbar:{right:"today prev,next dayGridMonth,timeGridWeek,timeGridDay listWeek"},slotDuration:"00:10:00",height:650,eventDidMount:function(t){t.el.title=t.event.title}})})})})})})]})]})}}]),s}(n.a.Component),G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var s=t.installing;null!=s&&(s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var Y=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,188)).then((function(e){var s=e.getCLS,a=e.getFID,n=e.getFCP,i=e.getLCP,r=e.getTTFB;s(t),a(t),n(t),i(t),r(t)}))},Q=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(){Object(c.a)(this,s);return e.call(this,25,5,10,4,true,{timerSeconds:1500,lastWorkTimerSeconds:1500,totalWorkedSeconds:0,isWork:null,availableBreakSeconds:0,hiddenAvailableBreakSeconds:0,totalCombinedTime:0,cycle:0,notificationsGranted:!1,timerRunning:null,continousWork:true,timerLastUpdatedAt:Date.now(),autoStartTimers:!0,alwaysStartFullWork:!0,workMinutes:25,shortBreakMinutes:5,longBreakMinutes:10,longBreakFreq:4,settingsVisible:!1,calendarVisible:!1,events:[],timerStartedAt:null,timerStartedWithSeconds:null,tasks:[],selectedTask:""})}return s}(function(){function t(e,s,a,n,i,r){Object(c.a)(this,t),this._workMinutes=e,this._shortBreakMinutes=s,this._longBreakMinutes=a,this._longBreakFreq=n,this._continousWork=i,this._defaultState=r}return Object(l.a)(t,[{key:"workMinutes",get:function(){return this._workMinutes}},{key:"shortBreakMinutes",get:function(){return this._shortBreakMinutes}},{key:"longBreakMinutes",get:function(){return this._longBreakMinutes}},{key:"longBreakFreq",get:function(){return this._longBreakFreq}},{key:"continousWork",get:function(){return this._continousWork}},{key:"defaultState",get:function(){return this._defaultState}}]),t}()),J=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"requestPermission",value:function(){return Notification.requestPermission()}},{key:"createNotification",value:function(t,e){new Notification(t,e)}}]),t}(),z=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,[{key:"state",get:function(){return JSON.parse(localStorage.getItem("timer_state"))},set:function(t){localStorage.setItem("timer_state",JSON.stringify(t))}}]),t}();r.a.render(Object(p.jsx)(P,{basename:".",defaultSettings:new Q,notifications:new J,storage:new z}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");G?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(s){var a=s.headers.get("content-type");404===s.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):q(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(e,t)}))}}(),Y()},91:function(t,e,s){}},[[178,1,2]]]);
//# sourceMappingURL=main.af062556.chunk.js.map