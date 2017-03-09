import { Component, ViewChildren } from '@angular/core';
import { Child } from './child';
var Parent = (function () {
    function Parent() {
    }
    Parent.prototype.updateViewChildren = function () {
        this.viewChildren.toArray().forEach(function (child) { return child.setTime(new Date().toTimeString()); });
    };
    return Parent;
}());
export { Parent };
Parent.decorators = [
    { type: Component, args: [{
                selector: 'parent',
                template: "<div>\n                <button (click)=\"updateViewChildren()\">Update Time via ViewChildren</button>\n                <child></child>\n                <child></child>\n              </div>"
            },] },
];
Parent.ctorParameters = function () { return []; };
Parent.propDecorators = {
    'viewChildren': [{ type: ViewChildren, args: [Child,] },],
};
