let array = [1,2,3,4,5,6,7,8,9]

let oddNumber = (array) => {
var result = array.filter(element=>element%2!=0)
    return result;
}
console.log(oddNumber(array));
