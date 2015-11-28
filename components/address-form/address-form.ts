function zipValidator(zip) {

    var valid = /^\d{5}$/.test(zip.value);

    if(valid){
        return null;
    }

    return {"invalidZip":true};
}



import {Component, FORM_DIRECTIVES, FormBuilder, CORE_DIRECTIVES,
        Validators, NgFormModel, ControlGroup, Host}
from 'angular2/angular2';

@Component({
    selector: 'address-form',
    directives:[FORM_DIRECTIVES,NgFormModel],
    templateUrl: './components/address-form/address-form.html',
    providers: [FormBuilder,NgFormModel,CORE_DIRECTIVES]
})

export class AddressForm {

    form:ControlGroup;
    formDir:NgFormModel;

    constructor(formDir: NgFormModel, fb: FormBuilder) {

        this.formDir = formDir;

        this.form = fb.group({
            "firstName": ['', Validators.required],
            "zip": ['', Validators.compose([zipValidator])],

        });
    }

    test(){
        var a = this.form;
    }

}