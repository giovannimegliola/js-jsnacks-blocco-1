
document.getElementById('generaBtn').addEventListener('click', function() {
  const numInput = document.getElementById('nums');
  const numElements = parseInt(numInput.value);
  const randomNum = [];

  for (let i = 0; i < numElements; i++) {
    randomNum.push(Math.floor(Math.random() * 100) + 1); // genera numeri casuali tra 1 e 100
  }

  const lastNum = randomNum.slice(-5); // estrai gli ultimi 5 elementi dell'array

  const lastFive = document.getElementById('lastNum');
  lastFive.innerHTML = '';

  for (let i = 0; i < lastNum.length; i++) {
    const numbersList = lastNum[i];
    const li = document.createElement('li');   // stampa gli ultimi 5 elementi
    li.innerHTML = numbersList;
    lastFive.appendChild(li); 
  }
});






