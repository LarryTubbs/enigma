/**
 * Enigma Settings
 * Stores global variables and machine settings
 */
class Enigma {

    constructor () {
        // Plaintext Alphabet
        this.plaintext = ".ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
        // Rotor Wiring
        this.arrRotors = new Array();
            this.arrRotors[1] = ".EKMFLGDQVZNTOWYHXUSPAIBRCJ";   // Rotor I
            this.arrRotors[2] = ".AJDKSIRUXBLHWTMCQGZNPYFVOE";   // Rotor II
            this.arrRotors[3] = ".BDFHJLCPRTXVZNYEIWGAKMUSQO";   // Rotor III
            this.arrRotors[4] = ".ESOVPZJAYQUIRHXLNFTGKDCMWB";   // Rotor IV
            this.arrRotors[5] = ".VZBRGITYUPSDNHLXAWMJQOFECK";   // Rotor V
            this.arrRotors[6] = ".JPGVOUMFYQBENHZRDKASXLICTW";   // Rotor VI
            this.arrRotors[7] = ".NZJHGRCXMYSWBOUFAIVLPEKQDT";   // Rotor VII
            this.arrRotors[8] = ".FKQHTLXOCBJSPDZRAMEWNIUYGV";   // Rotor VIII
            this.arrRotors["b"] = ".LEYJVCNIXWPBQMDRTAKZGFUHOS"; // M4 Greek Rotor "b" (beta)
            this.arrRotors["g"] = ".FSOKANUERHMBTIYCWLQPZXVGJD"; // M4 Greek Rotor "g" (gama)
    
        this.arrKnockpoints = new Array();
            this.arrKnockpoints[1] = new Array(17, 17); //   Q - one knockpoint (R I)
            this.arrKnockpoints[2] = new Array(5, 5);   //   E - one knockpoint (R II)
            this.arrKnockpoints[3] = new Array(22, 22); //   V - one knockpoint (R III)
            this.arrKnockpoints[4] = new Array(10, 10); //   J - one knockpoint (R IV)
            this.arrKnockpoints[5] = new Array(26, 26); //   Z - one knockpoint (R V)
            this.arrKnockpoints[6] = new Array(26, 13); // Z/M - two knockpoints (R VI)
            this.arrKnockpoints[7] = new Array(26, 13); // Z/M - two knockpoints (R VII)
            this.arrKnockpoints[8] = new Array(26, 13); // Z/M - two knockpoints (R VIII)
    
        // Reflectors "B" and "C" (inc M4 thin reflectors) Wiring
        this.arrReflector = new Array();
            this.arrReflector["b"] = ".YRUHQSLDPXNGOKMIEBFZCWVJAT";      // M3 B
            this.arrReflector["c"] = ".FVPJIAOYEDRZXWGCTKUQSBNMHL";      // M3 C
            this.arrReflector["b_thin"] = ".ENKQAUYWJICOPBLMDXZVFTHRGS"; // M4 thin B
            this.arrReflector["c_thin"] = ".RDOBJNTKVEHMLFCWZAXGYIPSUQ"; // M4 thin C
    
    }
}
