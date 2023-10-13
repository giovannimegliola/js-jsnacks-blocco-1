// definiamo l'array Fridge con la frutta presente inizialmente nel frigo

let Fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola']

// aggiungiamo la pesca

Fridge.push('pesca');

// cerchiamo il cocomero nell'array

let watermelon = false;

for (let i = 0; i < Fridge.length && !watermelon; i++) {
  if (Fridge[i] === 'cocomero'){
    watermelon = true
  }
}

// verifichiamo se il cocomero è stato trovato e stampiamo un messaggio

if (watermelon) {
  console.log("trovato! devo solo preparare il cocktail")
}
else {
  console.log("oh no, devo uscire a comprare il cocomero!")
}



