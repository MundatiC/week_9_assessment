// JavaScript program to find leap years in a given range:

function findLeapYears(startYear, endYear) {
    const leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYears.push(year);
      }
    }
    return leapYears;
  }
  
  // Example usage
  console.log(findLeapYears(2000, 2020)); // Output: [2000, 2004, 2008, 2012, 2016, 2020]
  