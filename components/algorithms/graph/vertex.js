var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var Vertex = (function () {
    function Vertex(elementRef) {
        this.coordinates = { x: null, y: null };
        this.elementRef = elementRef;
    }
    Vertex.prototype.setCoordinates = function (event) {
        var element = jQuery(this.elementRef.nativeElement).find('.vertex');
        var offset = element.offset();
        this.coordinates.x = offset.left;
        this.coordinates.y = offset.top;
        event.coordinates = this.coordinates;
        event.coordinates.dynamicLocation = this.value.toLowerCase();
        event.vertex = true;
    };
    Vertex = __decorate([
        core_1.Component({
            selector: 'vertex',
            inputs: ['value'],
            template: '<div class="vertex" (click)="setCoordinates($event)"><span class="vertex-text">{{value}}</span></div>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Vertex);
    return Vertex;
})();
exports.Vertex = Vertex;
