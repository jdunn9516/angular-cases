webpackJsonp([1],{110:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(111),i=function(){function t(t){this.isCurrent=!1,this.lineBreak=!1,this.placeHolder=!1,this.deleteChar=!1,this.isSelected=!1,t===n.a.enter?(this.value="\n",this.lineBreak=!0):-1===t?(this.value="",this.placeHolder=!0):t===n.a.backSpace?this.deleteChar=!0:this.value=String.fromCharCode(t).toLowerCase()}return t}()},111:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=function(){function t(){}return t}();n.spaceBar=32,n.enter=13,n.a=65,n.z=90,n.backSpace=8,n.zero=48,n.nine=57},112:function(t,e,r){"use strict";r.d(e,"a",function(){return v});var n=r(0),i=(r.n(n),r(159)),o=(r.n(i),r(85)),c=(r.n(o),r(76)),s=(r.n(c),r(163)),u=(r.n(s),r(87)),a=(r.n(u),r(166)),l=(r.n(a),r(164)),h=(r.n(l),r(86)),f=(r.n(h),r(110)),p=r(156),d=r(111),v=function(){function t(){this.currentDocument=new p.a}return t.prototype.isSuportedCharacter=function(t){return t>=d.a.a&&t<d.a.z||(t===d.a.enter||t===d.a.spaceBar||t===d.a.backSpace||t>=d.a.zero&&t<=d.a.nine)},t.prototype.getCharacterFromElement=function(t,e){var r=[].slice.call(this.editor.children).indexOf(t.target);return r>=0?{operation:e,character:this.currentDocument.characters[r],element:t}:null},t.prototype.ngOnInit=function(){var t=this;this.editor=document.getElementById("page"),this.keyUp=n.Observable.fromEvent(document,"keyup").filter(function(e){return t.isSuportedCharacter(e.which)}).map(function(t){return{operation:"modify",character:new f.a(t.which),element:t}}),this.mouseDown=n.Observable.fromEvent(this.editor,"mousedown").do(function(e){return t.currentDocument.clearSelection(t.getCharacterFromElement(e,"range"))}).flatMap(function(e){return n.Observable.fromEvent(t.editor,"mousemove")}).map(function(e){return t.getCharacterFromElement(e,"range")}).filter(function(t){return null!==t}).takeUntil(n.Observable.fromEvent(this.editor,"mouseup")).repeat(),this.click=n.Observable.fromEvent(this.editor,"click").map(function(e){return t.getCharacterFromElement(e,"select")}).filter(function(t){return null!==t}),this.keyDown=n.Observable.fromEvent(document,"keydown").filter(function(t){return t.which===d.a.spaceBar||t.which===d.a.backSpace}).map(function(t){return{element:t}}),this.keyUp.merge(this.click).merge(this.mouseDown).merge(this.keyDown).subscribe(function(e){t.currentDocument.processInput(e.character,e.operation),e.element.preventDefault()})},t}()},130:function(t,e,r){"use strict";function n(t){return c.E(0,[(t()(),c.F(0,null,null,3,"span",[],null,null,null,null,null)),c.G(278528,null,0,s.i,[c.w,c.x,c.H,c.I],{ngClass:[0,"ngClass"]},null),c.J(["currentChar","selectedChar"]),(t()(),c.K(null,["",""]))],function(t,e){t(e,1,0,t(e,2,0,e.context.$implicit.isCurrent,e.context.$implicit.isSelected))},function(t,e){t(e,3,0,e.context.$implicit.value)})}function i(t){return c.E(0,[(t()(),c.K(null,["\n    \n  "])),(t()(),c.F(0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),c.K(null,["Text editor based on Observables"])),(t()(),c.K(null,["\n\n  "])),(t()(),c.F(0,null,null,1,"div",[["class","alert alert-success"],["role","alert"]],null,null,null,null,null)),(t()(),c.K(null,["\n      Supports typing of letters and numbers. Basic text selection and cursor placement is also supported.\n  "])),(t()(),c.K(null,["\n\n  "])),(t()(),c.F(0,null,null,5,"div",[["class","editor"]],null,null,null,null,null)),(t()(),c.K(null,["\n  "])),(t()(),c.F(0,null,null,2,"div",[["class","page noselect"],["id","page"]],null,null,null,null,null)),(t()(),c.L(16777216,null,null,1,null,n)),c.G(802816,null,0,s.j,[c.M,c.N,c.w],{ngForOf:[0,"ngForOf"]},null),(t()(),c.K(null,["\n  "])),(t()(),c.K(null,["\n\n  "])),(t()(),c.F(0,null,null,2,"h4",[],null,null,null,null,null)),(t()(),c.F(0,null,null,1,"a",[["href","http://www.syntaxsuccess.com/viewarticle/observables-in-angular-2.0"]],null,null,null,null,null)),(t()(),c.K(null,["Read more here"]))],function(t,e){t(e,11,0,e.component.currentDocument.characters)},null)}function o(t){return c.E(0,[(t()(),c.F(0,null,null,1,"editor",[],null,null,null,i,l)),c.G(114688,null,0,u.a,[],null,null)],function(t,e){t(e,1,0)},null)}r.d(e,"a",function(){return h});var c=r(2),s=r(4),u=r(112),a=[],l=c.D({encapsulation:2,styles:a,data:{}}),h=c.O("editor",u.a,o,{},{},[])},140:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=function(){function t(){}return t}()},156:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r(110),i=function(){function t(){this.characters=[],this.firstSelectedCharacter=-1,this.currentChar=new n.a(-1),this.characters.push(this.currentChar),this.characters[0].isCurrent=!0}return t.prototype.deselectPreviousCharacter=function(){if(this.currentChar){var t=this.characters.indexOf(this.currentChar);this.characters[t].isCurrent=!1}},t.prototype.clearSelection=function(t){this.firstSelectedCharacter=-1,t&&(this.firstSelectedCharacter=this.characters.indexOf(t.character)),this.characters.forEach(function(t){return t.isSelected=!1})},t.prototype.edit=function(t,e){if(t.deleteChar){var r=this.characters.indexOf(this.currentChar);r>=1&&(this.characters.splice(r,1),this.characters.length>1?(this.characters[r-1].isCurrent=!0,this.currentChar=this.characters[r-1]):1===this.characters.length&&(this.characters[0].isCurrent=!0,this.currentChar=this.characters[0]))}else if(this.characters.splice(e,0,t),t.lineBreak){this.deselectPreviousCharacter();var i=new n.a(-1);this.characters.splice(e+1,0,i),this.placeCursor(i)}else this.placeCursor(t)},t.prototype.placeCursor=function(t){this.deselectPreviousCharacter();var e=this.characters.indexOf(t);this.characters[e].isCurrent=!0,this.currentChar=t},t.prototype.selectCharacter=function(t){for(var e=this.characters.indexOf(t),r=this.firstSelectedCharacter;r<=e;r++)this.characters[r].isSelected=!0},t.prototype.processInput=function(t,e){if("modify"===e){var r=this.characters.indexOf(this.currentChar);r<0&&(r=this.characters.length-1),this.edit(t,r+1)}"select"===e&&this.placeCursor(t),"range"===e&&this.selectCharacter(t)},t}()},159:function(t,e,r){"use strict";var n=r(0),i=r(169);n.Observable.fromEvent=i.fromEvent},163:function(t,e,r){"use strict";var n=r(0),i=r(37);n.Observable.prototype.filter=i.filter},164:function(t,e,r){"use strict";var n=r(0),i=r(172);n.Observable.prototype.repeat=i.repeat},166:function(t,e,r){"use strict";var n=r(0),i=r(174);n.Observable.prototype.takeUntil=i.takeUntil},167:function(t,e,r){"use strict";function n(t){return!!t&&"function"==typeof t.addListener&&"function"==typeof t.removeListener}function i(t){return!!t&&"function"==typeof t.on&&"function"==typeof t.off}function o(t){return!!t&&"[object NodeList]"===d.call(t)}function c(t){return!!t&&"[object HTMLCollection]"===d.call(t)}function s(t){return!!t&&"function"==typeof t.addEventListener&&"function"==typeof t.removeEventListener}var u=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},a=r(0),l=r(38),h=r(22),f=r(21),p=r(7),d=Object.prototype.toString,v=function(t){function e(e,r,n,i){t.call(this),this.sourceObj=e,this.eventName=r,this.selector=n,this.options=i}return u(e,t),e.create=function(t,r,n,i){return h.isFunction(n)&&(i=n,n=void 0),new e(t,r,i,n)},e.setupSubscription=function(t,r,u,a,l){var h;if(o(t)||c(t))for(var f=0,d=t.length;f<d;f++)e.setupSubscription(t[f],r,u,a,l);else if(s(t)){var v=t;t.addEventListener(r,u,l),h=function(){return v.removeEventListener(r,u)}}else if(i(t)){var b=t;t.on(r,u),h=function(){return b.off(r,u)}}else{if(!n(t))throw new TypeError("Invalid event target");var y=t;t.addListener(r,u),h=function(){return y.removeListener(r,u)}}a.add(new p.Subscription(h))},e.prototype._subscribe=function(t){var r=this.sourceObj,n=this.eventName,i=this.options,o=this.selector,c=o?function(){for(var e=[],r=0;r<arguments.length;r++)e[r-0]=arguments[r];var n=l.tryCatch(o).apply(void 0,e);n===f.errorObject?t.error(f.errorObject.e):t.next(n)}:function(e){return t.next(e)};e.setupSubscription(r,n,c,t,i)},e}(a.Observable);e.FromEventObservable=v},169:function(t,e,r){"use strict";var n=r(167);e.fromEvent=n.FromEventObservable.create},172:function(t,e,r){"use strict";function n(t){return void 0===t&&(t=-1),0===t?new c.EmptyObservable:t<0?this.lift(new s(-1,this)):this.lift(new s(t-1,this))}var i=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=r(1),c=r(17);e.repeat=n;var s=function(){function t(t,e){this.count=t,this.source=e}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.count,this.source))},t}(),u=function(t){function e(e,r,n){t.call(this,e),this.count=r,this.source=n}return i(e,t),e.prototype.complete=function(){if(!this.isStopped){var e=this,r=e.source,n=e.count;if(0===n)return t.prototype.complete.call(this);n>-1&&(this.count=n-1),r.subscribe(this._unsubscribeAndRecycle())}},e}(o.Subscriber)},174:function(t,e,r){"use strict";function n(t){return this.lift(new s(t))}var i=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=r(8),c=r(9);e.takeUntil=n;var s=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){return e.subscribe(new u(t,this.notifier))},t}(),u=function(t){function e(e,r){t.call(this,e),this.notifier=r,this.add(c.subscribeToResult(this,r))}return i(e,t),e.prototype.notifyNext=function(t,e,r,n,i){this.complete()},e.prototype.notifyComplete=function(){},e}(o.OuterSubscriber)},74:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),r.d(e,"TextEditorModuleNgFactory",function(){return h});var n=r(2),i=r(140),o=r(4),c=r(16),s=r(130),u=r(112),a=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},l=function(t){function e(e){return t.call(this,e,[s.a],[])||this}return a(e,t),Object.defineProperty(e.prototype,"_NgLocalization_3",{get:function(){return null==this.__NgLocalization_3&&(this.__NgLocalization_3=new o.a(this.parent.get(n.c))),this.__NgLocalization_3},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new o.b,this._RouterModule_1=new c.p(this.parent.get(c.q,null),this.parent.get(c.j,null)),this._TextEditorModule_2=new i.a,this._ROUTES_4=[[{path:"",component:u.a}]],this._TextEditorModule_2},e.prototype.getInternal=function(t,e){return t===o.b?this._CommonModule_0:t===c.p?this._RouterModule_1:t===i.a?this._TextEditorModule_2:t===o.h?this._NgLocalization_3:t===c.s?this._ROUTES_4:e},e.prototype.destroyInternal=function(){},e}(n.B),h=new n.C(l,i.a)},76:function(t,e,r){"use strict";var n=r(0),i=r(33);n.Observable.prototype.map=i.map},85:function(t,e,r){"use strict";var n=r(0),i=r(89);n.Observable.prototype.do=i._do,n.Observable.prototype._do=i._do},86:function(t,e,r){"use strict";var n=r(0),i=r(35);n.Observable.prototype.merge=i.merge},87:function(t,e,r){"use strict";var n=r(0),i=r(19);n.Observable.prototype.mergeMap=i.mergeMap,n.Observable.prototype.flatMap=i.mergeMap},89:function(t,e,r){"use strict";function n(t,e,r){return this.lift(new c(t,e,r))}var i=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)},o=r(1);e._do=n;var c=function(){function t(t,e,r){this.nextOrObserver=t,this.error=e,this.complete=r}return t.prototype.call=function(t,e){return e.subscribe(new s(t,this.nextOrObserver,this.error,this.complete))},t}(),s=function(t){function e(e,r,n,i){t.call(this,e);var c=new o.Subscriber(r,n,i);c.syncErrorThrowable=!0,this.add(c),this.safeSubscriber=c}return i(e,t),e.prototype._next=function(t){var e=this.safeSubscriber;e.next(t),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.next(t)},e.prototype._error=function(t){var e=this.safeSubscriber;e.error(t),e.syncErrorThrown?this.destination.error(e.syncErrorValue):this.destination.error(t)},e.prototype._complete=function(){var t=this.safeSubscriber;t.complete(),t.syncErrorThrown?this.destination.error(t.syncErrorValue):this.destination.complete()},e}(o.Subscriber)}});
//# sourceMappingURL=bundle-webpack-lazy-loading.js.map