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
            let utfNumber = string.toUpperCase().charCodeAt(i); //Loops through each place in the string, capitalizes it, then gets the UTF code for the capitalized letter
           

            if(utfNumber === 32){
                newString += String.fromCharCode(utfNumber);
                continue;
            }//Skip the code that comes up for space

            else{
                newString += String.fromCharCode(utfNumber + this._numberShift);
            }

            
        }
        console.log(newString);
    }

    decrypt(string){
        
    }
    }

    let cipher = new ShiftCipher(2);
    cipher.encrypt('ashlyn sassaman');