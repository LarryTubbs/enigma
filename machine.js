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

        // map the input letter through the plugboard

        // map the resulting letter into the rotors
        var l = this.rRotor.mapLetter(inputLetter);
        l = this.mRotor.mapLetter(l);
        l = this.lRotor.mapLetter(l);
        if (this.zRotor) {
            l = this.zRotor.mapLetter(l);
        }
        l = this.reflector.mapLetter(l);
        if (this.zRotor) {
            l = this.zRotor.mapLetter(l, true);
        }
        l = this.lRotor.mapLetter(l, true);
        l = this.mRotor.mapLetter(l, true);
        l = this.rRotor.mapLetter(l, true);

        // map back through the plugboard
        
        // return the resulting encoded letter
        return l;
    }
}