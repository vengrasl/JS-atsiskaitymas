/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


class Calculator {
  static sum(numberOne, numberTwo){
    return numberOne + numberTwo;
  }
  static subtraction(numberOne, numberTwo){
    return numberOne - numberTwo;
  }
  static multiplication(numberOne, numberTwo){
    return numberOne * numberTwo;
  }
  static division(numberOne, numberTwo){
    return numberOne / numberTwo;
  }
}

console.log(Calculator.sum(1, 2));
console.log(Calculator.subtraction(1, 2));
console.log(Calculator.multiplication(1, 2));
console.log(Calculator.division(1, 2));