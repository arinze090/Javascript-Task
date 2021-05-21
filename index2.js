function checkYuGiOh(n) {
    if (typeof n === "string") {
      return "invalid parameter: " + JSON.stringify(n);
    } else if (Array.isArray(n) === true) {
      return "invalid parameter: " + JSON.stringify(n);
    } else if (typeof n === "object") {
      return "invalid parameter: " + JSON.stringify(n);
    }
    
    var newArr = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        newArr.push("yu-gi-oh");
      } else if (i % 2 === 0 && i % 3 === 0) {
        newArr.push("yu-gi");
      } else if (i % 2 === 0 && i % 5 === 0) {
        newArr.push("yu-oh");
      } else if (i % 3 === 0 && i % 5 === 0) {
        newArr.push("gi-oh");
      } else if (i % 2 === 0) {
        newArr.push("yu");
      } else if (i % 3 === 0) {
        newArr.push("gi");
      } else if (i % 5 === 0) {
        newArr.push("oh");
      } else {
        newArr.push(i);
      }
    }
    return newArr;
  }
  console.log(checkYuGiOh(12));
  console.log(checkYuGiOh("fizzbuzz is meh"));