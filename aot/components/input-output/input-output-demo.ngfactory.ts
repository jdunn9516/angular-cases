/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../components/input-output/input-output-demo';
import * as import2 from './input-output.ngfactory';
import * as import3 from '../../../components/input-output/input-output';
const styles_InputOutputDemo:any[] = ([] as any[]);
export const RenderType_InputOutputDemo:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_InputOutputDemo,
  data: {}
}
);
export function View_InputOutputDemo_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.InputOutputDemo = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.update()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Update'])),
    (l()(),import0.ɵted((null as any),['\n              '])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),2,'input-output',[
      [
        'fixedValue',
        'another hard coded value'
      ]
      ,
      [
        'plain',
        'just a simple attribute'
      ]

    ]
      ,(null as any),[[
        (null as any),
        'stringChanged'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import1.InputOutputDemo = v.component;
      if (('stringChanged' === en)) {
        const pd_0:any = ((<any>co.myStringChanged($event)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import2.View_InputOutput_0,import2.RenderType_InputOutput)),
    import0.ɵdid(114688,(null as any),0,import3.InputOutput,[
      import0.ElementRef,
      [
        8,
        'just a simple attribute'
      ]

    ]
    ,{
      counter: [
        0,
        'counter'
      ]
      ,
      fixedValue: [
        1,
        'fixedValue'
      ]
      ,
      sum: [
        2,
        'sum'
      ]
      ,
      headline: [
        3,
        'headline'
      ]
      ,
      growingString: [
        4,
        'growingString'
      ]

    }
    ,{stringChanged: 'stringChanged'}),
    (l()(),import0.ɵted((null as any),['\n              ']))
  ]
  ,(ck,v) => {
    var co:import1.InputOutputDemo = v.component;
    const currVal_0:any = co.count;
    const currVal_1:any = 'another hard coded value';
    const currVal_2:any = co.runningTotal;
    const currVal_3:any = co.myTitle;
    const currVal_4:any = co.myString;
    ck(v,4,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4);
  },(null as any));
}
function View_InputOutputDemo_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'ng-component',([] as any[]),(null as any),(null as any),(null as any),View_InputOutputDemo_0,RenderType_InputOutputDemo)),
    import0.ɵdid(49152,(null as any),0,import1.InputOutputDemo,([] as any[]),(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const InputOutputDemoNgFactory:import0.ComponentFactory<import1.InputOutputDemo> = import0.ɵccf('ng-component',import1.InputOutputDemo,View_InputOutputDemo_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL3Rvci9EZXZlbG9wbWVudC9hbmd1bGFyLTItc2FtcGxlcy9jb21wb25lbnRzL2lucHV0LW91dHB1dC9pbnB1dC1vdXRwdXQtZGVtby5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy90b3IvRGV2ZWxvcG1lbnQvYW5ndWxhci0yLXNhbXBsZXMvY29tcG9uZW50cy9pbnB1dC1vdXRwdXQvaW5wdXQtb3V0cHV0LWRlbW8udHMiLCJuZzovLy9Vc2Vycy90b3IvRGV2ZWxvcG1lbnQvYW5ndWxhci0yLXNhbXBsZXMvY29tcG9uZW50cy9pbnB1dC1vdXRwdXQvaW5wdXQtb3V0cHV0LWRlbW8udHMuSW5wdXRPdXRwdXREZW1vLmh0bWwiLCJuZzovLy9Vc2Vycy90b3IvRGV2ZWxvcG1lbnQvYW5ndWxhci0yLXNhbXBsZXMvY29tcG9uZW50cy9pbnB1dC1vdXRwdXQvaW5wdXQtb3V0cHV0LWRlbW8udHMuSW5wdXRPdXRwdXREZW1vX0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGJ1dHRvbiAoY2xpY2spPVwidXBkYXRlKClcIj5VcGRhdGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGlucHV0LW91dHB1dCBwbGFpbj1cImp1c3QgYSBzaW1wbGUgYXR0cmlidXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhlZFZhbHVlPVwiYW5vdGhlciBoYXJkIGNvZGVkIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RyaW5nQ2hhbmdlZCk9XCJteVN0cmluZ0NoYW5nZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW215U3VtXT1cInJ1bm5pbmdUb3RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvdW50ZXJdPVwiY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtoZWFkbGluZV09XCJteVRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3Jvd2luZ1N0cmluZ109XCJteVN0cmluZ1wiPlxuICAgICAgICAgICAgICA8L2lucHV0LW91dHB1dD4iLCI8bmctY29tcG9uZW50PjwvbmctY29tcG9uZW50PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQVE7UUFBQTtRQUFBO01BQUE7TUFBUjtJQUFBO0lBQTJCO0lBQWU7SUFDNUI7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BRWM7UUFBQTtRQUFBO01BQUE7TUFGZDtJQUFBO2dCQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBTXlDOzs7O0lBRjNCO0lBSEE7SUFFQTtJQUVBO0lBQ0E7SUFOZCxTQUljLFVBSEEsVUFFQSxVQUVBLFVBQ0EsU0FOZDs7Ozs7SUNEZDtnQkFBQTs7OzsifQ==
