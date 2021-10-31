console.log('------------- #4a')
function getSum(a, b) {
  return a + b;
}
console.log(getSum(1, 2))

console.log('------------- #4b')
function getSub(a, b) {
  return a - b;
}
console.log(getSub(1, 2))

console.log('------------- #4c')
function getMult(a, b) {
  return a * b;
}
console.log(getMult(1, 2))

console.log('------------- #4d')
function getDiv(a, b) {
  return a / b;
}
console.log(getDiv(1, 2))

console.log('------------- #5')
function getNumsAsc(n) {
  for (let i = 1; i <= n; i++){
    console.log(i);
  }
}
getNumsAsc(5)

console.log('------------- #6')
function getNumsDesc(n) {
  for (let i = n; i >= 1; i--){
    console.log(i);
  }
}
getNumsDesc(5)

console.log('------------- #7')
function pow(x, n) {
 return x ** n;
}
console.log(pow(4, 3))

console.log('------------- #8')
function isBigger (a, b) {
  if (a > b) {
    return true;
  }
    return false;
}

console.log(isBigger(5, -1))

console.log('------------- #9')
function isSmaller (a, b) {
  if (a < b){
    return true;
  }
    return false;
}

console.log(isSmaller(5, -1))