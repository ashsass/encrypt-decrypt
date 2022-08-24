class ShiftCipher{
    constructor(numberShift){
      this._numberShift = numberShift;
    }
  
    get numberShift(){
      return this._numberShift;
    }
  
    encrypt(string){
      let encryptedString = '';
      let placeholder = string.toUpperCase().charCodeAt(0);
      encryptedString.fromCharCode();
    console.log(encryptedString);
    }
  
    decrypt(string){
      
    }
  }
  
  let cipher = new ShiftCipher(2);
  cipher.encrypt('a');