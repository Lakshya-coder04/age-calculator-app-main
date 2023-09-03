// Get input elements
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

// Get error message elements
const dayErr = document.getElementById('dayError');
const monthErr = document.getElementById('monthError');
const yearErr = document.getElementById('yearError');

// Function to validate day
function validateDay() {
  const day = parseInt(dayInput.value);
  if (isNaN(day) || day < 1 || day > 31) {
    dayErr.innerHTML = 'Must be a valid day';
    dayErr.style.visibility = 'visible';
    return false;
  } else {
    dayErr.textContent = '';
  }
  if (dayInput.value === '') {
    dayErr.textContent = '';
  }
  return true;
}

// Function to validate month
function validateMonth() {
  const month = parseInt(monthInput.value);
  if (isNaN(month) || month < 1 || month > 12) {
    monthErr.innerHTML = 'Must be a valid month';
    monthErr.style.visibility = 'visible';
    return false;
  } else {
    monthErr.textContent = '';
  }
  if (monthInput.value === '') {
    monthErr.textContent = '';
  }
  return true;
}

// Function to validate year
function validateYear() {
  const year = parseInt(yearInput.value);
  if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
    yearErr.innerHTML = 'Must be in the past';
    yearErr.style.visibility = 'visible';
    return false;
  } else {
    yearErr.textContent = '';
  }
  if (yearInput.value === '') {
    yearErr.textContent = '';
  }
  return true;
}

dayInput.addEventListener('input', validateDay);
monthInput.addEventListener('input', validateMonth);
yearInput.addEventListener('input', validateYear);

function calculateAge() {
  const birthYear = parseInt(yearInput.value);
  const birthMonth = parseInt(monthInput.value);
  const birthDay = parseInt(dayInput.value);

  //get current date i.e., day, month, year
  var currentDate = new Date();

  var years = currentDate.getFullYear() - birthYear;
  var months = currentDate.getMonth() - birthMonth;
  var days = currentDate.getDate() - birthDay;
  //   console.log(currentDate.getDate());

  if (days < 0) {
    var lastMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    days += lastMonthDate.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  return {
    years: years,
    months: months,
    days: days,
  };
}

var image = document.getElementById('image');

image.addEventListener('click', (e) => {
  if (validateDay() && validateMonth() && validateYear()) {
    const age = calculateAge();
    var digitYear = document.getElementById('digit-year');
    var digitMonth = document.getElementById('digit-month');
    var digitDay = document.getElementById('digit-day');

    digitYear.textContent = age.years + ' ';
    digitMonth.textContent = age.months + ' ';
    digitDay.textContent = age.days + ' ';
  } else {
    return false;
  }
});
