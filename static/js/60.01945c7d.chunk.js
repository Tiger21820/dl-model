(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[60],{172:function(e,n,t){"use strict";function a(e,n){var t=URL.createObjectURL(e),a=document.createElement("a");a.style.display="none",a.href=t,a.download=n,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(t),document.body.removeChild(a)}t.d(n,"a",(function(){return a}))},196:function(e,n,t){"use strict";t.r(n),t.d(n,"AniViewer",(function(){return h}));var a=t(35),i=t.n(a),o=t(46),r=t(2),c=t(5),d=t(26),u=t(3),s=t(4),m=t(238),p=t(1),l=t(45),f=t(172),h=function(e){Object(u.a)(t,e);var n=Object(s.a)(t);function t(){var e;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return(e=n.call.apply(n,[this].concat(c))).afterMainModelLoad=function(){e.saveMainModelInitState(),e.addAnimation()},e.afterMainModelUpdate=function(){e.saveMainModelInitState(),e.addAnimation()},e.updateModel=function(){var n=Object(o.a)(i.a.mark((function n(t,a){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.updateMainModel(t.model,a.model);case 2:e.updateAnimation(t.animation,a.animation);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),e.otherUpdate=function(n,t){t.capture.enable&&!n.capture.enable&&e.captureAnimation()},e.saveMainModelInitState=function(){var n=e.models.main;n.userData.initPos=n.position.clone(),n.userData.initRot=n.rotation.clone()},e.resetFace=function(){var n=e.props.model,t=n.eyeIdx,a=n.mouthIdx;e.eyeIdx=t,e.mouthIdx=a},e.beforeAddAni=function(){e.resetFace()},e.addAnimation=Object(o.a)(i.a.mark((function n(){var t,a,o,r,c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.beforeAddAni(),t=e.props.animation,a=t.code,o=t.timeScale,a){n.next=4;break}return n.abrupt("return");case 4:return e.disableInput(),r=e.models.main,c=Object(l.a)(a),e.nAni=c.length,r.mixer=new p.AnimationMixer(r),e.mixer=r.mixer,e._aniIdx=0,r.mixer.timeScale=o,r.mixer.addEventListener("finished",e.playNextAni),e.aniSettings=c,n.next=16,Object(l.w)(c);case 16:e.animations=n.sent,e.aniIdx=0,e.enableInput();case 19:case"end":return n.stop()}}),n)}))),e.removeAnimation=function(){var n,t,a=e.models.main;null===(n=a.mixer)||void 0===n||null===(t=n.stopAllAction)||void 0===t||t.call(n);var i=a.userData,o=i.initPos,r=i.initRot;a.position.copy(o),a.rotation.copy(r),e.mixer=null,e.animations=[],e.aniSettings=[]},e.playNextAni=function(){var n=Object(d.a)(e).nAni;e.props.capture.enable&&e._aniIdx===n-1&&(e.mediaRecorder.stop(),e.props.toggleCapture());var t=(e._aniIdx+1)%n;e.aniIdx=t},e.updateAnimation=function(n,t){var a=t.code,i=t.timeScale;if(n.code!==a)return e.removeAnimation(),void e.addAnimation();n.timeScale!==i&&(e.mixer.timeScale=i)},e.captureAnimation=function(){if(e.chunks=[],e.videoStream=e.canvas.captureStream(30),!e.mediaRecorder){var n=e.props.capture.codec;e.mediaRecorder=new MediaRecorder(e.videoStream,{mimeType:n}),e.mediaRecorder.ondataavailable=function(n){return e.chunks.push(n.data)},e.mediaRecorder.onstop=function(){e.enableInput();var n=e.props.capture.format,t=new Blob(e.chunks,{type:"video/".concat(n)});Object(f.a)(t,"animation.".concat(n))}}e.disableInput("Recording"),e.beforeCaptureAnimation(),e.aniIdx=0,e.mediaRecorder.start()},e.beforeCaptureAnimation=function(){},e.everyAnimate=function(n){var t;if((null===(t=e.mixer)||void 0===t||t.update(n),e.faceChanges&&e.faceChanges.length)&&e.mixer.time>=e.faceChangeTime[0]){e.faceChangeTime.shift();var a=e.faceChanges.shift(),i=a.eyeIdx,o=a.mouthIdx;e.eyeIdx=i,e.mouthIdx=o}},e}return Object(c.a)(t,[{key:"aniIdx",set:function(e){this._aniIdx=e;var n=this.mixer;n.stopAllAction();var t=this.animations[e],a=n.clipAction(t),i=this.aniSettings[e],o=i.timeScale,r=i.repetitions,c=i.faceChanges,d=t.duration;a.setLoop(p.LoopRepeat,r),a.timeScale=o,a.time=0,this.faceChanges=Object(l.t)(c,r),this.faceChangeTime=this.faceChanges.map((function(e){return d*e.time/100})),n.setTime(0),a.play()}},{key:"eyeIdx",set:function(e){}},{key:"mouthIdx",set:function(e){}}]),t}(m.default);n.default=h}}]);
//# sourceMappingURL=60.01945c7d.chunk.js.map