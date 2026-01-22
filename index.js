//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

const temps = [
  { day: 1, value: 32, unit: "F" },
  { day: 2, value: 25, unit: "C" },
  { day: 3, value: 70, unit: "F" },
  { day: 4, value: 18, unit: "C" },
  { day: 5, value: 80, unit: "F" },
  { day: 6, value: 15, unit: "C" },
  { day: 7, value: 72, unit: "F" },
  { day: 8, value: 28, unit: "C" },
  { day: 9, value: 68, unit: "F" },
  { day: 10, value: 20, unit: "C" },
  { day: 11, value: 75, unit: "F" },
  { day: 12, value: 23, unit: "C" },
  { day: 13, value: 82, unit: "F" },
  { day: 14, value: 30, unit: "C" },
  { day: 15, value: 65, unit: "F" },
  { day: 16, value: 22, unit: "C" },
  { day: 17, value: 77, unit: "F" },
  { day: 18, value: 26, unit: "C" },
  { day: 19, value: 78, unit: "F" },
  { day: 20, value: 24, unit: "C" },
  { day: 21, value: 73, unit: "F" },
  { day: 22, value: 21, unit: "C" },
  { day: 23, value: 79, unit: "F" },
  { day: 24, value: 27, unit: "C" },
  { day: 25, value: 71, unit: "F" },
  { day: 26, value: 19, unit: "C" },
  { day: 27, value: 74, unit: "F" },
  { day: 28, value: 17, unit: "C" },
  { day: 29, value: 76, unit: "F" },
  { day: 30, value: 29, unit: "C" }
]; 

const tempsBoth = temps.map(t => {
    let celsius, fahrenheit;

  if (t.unit === "F") {
    fahrenheit = t.value;
    celsius = (t.value - 32) * 5 / 9;
  } else {
    celsius = t.value;
    fahrenheit = (t.value * 9 / 5) + 32;
  }

    return { day: t.day, celsius, fahrenheit };
});

let tot_temperature_in_celsius = 0;
let tot_temperature_in_fahrenheit = 0;

for (const t of tempsBoth) {
    tot_temperature_in_fahrenheit += t.fahrenheit;
    tot_temperature_in_celsius += t.celsius;
}

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / tempsBoth.length;
const avg_temperature_in_celsius = tot_temperature_in_celsius / tempsBoth.length;

console.log({
  'Total Temperatures in Fahrenheit': tot_temperature_in_fahrenheit,
  'Total Temperatures in Celsius': tot_temperature_in_celsius 
});

console.log({
  'Average Temperatures in Fahrenheit': avg_temperature_in_fahrenheit,
  'Average Temperatures in Celsius': avg_temperature_in_celsius
});

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};