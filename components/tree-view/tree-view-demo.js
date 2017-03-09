import { Component } from '@angular/core';
import { Directory } from './directory';
var TreeViewDemo = (function () {
    function TreeViewDemo() {
        this.loadDirectories();
    }
    TreeViewDemo.prototype.loadDirectories = function () {
        var fall2014 = new Directory('Fall 2014', [], ['image1.jpg', 'image2.jpg', 'image3.jpg']);
        var summer2014 = new Directory('Summer 2014', [], ['image10.jpg', 'image20.jpg', 'image30.jpg']);
        var pics = new Directory('Pictures', [summer2014, fall2014], []);
        var music = new Directory('Music', [], ['song1.mp3', 'song2.mp3']);
        this.directories = [pics, music];
    };
    return TreeViewDemo;
}());
export { TreeViewDemo };
TreeViewDemo.decorators = [
    { type: Component, args: [{
                template: '<h1>Recursive TreeView</h1><tree-view [directories]="directories"></tree-view>' +
                    '          <h4><a href="http://www.syntaxsuccess.com/viewarticle/recursive-treeview-in-angular-2.0">Read more here</a></h4>'
            },] },
];
TreeViewDemo.ctorParameters = function () { return []; };
