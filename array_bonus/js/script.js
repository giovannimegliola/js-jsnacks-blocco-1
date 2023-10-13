
const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// Trova l'array più corto e il numero di elementi da aggiungere
const shortArray = Math.min(array1.length, array2.length);
const diffArray = Math.abs(array1.length - array2.length);

// Aggiungi elementi casuali all'array più corto finché non hanno la stessa lunghezza
for (let i = 0; i < diffArray; i++) {
    if (array1.length < array2.length) {
        array1.push(Math.floor(Math.random() * 100));
    } else {
        array2.push(Math.floor(Math.random() * 100));
    }
}

// Stampa gli array risultanti
console.log("Array 1:", array1);
console.log("Array 2:", array2);