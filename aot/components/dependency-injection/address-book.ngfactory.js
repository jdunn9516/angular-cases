import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../components/dependency-injection/address-book-service';
import * as import4 from '../../../components/dependency-injection/address-book';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from '../../../components/dependency-injection/address-book-title-service';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
var renderType_AddressBook_Host = null;
class _View_AddressBook_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressBook_Host0, renderType_AddressBook_Host, import7.ViewType.HOST, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('address-book', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AddressBook0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AddressBookService_0_4 = new import3.AddressBookService(this.parentInjector.get(import9.Http));
        this._AddressBook_0_5 = new import4.AddressBook(this._AddressBookService_0_4, this.parentInjector.get(import10.AddressBookTitleService));
        this._appEl_0.initComponent(this._AddressBook_0_5, [], compView_0);
        compView_0.create(this._AddressBook_0_5, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AddressBookService) && (0 === requestNodeIndex))) {
            return this._AddressBookService_0_4;
        }
        if (((token === import4.AddressBook) && (0 === requestNodeIndex))) {
            return this._AddressBook_0_5;
        }
        return notFoundResult;
    }
}
function viewFactory_AddressBook_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AddressBook_Host === null)) {
        (renderType_AddressBook_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_AddressBook_Host0(viewUtils, parentInjector, declarationEl);
}
export const AddressBookNgFactory = new import12.ComponentFactory('address-book', viewFactory_AddressBook_Host0, import4.AddressBook);
const styles_AddressBook = [];
var renderType_AddressBook = null;
class _View_AddressBook0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressBook0, renderType_AddressBook, import7.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'div', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'h1', null);
        this._text_3 = this.renderer.createText(this._el_2, 'Dependency Injection', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'h2', null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n\n    ', null);
        this._el_8 = this.renderer.createElement(this._el_0, 'table', null);
        this.renderer.setElementAttribute(this._el_8, 'class', 'table');
        this._text_9 = this.renderer.createText(this._el_8, '\n        ', null);
        this._el_10 = this.renderer.createElement(this._el_8, 'tbody', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_10, null);
        this._appEl_11 = new import2.AppElement(11, 10, this, this._anchor_11);
        this._TemplateRef_11_5 = new import14.TemplateRef_(this._appEl_11, viewFactory_AddressBook1);
        this._NgFor_11_6 = new import13.NgFor(this._appEl_11.vcRef, this._TemplateRef_11_5, this.parentInjector.get(import15.IterableDiffers), this.ref);
        this._text_12 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n', null);
        this._text_14 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_15 = this.renderer.createElement(parentRenderNode, 'h4', null);
        this._el_16 = this.renderer.createElement(this._el_15, 'a', null);
        this.renderer.setElementAttribute(this._el_16, 'href', 'http://www.syntaxsuccess.com/viewarticle/dependency-injection-in-angular-2.0');
        this._text_17 = this.renderer.createText(this._el_16, 'Read more here', null);
        this._expr_0 = import8.UNINITIALIZED;
        this._expr_1 = import8.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._el_10,
            this._anchor_11,
            this._text_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._el_16,
            this._text_17
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import13.NgFor) && (11 === requestNodeIndex))) {
            return this._NgFor_11_6;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        changes = null;
        const currVal_1 = this.context.result.people;
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._NgFor_11_6.ngForOf = currVal_1;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import8.SimpleChange(this._expr_1, currVal_1);
            this._expr_1 = currVal_1;
        }
        if ((changes !== null)) {
            this._NgFor_11_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_11_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_0 = import5.interpolate(1, '', this.context.title, '');
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_6, currVal_0);
            this._expr_0 = currVal_0;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
export function viewFactory_AddressBook0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AddressBook === null)) {
        (renderType_AddressBook = viewUtils.createRenderComponentType('/Users/tor/Development/angular-2-samples/components/dependency-injection/address-book.html', 0, import11.ViewEncapsulation.None, styles_AddressBook, {}));
    }
    return new _View_AddressBook0(viewUtils, parentInjector, declarationEl);
}
class _View_AddressBook1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AddressBook1, renderType_AddressBook, import7.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import8.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'tr', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = this.renderer.createElement(this._el_0, 'td', null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n        ', null);
        this._expr_0 = import8.UNINITIALIZED;
        this._expr_1 = import8.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ], [], []);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_0 = import5.interpolate(1, '', this.context.$implicit.name, '');
        if (import5.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setText(this._text_3, currVal_0);
            this._expr_0 = currVal_0;
        }
        const currVal_1 = import5.interpolate(1, '', this.context.$implicit.address, '');
        if (import5.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_6, currVal_1);
            this._expr_1 = currVal_1;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
}
function viewFactory_AddressBook1(viewUtils, parentInjector, declarationEl) {
    return new _View_AddressBook1(viewUtils, parentInjector, declarationEl);
}
