(this["webpackJsonpdl-model"]=this["webpackJsonpdl-model"]||[]).push([[53,60],{172:function(e,t,n){"use strict";function a(e,t){var n=URL.createObjectURL(e),a=document.createElement("a");a.style.display="none",a.href=n,a.download=t,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(n),document.body.removeChild(a)}n.d(t,"a",(function(){return a}))},196:function(e,t,n){"use strict";n.r(t),n.d(t,"AniViewer",(function(){return h}));var a=n(35),o=n.n(a),i=n(46),r=n(2),c=n(5),u=n(26),d=n(3),s=n(4),p=n(238),l=n(1),m=n(45),f=n(172),h=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return(e=t.call.apply(t,[this].concat(c))).afterMainModelLoad=function(){e.saveMainModelInitState(),e.addAnimation()},e.afterMainModelUpdate=function(){e.saveMainModelInitState(),e.addAnimation()},e.updateModel=function(){var t=Object(i.a)(o.a.mark((function t(n,a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.updateMainModel(n.model,a.model);case 2:e.updateAnimation(n.animation,a.animation);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.otherUpdate=function(t,n){n.capture.enable&&!t.capture.enable&&e.captureAnimation()},e.saveMainModelInitState=function(){var t=e.models.main;t.userData.initPos=t.position.clone(),t.userData.initRot=t.rotation.clone()},e.resetFace=function(){var t=e.props.model,n=t.eyeIdx,a=t.mouthIdx;e.eyeIdx=n,e.mouthIdx=a},e.beforeAddAni=function(){e.resetFace()},e.addAnimation=Object(i.a)(o.a.mark((function t(){var n,a,i,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.beforeAddAni(),n=e.props.animation,a=n.code,i=n.timeScale,a){t.next=4;break}return t.abrupt("return");case 4:return e.disableInput(),r=e.models.main,c=Object(m.a)(a),e.nAni=c.length,r.mixer=new l.AnimationMixer(r),e.mixer=r.mixer,e._aniIdx=0,r.mixer.timeScale=i,r.mixer.addEventListener("finished",e.playNextAni),e.aniSettings=c,t.next=16,Object(m.w)(c);case 16:e.animations=t.sent,e.aniIdx=0,e.enableInput();case 19:case"end":return t.stop()}}),t)}))),e.removeAnimation=function(){var t,n,a=e.models.main;null===(t=a.mixer)||void 0===t||null===(n=t.stopAllAction)||void 0===n||n.call(t);var o=a.userData,i=o.initPos,r=o.initRot;a.position.copy(i),a.rotation.copy(r),e.mixer=null,e.animations=[],e.aniSettings=[]},e.playNextAni=function(){var t=Object(u.a)(e).nAni;e.props.capture.enable&&e._aniIdx===t-1&&(e.mediaRecorder.stop(),e.props.toggleCapture());var n=(e._aniIdx+1)%t;e.aniIdx=n},e.updateAnimation=function(t,n){var a=n.code,o=n.timeScale;if(t.code!==a)return e.removeAnimation(),void e.addAnimation();t.timeScale!==o&&(e.mixer.timeScale=o)},e.captureAnimation=function(){if(e.chunks=[],e.videoStream=e.canvas.captureStream(30),!e.mediaRecorder){var t=e.props.capture.codec;e.mediaRecorder=new MediaRecorder(e.videoStream,{mimeType:t}),e.mediaRecorder.ondataavailable=function(t){return e.chunks.push(t.data)},e.mediaRecorder.onstop=function(){e.enableInput();var t=e.props.capture.format,n=new Blob(e.chunks,{type:"video/".concat(t)});Object(f.a)(n,"animation.".concat(t))}}e.disableInput("Recording"),e.beforeCaptureAnimation(),e.aniIdx=0,e.mediaRecorder.start()},e.beforeCaptureAnimation=function(){},e.everyAnimate=function(t){var n;if((null===(n=e.mixer)||void 0===n||n.update(t),e.faceChanges&&e.faceChanges.length)&&e.mixer.time>=e.faceChangeTime[0]){e.faceChangeTime.shift();var a=e.faceChanges.shift(),o=a.eyeIdx,i=a.mouthIdx;e.eyeIdx=o,e.mouthIdx=i}},e}return Object(c.a)(n,[{key:"aniIdx",set:function(e){this._aniIdx=e;var t=this.mixer;t.stopAllAction();var n=this.animations[e],a=t.clipAction(n),o=this.aniSettings[e],i=o.timeScale,r=o.repetitions,c=o.faceChanges,u=n.duration;a.setLoop(l.LoopRepeat,r),a.timeScale=i,a.time=0,this.faceChanges=Object(m.t)(c,r),this.faceChangeTime=this.faceChanges.map((function(e){return u*e.time/100})),t.setTime(0),a.play()}},{key:"eyeIdx",set:function(e){}},{key:"mouthIdx",set:function(e){}}]),n}(p.default);t.default=h},478:function(e,t,n){"use strict";n.r(t),n.d(t,"AdvViewer",(function(){return h}));var a=n(10),o=n(35),i=n.n(o),r=n(46),c=n(2),u=n(5),d=n(3),s=n(4),p=n(196),l=n(13),m=n(45),f=["Right","Left"],h=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).afterMainModelLoad=function(){o.saveMainModelInitState(),o.initFace(),o.addWeapons(),o.addAnimation()},o.beforeMainModelUpdate=function(){o.detachAllWeapons()},o.afterMainModelUpdate=function(){o.saveMainModelInitState(),o.initFace(),o.attachAllWeapons(),o.addAnimation()},o.updateModel=function(){var e=Object(r.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==n){e.next=2;break}return e.abrupt("return");case 2:return a=t.model,r=n.model,e.next=6,o.updateMainModel(a,r);case 6:a.id===r.id&&o.updateFace(a,r),o.updateWeapons(a,r),o.updateAnimation(t.animation,n.animation);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o.initFace=function(){var e=o.props.model.id;o._eyeIdx=o._mouthIdx=l.c;var t={mouthTexture:e,mouthIdx:l.c,eyeTexture:e,eyeIdx:l.c};o.updateFace(t,o.props.model)},o.addWeapons=Object(r.a)(i.a.mark((function e(){var t,n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.getWeaponInfo(),e.next=3,o.initWeaponLoad();case 3:return t=e.sent,n=Object(a.a)(t,2),r=n[0],c=n[1],o.models=Object.assign(o.models,{weaponRight:r,weaponLeft:c}),e.next=10,o.initAllWeapons();case 10:o.attachAllWeapons();case 11:case"end":return e.stop()}}),e)}))),o.getWeaponInfo=function(){var e=o.props.model,t=e.weaponRight,n=e.weaponLeft,a={weaponRight:Object(m.b)(t),weaponLeft:Object(m.b)(n)};o.modelInfo=Object.assign(o.modelInfo,a)},o.initWeaponLoad=function(){var e,t,n=null===(e=o.modelInfo.weaponRight)||void 0===e?void 0:e.modelPath,a=Object(m.x)(n),i=null===(t=o.modelInfo.weaponLeft)||void 0===t?void 0:t.modelPath,r=Object(m.x)(i);return Promise.all([a,r])},o.initAllWeapons=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=o.matType,f.forEach((function(e){var n="weapon".concat(e),a=o.models[n];if(a){var i=o.modelInfo[n],r=i.texturePath,c=i.flipped;Object(m.l)(a,{materialType:t,texturePath:r}),c&&(a.rotation.y+=Math.PI);var u=o.props.outline;o.outlines[n]=Object(m.o)(a,u)}}));case 2:case"end":return e.stop()}}),e)}))),o.attachWeapon=function(e,t){var n="jWeapon".concat(t[0]);o.models.main.traverse((function(t){t.name.includes(n)&&0===t.children.length&&t.add(e)}))},o.attachAllWeapons=function(){f.forEach((function(e){var t="weapon".concat(e),n=o.models[t];n&&o.attachWeapon(n,e)}))},o.detachWeapon=function(e){var t="weapon".concat(e),n=o.models[t];n&&n.parent.remove(n)},o.detachAllWeapons=function(){return f.forEach((function(e){return o.detachWeapon(e)}))},o.updateEyeTexture=function(e,t){var n=t.eyeTexture,a=e.eyeTexture;if(n===a)return!1;var i=o.matType;Object(m.d)(o.models.main,{materialType:i,textureId:n});var r=Object(m.j)(n,a);return Object(m.c)(o.models.main,r),!0},o.updateMouthTexture=function(e,t){var n=t.mouthTexture,a=e.mouthTexture;if(n===a)return!1;var i=o.matType;Object(m.g)(o.models.main,{materialType:i,textureId:n});var r=Object(m.j)(n,a);return Object(m.f)(o.models.main,r),!0},o.updateFaceTexture=function(e,t){var n=o.updateEyeTexture(e,t),a=o.updateMouthTexture(e,t);if(n||a){var i=o.models.main;o.applyNewModelMat(i)}},o.updateFaceOffset=function(e){var t=e.eyeIdx,n=e.mouthIdx;o.eyeIdx=t,o.mouthIdx=n},o.updateFace=function(e,t){o.updateFaceTexture(e,t),o.updateFaceOffset(t)},o.updateWeapons=function(){var e=Object(r.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.disableInput(),f.forEach(function(){var e=Object(r.a)(i.a.mark((function e(a){var r,c,u,d,s,p,l,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r="weapon".concat(a),t[r]!==n[r]){e.next=3;break}return e.abrupt("return");case 3:if(o.detachWeapon(a),Object(m.q)(o.models[r]),n[r]){e.next=10;break}return o.models[r]=null,o.modelInfo[r]="",o.outlines[r]=null,e.abrupt("return");case 10:return o.modelInfo[r]=Object(m.b)(n[r]),c=o.modelInfo[r],u=c.modelPath,d=c.texturePath,s=c.flipped,e.next=14,Object(m.x)(u);case 14:p=e.sent,o.models[r]=p,l=o.matType,Object(m.l)(p,{materialType:l,texturePath:d}),o.applyNewModelMat(p),s&&(p.rotation.y+=Math.PI),f=o.props.outline,o.outlines[r]=Object(m.o)(p,f),o.attachWeapon(p,a);case 23:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o.enableInput();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o._eyeIdx=o._mouthIdx=l.c,o}return Object(u.a)(n,[{key:"eyeIdx",set:function(e){if(e){var t=this._eyeIdx;if(e!==t){var n=Object(m.i)(e,t);Object(m.c)(this.models.main,n),this._eyeIdx=e}}}},{key:"mouthIdx",set:function(e){if(e){var t=this._mouthIdx;if(e!==t){var n=Object(m.i)(e,t);Object(m.f)(this.models.main,n),this._mouthIdx=e}}}}]),n}(p.default);t.default=h}}]);
//# sourceMappingURL=53.75a358e2.chunk.js.map