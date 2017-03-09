import { Component } from '@angular/core';
import { Contact } from './contact';
var ContactList = (function () {
    function ContactList() {
        this.contacts = [];
    }
    ContactList.prototype.addContact = function (name, phone) {
        var contact = new Contact(name.value, phone.value);
        this.contacts.push(contact);
        name.value = '';
        phone.value = '';
    };
    ContactList.prototype.removeContact = function (contact) {
        var index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
    };
    return ContactList;
}());
export { ContactList };
ContactList.decorators = [
    { type: Component, args: [{
                selector: 'contact-list',
                templateUrl: './contact-list.html'
            },] },
];
ContactList.ctorParameters = function () { return []; };
