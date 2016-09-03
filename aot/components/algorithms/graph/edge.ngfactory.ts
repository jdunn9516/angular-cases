/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../components/algorithms/graph/edge';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '@angular/common/src/directives/ng_style';
import * as import11 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import12 from '@angular/core/src/linker/element_ref';
var renderType_Edge_Host:import0.RenderComponentType = (null as any);
class _View_Edge_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Edge_0_4:import3.Edge;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Edge_Host0,renderType_Edge_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('edge',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Edge0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Edge_0_4 = new import3.Edge();
    this._appEl_0.initComponent(this._Edge_0_4,[],compView_0);
    compView_0.create(this._Edge_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Edge) && (0 === requestNodeIndex))) { return this._Edge_0_4; }
    return notFoundResult;
  }
}
function viewFactory_Edge_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Edge_Host === (null as any))) { (renderType_Edge_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_Edge_Host0(viewUtils,parentInjector,declarationEl);
}
export const EdgeNgFactory:import9.ComponentFactory<import3.Edge> = new import9.ComponentFactory<import3.Edge>('edge',viewFactory_Edge_Host0,import3.Edge);
const styles_Edge:any[] = [];
var renderType_Edge:import0.RenderComponentType = (null as any);
class _View_Edge0 extends import1.AppView<import3.Edge> {
  _el_0:any;
  _NgStyle_0_3:import10.NgStyle;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Edge0,renderType_Edge,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','edge');
    this._NgStyle_0_3 = new import10.NgStyle(this.parentInjector.get(import11.KeyValueDiffers),new import12.ElementRef(this._el_0),this.renderer);
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[this._el_0],[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.NgStyle) && (0 === requestNodeIndex))) { return this._NgStyle_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = this.context.style;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgStyle_0_3.ngStyle = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (!throwOnChange) { this._NgStyle_0_3.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_Edge0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Edge> {
  if ((renderType_Edge === (null as any))) { (renderType_Edge = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/algorithms/graph/edge.ts class Edge - inline template',0,import8.ViewEncapsulation.None,styles_Edge,{})); }
  return new _View_Edge0(viewUtils,parentInjector,declarationEl);
}