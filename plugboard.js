class Plugboard {
    constructor (pairs) {
        this.wiring = ".";
        this.plaintext = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < pairs.length; i++) {
            var s = pairs[i].toLocaleUpperCase();
            // each pair should be exactly two letters
            if (s.length == 2) {
                // ensure letters are alphabetic only and upper case
                if (!this.plaintext.includes(s.charAt(0)) && !this.plaintext.includes(s.charAt(1)) && !s.includes(".") ) {
                    throw(new Error('you can only map alphabetic letters into the plugboard'));
                }
                // ensure letters don't match each other
                if (s.charAt(0) == s.charAt(1)) {
                    // invalid plug entry error
                    throw(new Error('letters can not be mapped to themselves: ' + s));
                };

                // ensure letters aren't already in wiring
                if (this.wiring.includes(s.charAt(0)) || this.wiring.includes(s.charAt(1)) ) {
                    // invalid plug entry error
                    throw(new Error('letters can not be mapped more than once: ' + s));
                }

                // add letters to wiring
                this.wiring = this.wiring + s;
            } else 
            if (s.length == 0) {
                // detected empty pair, stop
                break;
            } else {
                // unexpected error occurred
                throw(new Error('invalid plug entry: ' + s));
            }
        };
       
    }

    mapLetter(inputLetter) {
        inputLetter = inputLetter.toLocaleUpperCase();
        if (this.wiring.length <= 1) {
            return inputLetter;
        }

        var letterPos = this.wiring.indexOf(inputLetter);
        if (letterPos > 0) {
            if (letterPos % 2 == 0) {
                // paired letter is one back
                return this.wiring.charAt(letterPos - 1);                
            } else {
                // paired letter is one forward
                return this.wiring.charAt(letterPos + 1);
            };
        } else { 
            return inputLetter;
        }
    }

}