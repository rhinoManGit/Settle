!function(){function j(m,p){function n(i,a){return function(){return i.apply(a,arguments)}}var q;if(p=p||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=p.touchBoundary||10,this.layer=m,this.tapDelay=p.tapDelay||200,this.tapTimeout=p.tapTimeout||700,!j.notNeeded(m)){for(var k=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],l=this,t=0,v=k.length;v>t;t++){l[k[t]]=n(l[k[t]],l)}f&&(m.addEventListener("mouseover",this.onMouse,!0),m.addEventListener("mousedown",this.onMouse,!0),m.addEventListener("mouseup",this.onMouse,!0)),m.addEventListener("click",this.onClick,!0),m.addEventListener("touchstart",this.onTouchStart,!1),m.addEventListener("touchmove",this.onTouchMove,!1),m.addEventListener("touchend",this.onTouchEnd,!1),m.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(m.removeEventListener=function(s,e,r){var a=Node.prototype.removeEventListener;"click"===s?a.call(m,s,e.hijacked||e,r):a.call(m,s,e,r)},m.addEventListener=function(s,e,r){var a=Node.prototype.addEventListener;"click"===s?a.call(m,s,e.hijacked||(e.hijacked=function(i){i.propagationStopped||e(i)}),r):a.call(m,s,e,r)}),"function"==typeof m.onclick&&(q=m.onclick,m.addEventListener("click",function(a){q(a)},!1),m.onclick=null)}}var c=navigator.userAgent.indexOf("Windows Phone")>=0,f=navigator.userAgent.indexOf("Android")>0&&!c,g=/iP(ad|hone|od)/.test(navigator.userAgent)&&!c,d=g&&/OS 4_\d(_\d)?/.test(navigator.userAgent),h=g&&/OS [6-7]_\d/.test(navigator.userAgent),b=navigator.userAgent.indexOf("BB10")>0;j.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled){return !0}break;case"input":if(g&&"file"===a.type||a.disabled){return !0}break;case"label":case"iframe":case"video":return !0}return/\bneedsclick\b/.test(a.className)},j.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return !0;case"select":return !f;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return !1}return !a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},j.prototype.sendClick=function(l,a){var i,k;document.activeElement&&document.activeElement!==l&&document.activeElement.blur(),k=a.changedTouches[0],i=document.createEvent("MouseEvents"),i.initMouseEvent(this.determineEventType(l),!0,!0,window,1,k.screenX,k.screenY,k.clientX,k.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=!0,l.dispatchEvent(i)},j.prototype.determineEventType=function(a){return f&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},j.prototype.focus=function(i){var a;g&&i.setSelectionRange&&0!==i.type.indexOf("date")&&"time"!==i.type&&"month"!==i.type?(a=i.value.length,i.setSelectionRange(a,a)):i.focus()},j.prototype.updateScrollParent=function(k){var a,i;if(a=k.fastClickScrollParent,!a||!a.contains(k)){i=k;do{if(i.scrollHeight>i.offsetHeight){a=i,k.fastClickScrollParent=i;break}i=i.parentElement}while(i)}a&&(a.fastClickLastScrollTop=a.scrollTop)},j.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},j.prototype.onTouchStart=function(l){var a,i,k;if(l.targetTouches.length>1){return !0}if(a=this.getTargetElementFromEventTarget(l.target),i=l.targetTouches[0],g){if(k=window.getSelection(),k.rangeCount&&!k.isCollapsed){return !0}if(!d){if(i.identifier&&i.identifier===this.lastTouchIdentifier){return l.preventDefault(),!1}this.lastTouchIdentifier=i.identifier,this.updateScrollParent(a)}}return this.trackingClick=!0,this.trackingClickStart=l.timeStamp,this.targetElement=a,this.touchStartX=i.pageX,this.touchStartY=i.pageY,l.timeStamp-this.lastClickTime<this.tapDelay&&l.preventDefault(),!0},j.prototype.touchHasMoved=function(k){var a=k.changedTouches[0],i=this.touchBoundary;return Math.abs(a.pageX-this.touchStartX)>i||Math.abs(a.pageY-this.touchStartY)>i?!0:!1},j.prototype.onTouchMove=function(a){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},j.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},j.prototype.onTouchEnd=function(p){var m,i,k,o,q,n=this.targetElement;if(!this.trackingClick){return !0}if(p.timeStamp-this.lastClickTime<this.tapDelay){return this.cancelNextClick=!0,!0}if(p.timeStamp-this.trackingClickStart>this.tapTimeout){return !0}if(this.cancelNextClick=!1,this.lastClickTime=p.timeStamp,i=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,h&&(q=p.changedTouches[0],n=document.elementFromPoint(q.pageX-window.pageXOffset,q.pageY-window.pageYOffset)||n,n.fastClickScrollParent=this.targetElement.fastClickScrollParent),k=n.tagName.toLowerCase(),"label"===k){if(m=this.findControl(n)){if(this.focus(n),f){return !1}n=m}}else{if(this.needsFocus(n)){return p.timeStamp-i>100||g&&window.top!==window&&"input"===k?(this.targetElement=null,!1):(this.focus(n),this.sendClick(n,p),g&&"select"===k||(this.targetElement=null,p.preventDefault()),!1)}}return g&&!d&&(o=n.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop)?!0:(this.needsClick(n)||(p.preventDefault(),this.sendClick(n,p)),!1)},j.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},j.prototype.onMouse=function(a){return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},j.prototype.onClick=function(i){var a;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===i.target.type&&0===i.detail?!0:(a=this.onMouse(i),a||(this.targetElement=null),a)},j.prototype.destroy=function(){var a=this.layer;f&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},j.notNeeded=function(n){var a,l,k,m;if("undefined"==typeof window.ontouchstart){return !0}if(l=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!f){return !0}if(a=document.querySelector("meta[name=viewport]")){if(-1!==a.content.indexOf("user-scalable=no")){return !0}if(l>31&&document.documentElement.scrollWidth<=window.outerWidth){return !0}}}if(b&&(k=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),k[1]>=10&&k[2]>=3&&(a=document.querySelector("meta[name=viewport]")))){if(-1!==a.content.indexOf("user-scalable=no")){return !0}if(document.documentElement.scrollWidth<=window.outerWidth){return !0}}return"none"===n.style.msTouchAction||"manipulation"===n.style.touchAction?!0:(m=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],m>=27&&(a=document.querySelector("meta[name=viewport]"),a&&(-1!==a.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===n.style.touchAction||"manipulation"===n.style.touchAction?!0:!1)},j.attach=function(a,i){return new j(a,i)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return j}):"undefined"!=typeof module&&module.exports?(module.exports=j.attach,module.exports.FastClick=j):window.FastClick=j}();