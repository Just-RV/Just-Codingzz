const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();


  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const resutl = document.querySelector('#result');

  if (height === "" || height < 0 || isNaN(height)) {
    resutl.innerHTML = `Data not acceplteble ${height}`
  }
  else if (weight === "" || weight < 0 || isNaN(weight)) {
    resutl.innerHTML = `Data not acceplteble ${weight}`
  }
  else {

    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    resutl.innerHTML = `THe BMI is ${BMI}`;
  }

})