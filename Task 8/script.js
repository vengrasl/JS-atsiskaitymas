/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


class Calculator {
  constructor(numberOne, numberTwo){
    this.numberOne = numberOne;
    this.numberTwo = numberTwo;
  }
  sum(){
    return this.numberOne + this.numberTwo;
  }
  subtraction(){
    return this.numberOne - this.numberTwo;
  }
  multiplication(){
    return this.numberOne * this.numberTwo;
  }
  division(){
    return this.numberOne / this.numberTwo;
  }
}

let calculator = new Calculator(1, 2);

console.log(calculator.sum());
console.log(calculator.subtraction());
console.log(calculator.multiplication());
console.log(calculator.division());