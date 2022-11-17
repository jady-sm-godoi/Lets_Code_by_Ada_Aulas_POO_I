class MyNumber extends Number {
  // num;
    constructor(num) {
      super(num)
      // this.num = num
    }
  
  //   primeiraLetraMaiuscula() {
  //     return `${this[0].toUpperCase()}${this.slice(1).toLowerCase()}`
  //   }
}

class StringMelhor extends String {
  palavra;
  constructor(dado){
    super()
    this.palavra = dado.toLowerCase()
  }

  primeiraLetraMaiuscula(){
      return this.palavra[0].toUpperCase() + this.palavra.substring(1) 
  }
}

// class StringMelhor extends String {
//   // constructor(str) {
//   //   super(str)
//   // }

//   primeiraLetraMaiuscula() {
//     return `${this[0].toUpperCase()}${this.slice(1).toLowerCase()}`
//   }
// }

const num = new MyNumber('12')
console.log(num.toFixed(2));
// console.log(typeof Number);
// console.log(str.primeiraLetraMaiuscula()) // Exemplo

// const outraStr = new StringMelhor('exmPLO')
// console.log(outraStr.primeiraLetraMaiuscula()) // Exemplo