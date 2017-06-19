webpackJsonp([1],{100:function(t,e,r){"use strict";var n=r(0),i=r(101);n.Observable.fromEvent=i.fromEvent},101:function(t,e,r){"use strict";var n=r(102);e.fromEvent=n.FromEventObservable.create},102:function(t,e,r){"use strict";function n(t){return!!t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}function i(t){return!!t&&"function"==typeof t.on&&"function"==typeof t.off}function o(t){return!!t&&"[object NodeList]"===d.call(t)}function s(t){return!!t&&"[object HTMLCollection]"===d.call(t)}function c(t){return!!t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}var u=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},l=r(0),a=r(35),h=r(21),p=r(22),f=r(6),d=Object.prototype.toString,v=function(t){function e(e,r,n,i){t.call(this),this.sourceObj=e,this.eventName=r,this.selector=n,this.options=i}return u(e,t),e.create=function(t,r,n,i){return h.isFunction(n)&&(i=n,n=void 0),new e(t,r,i,n)},e.setupSubscription=function(t,r,u,l,a){var h;if(o(t)||s(t))for(var p=0,d=t.length;p<d;p++)e.setupSubscription(t[p],r,u,l,a);else if(c(t)){var v=t;t.addEventListener(r,u,a),h=function(){return v.removeEventListener(r,u)}}else if(i(t)){var b=t;t.on(r,u),h=function(){return b.off(r,u)}}else{if(!n(t))throw new TypeError("Invalid event target");var y=t;t.addListener(r,u),h=function(){return y.removeListener(r,u)}}l.add(new f.Subscription(h))},e.prototype._subscribe=function(t){var r=this.sourceObj,n=this.eventName,i=this.options,o=this.selector,s=o?function(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];var n=a.tryCatch(o).apply(void 0,e);n===p.errorObject?t.error(p.errorObject.e):t.next(n)}:function(e){return t.next(e)};e.setupSubscription(r,n,s,t,i)},e}(l.Observable);e.FromEventObservable=v},103:function(t,e,r){"use strict";var n=r(0),i=r(37);n.Observable.prototype.filter=i.filter},104:function(t,e,r){"use strict";var n=r(0),i=r(105);n.Observable.prototype.takeUntil=i.takeUntil},105:function(t,e,r){"use strict";function n(t){return this.lift(new c(t))}var i=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=r(8),s=r(9);e.takeUntil=n;var c=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.notifier))},t}(),u=function(t){function e(e,r){t.call(this,e),this.notifier=r,this.add(s.subscribeToResult(this,r))}return i(e,t),e.prototype.notifyNext=function(t,e,r,n,i){this.complete()},e.prototype.notifyComplete=function(){},e}(o.OuterSubscriber)},106:function(t,e,r){"use strict";var n=r(0),i=r(107);n.Observable.prototype.repeat=i.repeat},107:function(t,e,r){"use strict";function n(t){return void 0===t&&(t=-1),0===t?new s.EmptyObservable:t<0?this.lift(new c(-1,this)):this.lift(new c(t-1,this))}var i=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=r(1),s=r(17);e.repeat=n;var c=function(){function t(t,e){this.count=t,this.source=e}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.count,this.source))},t}(),u=function(t){function e(e,r,n){t.call(this,e),this.count=r,this.source=n}return i(e,t),e.prototype.complete=function(){if(!this.isStopped){var e=this,r=e.source,n=e.count;if(0===n)return t.prototype.complete.call(this);n>-1&&(this.count=n-1),r.subscribe(this._unsubscribeAndRecycle())}},e}(o.Subscriber)},70:function(t,e,r){"use strict";function n(t){return O._37(0,[(t()(),O._15(0,null,null,3,"span",[],null,null,null,null,null)),O._14(278528,null,0,w.h,[O.y,O.z,O.n,O.N],{ngClass:[0,"ngClass"]},null),O._31(["currentChar","selectedChar"]),(t()(),O._35(null,["",""]))],function(t,e){t(e,1,0,t(e,2,0,e.context.$implicit.isCurrent,e.context.$implicit.isSelected))},function(t,e){t(e,3,0,e.context.$implicit.value)})}function i(t){return O._37(0,[(t()(),O._35(null,["\n    \n  "])),(t()(),O._15(0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),O._35(null,["Text editor based on Observables"])),(t()(),O._35(null,["\n\n  "])),(t()(),O._15(0,null,null,1,"div",[["class","alert alert-success"],["role","alert"]],null,null,null,null,null)),(t()(),O._35(null,["\n      Supports typing of letters and numbers. Basic text selection and cursor placement is also supported.\n  "])),(t()(),O._35(null,["\n\n  "])),(t()(),O._15(0,null,null,5,"div",[["class","editor"]],null,null,null,null,null)),(t()(),O._35(null,["\n  "])),(t()(),O._15(0,null,null,2,"div",[["class","page noselect"],["id","page"]],null,null,null,null,null)),(t()(),O._11(16777216,null,null,1,null,n)),O._14(802816,null,0,w.i,[O.Z,O.W,O.y],{ngForOf:[0,"ngForOf"]},null),(t()(),O._35(null,["\n  "])),(t()(),O._35(null,["\n\n  "])),(t()(),O._15(0,null,null,2,"h4",[],null,null,null,null,null)),(t()(),O._15(0,null,null,1,"a",[["href","http://www.syntaxsuccess.com/viewarticle/observables-in-angular-2.0"]],null,null,null,null,null)),(t()(),O._35(null,["Read more here"]))],function(t,e){t(e,11,0,e.component.currentDocument.characters)},null)}function o(t){return O._37(0,[(t()(),O._15(0,null,null,1,"editor",[],null,null,null,i,g)),O._14(114688,null,0,_,[],null,null)],function(t,e){t(e,1,0)},null)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(){}return t}(),c=function(){function t(){}return t}();c.spaceBar=32,c.enter=13,c.a=65,c.z=90,c.backSpace=8,c.zero=48,c.nine=57;var u=function(){function t(t){this.isCurrent=!1,this.lineBreak=!1,this.placeHolder=!1,this.deleteChar=!1,this.isSelected=!1,t===c.enter?(this.value="\n",this.lineBreak=!0):-1===t?(this.value="",this.placeHolder=!0):t===c.backSpace?this.deleteChar=!0:this.value=String.fromCharCode(t).toLowerCase()}return t}(),l=function(){function t(){this.characters=[],this.firstSelectedCharacter=-1,this.currentChar=new u(-1),this.characters.push(this.currentChar),this.characters[0].isCurrent=!0}return t.prototype.deselectPreviousCharacter=function(){if(this.currentChar){var t=this.characters.indexOf(this.currentChar);this.characters[t].isCurrent=!1}},t.prototype.clearSelection=function(t){this.firstSelectedCharacter=-1,t&&(this.firstSelectedCharacter=this.characters.indexOf(t.character)),this.characters.forEach(function(t){return t.isSelected=!1})},t.prototype.edit=function(t,e){if(t.deleteChar){var r=this.characters.indexOf(this.currentChar);r>=1&&(this.characters.splice(r,1),this.characters.length>1?(this.characters[r-1].isCurrent=!0,this.currentChar=this.characters[r-1]):1===this.characters.length&&(this.characters[0].isCurrent=!0,this.currentChar=this.characters[0]))}else if(this.characters.splice(e,0,t),t.lineBreak){this.deselectPreviousCharacter();var n=new u(-1);this.characters.splice(e+1,0,n),this.placeCursor(n)}else this.placeCursor(t)},t.prototype.placeCursor=function(t){this.deselectPreviousCharacter();var e=this.characters.indexOf(t);this.characters[e].isCurrent=!0,this.currentChar=t},t.prototype.selectCharacter=function(t){for(var e=this.characters.indexOf(t),r=this.firstSelectedCharacter;r<=e;r++)this.characters[r].isSelected=!0},t.prototype.processInput=function(t,e){if("modify"===e){var r=this.characters.indexOf(this.currentChar);r<0&&(r=this.characters.length-1),this.edit(t,r+1)}"select"===e&&this.placeCursor(t),"range"===e&&this.selectCharacter(t)},t}(),a=r(0),h=(r.n(a),r(100)),p=(r.n(h),r(81)),f=(r.n(p),r(73)),d=(r.n(f),r(103)),v=(r.n(d),r(77)),b=(r.n(v),r(104)),y=(r.n(b),r(106)),m=(r.n(y),r(78)),_=(r.n(m),function(){function t(){this.currentDocument=new l}return t.prototype.isSuportedCharacter=function(t){return t>=c.a&&t<c.z||(t===c.enter||t===c.spaceBar||t===c.backSpace||t>=c.zero&&t<=c.nine)},t.prototype.getCharacterFromElement=function(t,e){var r=[].slice.call(this.editor.children).indexOf(t.target);return r>=0?{operation:e,character:this.currentDocument.characters[r],element:t}:null},t.prototype.ngOnInit=function(){var t=this;this.editor=document.getElementById("page"),this.keyUp=a.Observable.fromEvent(document,"keyup").filter(function(e){return t.isSuportedCharacter(e.which)}).map(function(t){return{operation:"modify",character:new u(t.which),element:t}}),this.mouseDown=a.Observable.fromEvent(this.editor,"mousedown").do(function(e){return t.currentDocument.clearSelection(t.getCharacterFromElement(e,"range"))}).flatMap(function(e){return a.Observable.fromEvent(t.editor,"mousemove")}).map(function(e){return t.getCharacterFromElement(e,"range")}).filter(function(t){return null!==t}).takeUntil(a.Observable.fromEvent(this.editor,"mouseup")).repeat(),this.click=a.Observable.fromEvent(this.editor,"click").map(function(e){return t.getCharacterFromElement(e,"select")}).filter(function(t){return null!==t}),this.keyDown=a.Observable.fromEvent(document,"keydown").filter(function(t){return t.which===c.spaceBar||t.which===c.backSpace}).map(function(t){return{element:t}}),this.keyUp.merge(this.click).merge(this.mouseDown).merge(this.keyDown).subscribe(function(e){t.currentDocument.processInput(e.character,e.operation),e.element.preventDefault()})},t}()),O=r(3),w=r(4),C=[],g=O._13({encapsulation:2,styles:C,data:{}}),E=O._12("editor",_,o,{},{},[]);r.d(e,"TextEditorModuleNgFactory",function(){return M});var S=r(3),x=r(4),k=r(16),L=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},j=function(t){function e(e){return t.call(this,e,[E],[])||this}return L(e,t),Object.defineProperty(e.prototype,"_NgLocalization_3",{get:function(){return null==this.__NgLocalization_3&&(this.__NgLocalization_3=new x.k(this.parent.get(S.A))),this.__NgLocalization_3},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new x.c,this._RouterModule_1=new k.l(this.parent.get(k.r,null),this.parent.get(k.j,null)),this._TextEditorModule_2=new s,this._ROUTES_4=[[{path:"",component:_}]],this._TextEditorModule_2},e.prototype.getInternal=function(t,e){return t===x.c?this._CommonModule_0:t===k.l?this._RouterModule_1:t===s?this._TextEditorModule_2:t===x.l?this._NgLocalization_3:t===k.h?this._ROUTES_4:e},e.prototype.destroyInternal=function(){},e}(S._10),M=new S.C(j,s)},73:function(t,e,r){"use strict";var n=r(0),i=r(32);n.Observable.prototype.map=i.map},77:function(t,e,r){"use strict";var n=r(0),i=r(20);n.Observable.prototype.mergeMap=i.mergeMap,n.Observable.prototype.flatMap=i.mergeMap},78:function(t,e,r){"use strict";var n=r(0),i=r(34);n.Observable.prototype.merge=i.merge},81:function(t,e,r){"use strict";var n=r(0),i=r(82);n.Observable.prototype.do=i._do,n.Observable.prototype._do=i._do},82:function(t,e,r){"use strict";function n(t,e,r){return this.lift(new s(t,e,r))}var i=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=r(1);e._do=n;var s=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e.subscribe(new c(t,this.nextOrObserver,this.error,this.complete))},t}(),c=function(t){function e(e,r,n,i){t.call(this,e);var s=new o.Subscriber(r,n,i);s.syncErrorThrowable=!0,this.add(s),this.safeSubscriber=s}return i(e,t),e.prototype._next=function(t){var e=this.safeSubscriber;e.next(t),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.next(t)},e.prototype._error=function(t){var e=this.safeSubscriber;e.error(t),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.error(t)},e.prototype._complete=function(){var t=this.safeSubscriber;t.complete(),t.syncErrorThrown?this.destination.error(t.syncErrorValue):this.destination.complete()},e}(o.Subscriber)}});
//# sourceMappingURL=bundle-webpack-lazy-loading.js.map