/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */


class Movie {
  constructor(title, director, budget){
    this.title = title;
    this.director = director;
    this.budget = budget;
  }
  wasExpensive(){
    if (this.budget > 100000000){
      return true;
    } else{
      return false;
    }
  }
}

let movie = new Movie ('filmo pavadinimas', 'režisierius', 10000000000);
console.log(movie.wasExpensive())