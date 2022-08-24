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
            let utfShifted = 0;
            let utfNumber = string.toUpperCase().charCodeAt(i); //Loops through each place in the string, capitalizes it, then gets the UTF code for the capitalized letter
            if(utfNumber === 32 || utfNumber < 65 || utfNumber > 90){
                newString += String.fromCharCode(utfNumber);
                continue;
            }//Skip the code that comes up for spaces or special characters
            

            utfShifted = utfNumber + this._numberShift; //Creating the shifted utfCode

            if(utfShifted > 90){
                utfShifted -= this._numberShift;//Need to reset the utfShifted so that it will loop around to the beginning of the alphabet
                for(let j = 1; j <= this._numberShift; j++){
                    utfShifted += 1;
                    if(utfShifted === 91) //Check if the utf Code has gone past Z
                    {
                        utfShifted = 65;
                    }
                }  
            }
            newString += String.fromCharCode(utfShifted);
        }
        console.log(newString);
    }

    decrypt(string){ 
        
    }
}
    

const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
