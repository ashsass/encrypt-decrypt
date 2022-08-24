class ShiftCipher{
    constructor(numberShift){
        this._numberShift = numberShift;
    }

    get numberShift(){
        return this._numberShift;
    }

    encrypt(string){
        let newString = ''; //Creates an empty string to return the encrypted version
        let placeholder = string.toUpperCase().charCodeAt(0);
        newString = String.fromCharCode(placeholder);
        
        console.log(newString);
    }

    decrypt(string){
        
    }
    }

    let cipher = new ShiftCipher(2);
    cipher.encrypt('a');