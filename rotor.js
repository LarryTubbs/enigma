
class Rotor {
    constructor (name, wireing, ringSetting, position, notches) {
        this.name = name;
        this.ringSetting = ringSetting;
        this.wireing = wireing;
        this.position = position;
        this.notches = notches;
        this.plaintext = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    onNotch() {
        if (this.notches.includes(this.position)) {
            return true;
        } else {
            return false;
        };
    }

    rotateUp() {
        this.position++;
        if (this.position > 26) {
            this.position = 0;
        }
        return;
    }
    
    rotateDown() {
        this.position--;
        if (this.position < 1) {
            this.position = 26;
        }
        return;
    }

    mapLetter(inputLetter, reverse) {
        // given an input letter, return the ouput letter for the current rotor position

        if (! reverse ) {
            var inputPos = this.plaintext.indexOf(inputLetter);
            return this.wireing.charAt(inputPos);
        } else {
            var inputPos = this.wireing.indexOf(inputLetter);
            return this.plaintext.charAt(inputPos);
        }
        
    }
}