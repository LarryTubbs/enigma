
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
        this.position = this.safetyPos(this.position);
        // console.log('Rotor ' + this.name + ' position: ' + this.position);
        return;
    }
    
    rotateDown() {
        this.position--;
        this.position = this.safetyPos(this.position)
        return;
    }

    mapLetter(inputLetter, reverse) {
        // given an input letter, return the ouput letter for the current rotor position

        var mappedChar = "";
        var outputPos;

        var inputPos = this.plaintext.indexOf(inputLetter);
        
        // adjust for position
        var adjPos = inputPos + (this.position - 1);
        adjPos = this.safetyPos(adjPos);

        // adjust for Ring Setting
        adjPos = adjPos - (this.ringSetting - 1);
        adjPos = this.safetyPos(adjPos);
             
        if (! reverse ) {
            mappedChar =  this.wireing.charAt(adjPos);
            outputPos =  this.plaintext.indexOf(mappedChar);
        } else {
            mappedChar = this.plaintext.charAt(adjPos);
            outputPos = this.wireing.indexOf(mappedChar);
        };

        // readjust for Ring Setting
        outputPos = outputPos + (this.ringSetting - 1);
        outputPos = this.safetyPos(outputPos);

        // readjust for position 
        outputPos = outputPos - (this.position - 1);
        outputPos = this.safetyPos(outputPos);
        
        console.log('Rotor ' + this.name + ', Position ' + this.position + ', In ' + inputLetter + ', Out ' + this.plaintext.charAt(outputPos));
        return this.plaintext.charAt(outputPos);
        
    }

    mapLetterReflector(inputLetter) {
        var inputPos = this.plaintext.indexOf(inputLetter);
        return this.wireing.charAt(inputPos);   
    }

    safetyPos(position) {
        if (position > 26) {
            return position - 26;
        } else if (position < 1) {
            return 26 + position;
        } else {
            return position;
        };
    }
}