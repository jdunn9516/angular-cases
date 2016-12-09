var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Insertion } from '../../algorithms/insertion-sort';
export let InsertionSort = class InsertionSort {
    constructor() {
        this.list = new ValList();
        this.list.items = [
            new ListItem(5),
            new ListItem(33),
            new ListItem(5),
            new ListItem(5),
            new ListItem(2),
            new ListItem(-2),
            new ListItem(4),
            new ListItem(88),
            new ListItem(6),
            new ListItem(400),
            new ListItem(1),
            new ListItem(58),
            new ListItem(30)
        ];
    }
    sortList() {
        Insertion.sort(this.list);
    }
};
InsertionSort = __decorate([
    Component({
        selector: 'insertion-sort',
        inputs: ['list: list'],
        templateUrl: './insertion-sort.html'
    }), 
    __metadata('design:paramtypes', [])
], InsertionSort);
class ValList {
    setCurrent(item) {
        this.clearAll();
        item.current = true;
    }
    clearAll() {
        this.items.forEach(i => i.current = false);
    }
}
class ListItem {
    constructor(val) {
        this.val = val;
        this.current = false;
    }
    getClass() {
        if (this.current) {
            return 'current-item';
        }
        return null;
    }
}
