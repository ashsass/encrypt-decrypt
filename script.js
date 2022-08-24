class ShiftCipher{
    constructor(numberShift){
        this._numberShift = numberShift;
    }

    get numberShift(){
        return this._numberShift;
    }

    encrypt(string){
        let newString = ''; //Creates an empty string to return the encrypted version
        

        for(let i = 0; i < string.length; i++){
            let placeholder = string.toUpperCase().charCodeAt(i); 
            newString += String.fromCharCode(placeholder);
        }
        console.log(newString);
    }

    decrypt(string){
        
    }
    }

    let cipher = new ShiftCipher(2);
    cipher.encrypt('ashlyn sassaman');