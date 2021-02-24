let someObject = {
    anObjectProperty: {
        anotherObjectProp: {q: 111, w: 222},
        anotherArrayProp: [321, 432, 543]
    },
    aNumberArrayProp: [1, 2, 3],
    anObjectArrayProp: [
        {a: 123, b: 234},   {c: 321, d: 432}]}

console.log(someObject.anObjectProperty.anotherArrayProp)
console.log(someObject.aNumberArrayProp)
console.log(someObject.anObjectArrayProp.length)
console.log(someObject.anObjectProperty.anotherObjectProp.q)

const addEs6 = (a, b) => {
    console.log(a, b)
    return a + b
}

console.log(addEs6(12,12))
