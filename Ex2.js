document.addEventListener('DOMContentLoaded', (event) => {
    function mostraExemple(metode, exemple, resultat) {
        const div = document.getElementById('resultat');
        const p = document.createElement('p');
        p.innerHTML = `<span class="bold2">${metode}</span> - Array inicial: ${JSON.stringify(exemple)} - Resultat: ${resultat}`;
        div.appendChild(p);
    }

    const arrayInicial = [1, 2, 3, 4, 5];

    // at()
    mostraExemple('at()', 'arrayInicial.at(2)', arrayInicial.at(2));

    // concat()
    mostraExemple('concat()', 'arrayInicial.concat([6, 7])', JSON.stringify(arrayInicial.concat([6, 7])));

    // constructor
    mostraExemple('constructor', 'arrayInicial.constructor', arrayInicial.constructor);

    // copyWithin()
    mostraExemple('copyWithin()', 'arrayInicial.copyWithin(0, 3)', JSON.stringify(arrayInicial.copyWithin(0, 3)));

    // entries()
    const entriesArray = arrayInicial.entries();
    let entriesResult = '';
    for (let entry of entriesArray) {
        entriesResult += JSON.stringify(entry) + ' ';
    }
    mostraExemple('entries()', 'arrayInicial.entries()', entriesResult);

    // every()
    mostraExemple('every()', 'arrayInicial.every(x => x < 6)', arrayInicial.every(x => x < 6));

    // fill()
    mostraExemple('fill()', 'arrayInicial.fill(0, 2, 4)', JSON.stringify(arrayInicial.fill(0, 2, 4)));

    // filter()
    mostraExemple('filter()', 'arrayInicial.filter(x => x > 2)', JSON.stringify(arrayInicial.filter(x => x > 2)));

    // find()
    mostraExemple('find()', 'arrayInicial.find(x => x > 3)', arrayInicial.find(x => x > 3));

    // findIndex()
    mostraExemple('findIndex()', 'arrayInicial.findIndex(x => x > 3)', arrayInicial.findIndex(x => x > 3));

    // flat()
    const nestedArray = [1, [2, [3, 4], 5]];
    mostraExemple('flat()', 'nestedArray.flat(2)', JSON.stringify(nestedArray.flat(2)));

    // flatMap()
    mostraExemple('flatMap()', 'arrayInicial.flatMap(x => [x, x * 2])', JSON.stringify(arrayInicial.flatMap(x => [x, x * 2])));

    // forEach()
    let forEachResult = '';
    arrayInicial.forEach(x => { forEachResult += x + ' '; });
    mostraExemple('forEach()', 'arrayInicial.forEach(x => ...)', forEachResult);

    // from()
    mostraExemple('from()', 'Array.from("hello")', JSON.stringify(Array.from("hello")));

    // includes()
    mostraExemple('includes()', 'arrayInicial.includes(3)', arrayInicial.includes(3));

    // indexOf()
    mostraExemple('indexOf()', 'arrayInicial.indexOf(3)', arrayInicial.indexOf(3));

    // isArray()
    mostraExemple('isArray()', 'Array.isArray(arrayInicial)', Array.isArray(arrayInicial));

    // join()
    mostraExemple('join()', 'arrayInicial.join(", ")', arrayInicial.join(", "));

    // keys()
    const keysArray = arrayInicial.keys();
    let keysResult = '';
    for (let key of keysArray) {
        keysResult += key + ' ';
    }
    mostraExemple('keys()', 'arrayInicial.keys()', keysResult);

    // lastIndexOf()
    mostraExemple('lastIndexOf()', 'arrayInicial.lastIndexOf(0)', arrayInicial.lastIndexOf(0));

    // length
    mostraExemple('length', 'arrayInicial.length', arrayInicial.length);

    // map()
    mostraExemple('map()', 'arrayInicial.map(x => x * 2)', JSON.stringify(arrayInicial.map(x => x * 2)));

    // pop()
    const popArray = [...arrayInicial];
    mostraExemple('pop()', 'popArray.pop()', popArray.pop());

    // prototype
    mostraExemple('prototype', 'Array.prototype', JSON.stringify(Object.getOwnPropertyNames(Array.prototype)));

    // push()
    const pushArray = [...arrayInicial];
    mostraExemple('push()', 'pushArray.push(6)', pushArray.push(6));

    // reduce()
    mostraExemple('reduce()', 'arrayInicial.reduce((acc, x) => acc + x, 0)', arrayInicial.reduce((acc, x) => acc + x, 0));

    // reduceRight()
    mostraExemple('reduceRight()', 'arrayInicial.reduceRight((acc, x) => acc + x, 0)', arrayInicial.reduceRight((acc, x) => acc + x, 0));

    // reverse()
    const reverseArray = [...arrayInicial];
    mostraExemple('reverse()', 'reverseArray.reverse()', JSON.stringify(reverseArray.reverse()));

    // shift()
    const shiftArray = [...arrayInicial];
    mostraExemple('shift()', 'shiftArray.shift()', shiftArray.shift());

    // slice()
    mostraExemple('slice()', 'arrayInicial.slice(1, 3)', JSON.stringify(arrayInicial.slice(1, 3)));

    // some()
    mostraExemple('some()', 'arrayInicial.some(x => x > 4)', arrayInicial.some(x => x > 4));

    // sort()
    const sortArray = [...arrayInicial];
    mostraExemple('sort()', 'sortArray.sort()', JSON.stringify(sortArray.sort()));

    // splice()
    const spliceArray = [...arrayInicial];
    mostraExemple('splice()', 'spliceArray.splice(2, 1, 6)', JSON.stringify(spliceArray.splice(2, 1, 6)));

    // toString()
    mostraExemple('toString()', 'arrayInicial.toString()', arrayInicial.toString());

    // unshift()
    const unshiftArray = [...arrayInicial];
    mostraExemple('unshift()', 'unshiftArray.unshift(0)', unshiftArray.unshift(0));

    // valueOf()
    mostraExemple('valueOf()', 'arrayInicial.valueOf()', arrayInicial.valueOf());
});
