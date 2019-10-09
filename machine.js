class Machine {
    constructor (type, reflector, rRotor, mRotor, lRotor, zRotor, plugboard) {
        this.type = type;
        this.reflector = reflector;
        this.rRotor = rRotor;
        this.mRotor = mRotor;
        this.lRotor = lRotor;
        this.zRotor = zRotor;
        this.plugboard = plugboard;
        this.plaintext = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    evaluate(inputLetter) {
        // rotate the rotors
        this.rotateRotors();

        // map the input letter through the plugboard
        var l = this.plugboard.mapLetter(inputLetter);

        // map the resulting letter into the rotors
        l = this.rRotor.mapLetter(l);
        l = this.mRotor.mapLetter(l);
        l = this.lRotor.mapLetter(l);
        if (this.zRotor) {
            l = this.zRotor.mapLetter(l);
        }
        l = this.reflector.mapLetterReflector(l);
        if (this.zRotor) {
            l = this.zRotor.mapLetter(l, true);
        }
        l = this.lRotor.mapLetter(l, true);
        l = this.mRotor.mapLetter(l, true);
        l = this.rRotor.mapLetter(l, true);

        // map back through the plugboard
        var l = this.plugboard.mapLetter(l);

        // return the resulting encoded letter
        return l;
    }

    rotateRotors() {
        // if middle rotor on notch, rotate all three rotors
        if (this.mRotor.onNotch()) {
            this.lRotor.rotateUp();
            this.mRotor.rotateUp();
            this.rRotor.rotateUp();
        } else 
            // if right rotor on notch, rotate right and middle rotors
            if (this.rRotor.onNotch()) {
                this.mRotor.rotateUp();
                this.rRotor.rotateUp();
        } else {
            // else rotate only right rotor
            this.rRotor.rotateUp();
        }
    }
}