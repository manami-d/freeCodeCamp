function multiplyAll(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr [i][j];
    }
  }
  return product;
}