/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/insertion-sort/insertion-sort';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_for';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import13 from '@angular/common/src/directives/ng_class';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/core/src/linker/element_ref';
var renderType_InsertionSort_Host:import0.RenderComponentType = (null as any);
class _View_InsertionSort_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _InsertionSort_0_4:import3.InsertionSort;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InsertionSort_Host0,renderType_InsertionSort_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('insertion-sort',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_InsertionSort0(this.viewUtils,this.injector(0),this._appEl_0);
    this._InsertionSort_0_4 = new import3.InsertionSort();
    this._appEl_0.initComponent(this._InsertionSort_0_4,[],compView_0);
    compView_0.create(this._InsertionSort_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.InsertionSort) && (0 === requestNodeIndex))) { return this._InsertionSort_0_4; }
    return notFoundResult;
  }
}
function viewFactory_InsertionSort_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_InsertionSort_Host === (null as any))) { (renderType_InsertionSort_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_InsertionSort_Host0(viewUtils,parentInjector,declarationEl);
}
export const InsertionSortNgFactory:import9.ComponentFactory<import3.InsertionSort> = new import9.ComponentFactory<import3.InsertionSort>('insertion-sort',viewFactory_InsertionSort_Host0,import3.InsertionSort);
const styles_InsertionSort:any[] = [];
var renderType_InsertionSort:import0.RenderComponentType = (null as any);
class _View_InsertionSort0 extends import1.AppView<import3.InsertionSort> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _el_3:any;
  _text_4:any;
  _anchor_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _TemplateRef_5_5:any;
  _NgFor_5_6:import10.NgFor;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InsertionSort0,renderType_InsertionSort,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'table',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','sort');
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'tbody',(null as any));
    this._el_3 = this.renderer.createElement(this._el_2,'tr',(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._anchor_5 = this.renderer.createTemplateAnchor(this._el_3,(null as any));
    this._appEl_5 = new import2.AppElement(5,3,this,this._anchor_5);
    this._TemplateRef_5_5 = new import11.TemplateRef_(this._appEl_5,viewFactory_InsertionSort1);
    this._NgFor_5_6 = new import10.NgFor(this._appEl_5.vcRef,this._TemplateRef_5_5,this.parentInjector.get(import12.IterableDiffers),this.ref);
    this._text_6 = this.renderer.createText(this._el_3,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_9,'style','margin-top: 10px;');
    this._text_10 = this.renderer.createText(this._el_9,'\n    ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_9,'button',(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'Sort list',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_11,'click',this.eventHandler(this._handle_click_11_0.bind(this)));
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._el_3,
      this._text_4,
      this._anchor_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (5 === requestNodeIndex))) { return this._TemplateRef_5_5; }
    if (((token === import10.NgFor) && (5 === requestNodeIndex))) { return this._NgFor_5_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.context.list.items;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_5_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_5_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_5_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_11_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.sortList()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_InsertionSort0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.InsertionSort> {
  if ((renderType_InsertionSort === (null as any))) { (renderType_InsertionSort = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/insertion-sort/insertion-sort.html',0,import8.ViewEncapsulation.None,styles_InsertionSort,{})); }
  return new _View_InsertionSort0(viewUtils,parentInjector,declarationEl);
}
class _View_InsertionSort1 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import13.NgClass;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_InsertionSort1,renderType_InsertionSort,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'td',(null as any));
    this._NgClass_0_3 = new import13.NgClass(this.parent.parentInjector.get(import12.IterableDiffers),this.parent.parentInjector.get(import14.KeyValueDiffers),new import15.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n            ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'span',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.$implicit.getClass();
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_0_3.ngClass = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgClass_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit.val,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_3,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_InsertionSort1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_InsertionSort1(viewUtils,parentInjector,declarationEl);
}