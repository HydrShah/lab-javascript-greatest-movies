// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
const directors = movies
    .filter((movie) => movie.director)
    .map((movie) => movie.director);
  const uniqueDirectors = directors.filter((elem, i, arr) => arr.indexOf(elem) === i);
  
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(someMovies) {
  return someMovies.filter(
    (eachMovie) =>
      eachMovie.director === "Steven Spielberg" &&
      eachMovie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(lotsOfMovies) {}

let total = lotsOfMovies.reduce((a, b) => {
  if (b.rate) {
    return a + b.rate;
  } else {
    return a;
  }
}, 0);



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(someMovies) {
  let drMovies = someMovies.filter((eachMovie) =>
    eachMovie.genre.includes("Drama")
  );
  return ratesAverage(drMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(lotsOfMovies) {
  let newArray = [...lotsOfMovies];
  newArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(lotsOfMovies) {
  return [...lotsOfMovies]
    .sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    })
    .map((eachMovie) => eachMovie.title)
    .slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let newCentArray = movies.map((oneMovie) => {
    let newMovie = {};
    newMovie.title = oneMovie.title;
    newMovie.year = oneMovie.year;
    newMovie.director = oneMovie.director;
    newMovie.duration = convertDuration(oneMovie.duration);
    newMovie.genre = oneMovie.genre;
    newMovie.rate = oneMovie.rate;

    return newMovie;
  });

  return newCentArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(lotsOfMovies) {
  if (!lotsOfMovies.length) return null;

  let masterObject = {};

  lotsOfMovies.forEach((eachMovie) => {
    if (!masterObject[eachMovie.year]) {
      masterObject[eachMovie.year] = [eachMovie];
    } else {
      masterObject[eachMovie.year].push(eachMovie);
    }
  });

  let highest = 0;
  let theActualYear;
  for (let theYear in masterObject) {
    if (ratesAverage(masterObject[theYear]) > highest) {
      highest = ratesAverage(masterObject[theYear]);
      theActualYear = theYear;
    }
  }
  return `The best year was ${theActualYear} with an average rate of ${highest}`;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
