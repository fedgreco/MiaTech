function somma(...numeri) {
    let totale = 0;

    for (let numero of numeri) {
        totale += numero;
    }

    return totale;
}

console.log(somma(3, 6, 12));
