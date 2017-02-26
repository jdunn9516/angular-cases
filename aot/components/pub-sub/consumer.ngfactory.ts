/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core';
import * as import1 from '@angular/common';
import * as import2 from '../../../components/pub-sub/consumer';
import * as import3 from '../../../components/pub-sub/pub-sub-service';
const styles_Consumer:any[] = ([] as any[]);
export const RenderType_Consumer:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: styles_Consumer,
  data: {animation: ([] as any[])}
}
);
function View_Consumer_2():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),7,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n                ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n                ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),[
      '',
      ''
    ]
    ),
    import0.ɵtextDef((null as any),['\n            '])
  ]
  ,(null as any),(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = view.context.$implicit.firstName;
    check(view,3,0,currVal_0);
    const currVal_1:any = view.context.$implicit.lastName;
    check(view,6,0,currVal_1);
  });
}
function View_Consumer_1():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),27,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Processed Customers']),
    import0.ɵtextDef((null as any),['\n\n    ']),
      import0.ɵelementDef(0,(null as any),(null as any),18,'table',[[
        'class',
        'table'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n        ']),
    import0.ɵelementDef(0,(null as any),(null as any),9,'thead',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n            ']),
    import0.ɵelementDef(0,(null as any),(null as any),6,'tr',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n                ']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['First Name']),
    import0.ɵelementDef(0,(null as any),(null as any),1,'td',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Last Name']),
    import0.ɵtextDef((null as any),['\n            ']),
    import0.ɵtextDef((null as any),['\n        ']),
    import0.ɵtextDef((null as any),['\n        ']),
    import0.ɵelementDef(0,(null as any),(null as any),4,'tbody',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any)),
    import0.ɵtextDef((null as any),['\n            ']),
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_Consumer_2),
    import0.ɵdirectiveDef(12,(null as any),0,import1.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import0.ɵtextDef((null as any),['\n        ']),
    import0.ɵtextDef((null as any),['\n    ']),
    import0.ɵtextDef((null as any),['\n\n    ']),
      import0.ɵelementDef(0,(null as any),(null as any),1,'button',([] as any[]),(null as any),[[
        (null as any),
        'click'
      ]
    ],(view,eventName,$event) => {
      var allowDefault:boolean = true;
      var comp:any = view.component;
      if (('click' === eventName)) {
        const pd_0:any = ((<any>comp.stopProcessing()) !== false);
        allowDefault = (pd_0 && allowDefault);
      }
      return allowDefault;
    },(null as any),(null as any)),
    import0.ɵtextDef((null as any),['Stop Processing']),
    import0.ɵtextDef((null as any),['\n'])
  ]
  ,(check,view) => {
    var comp:any = view.component;
    const currVal_0:any = comp.processed;
    check(view,21,0,currVal_0);
  },(null as any));
}
export function View_Consumer_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵanchorDef(256,(null as any),(null as any),1,(null as any),View_Consumer_1),
    import0.ɵdirectiveDef(0,(null as any),0,import1.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any))
  ]
  ,(check,view) => {
    var comp:import2.Consumer = view.component;
    const currVal_0:any = (comp.processed.length > 0);
    check(view,1,0,currVal_0);
  },(null as any));
}
const RenderType_Consumer_Host:import0.RendererTypeV2 = import0.ɵcreateRendererTypeV2({
  encapsulation: 2,
  styles: ([] as any[]),
  data: {animation: ([] as any[])}
}
);
function View_Consumer_Host_0():import0.ɵViewDefinition {
  return import0.ɵviewDef(0,[
    import0.ɵelementDef(0,(null as any),(null as any),1,'consumer',([] as any[]),(null as any),(null as any),(null as any),View_Consumer_0,RenderType_Consumer),
    import0.ɵdirectiveDef(1025,(null as any),0,import2.Consumer,[import3.PubSubService],(null as any),(null as any))
  ]
  ,(check,view) => {
    check(view,1,0);
  },(null as any));
}
export const ConsumerNgFactory:import0.ComponentFactory<import2.Consumer> = import0.ɵcreateComponentFactory('consumer',import2.Consumer,View_Consumer_Host_0);