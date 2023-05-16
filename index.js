const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const newArray = [...cats];
    newArray.push(name);
    return newArray;
}

function prependCat(name) {
    const newArray = [...cats];
    newArray.unshift(name);
    return newArray;
}

function removeLastCat() {
    const newArray = [...cats];
    newArray.pop();
    return newArray;
}

function removeFirstCat() {
    const newArray = [...cats];
    newArray.shift();
    return newArray;
}