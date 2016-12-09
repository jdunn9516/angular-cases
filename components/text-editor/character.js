import { KeyMap } from './key-map';
export class Character {
    constructor(keyCode) {
        this.isCurrent = false;
        this.lineBreak = false;
        this.placeHolder = false;
        this.deleteChar = false;
        this.isSelected = false;
        if (keyCode === KeyMap.enter) {
            this.value = '\n';
            this.lineBreak = true;
        }
        else if (keyCode === -1) {
            this.value = '';
            this.placeHolder = true;
        }
        else if (keyCode === KeyMap.backSpace) {
            this.deleteChar = true;
        }
        else {
            this.value = String.fromCharCode(keyCode).toLowerCase();
        }
    }
}
