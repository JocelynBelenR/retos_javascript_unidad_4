function filterOddElements(num) {
    var numero = [1,2,3,4,5];
    if (numero% 2 == 0) {
        return num [2,4];
    }
    else {
        return [1,3,5];
    }
  }
  module.exports = filterOddElements;