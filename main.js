function convertFahrToCelsius(F) {
    var C = (F - 32) * 5 / 9;
    var x = C.toFixed(4);
    
    if (Array.isArray(F) === true) {
        return "[1,2,3] is not a valid number but an array"
    }
    else if (typeof (F) === Object) {
        return "true is not a valid number but a/an object"
    }
    else if (typeof (F) === Boolean) {
        return "true is not a valid number but a/an Boolean"
    }
    else if (typeof (F) === String) {
        return "true is not a valid number but a/an string"
    }
    else {
        return x;
    }
}

console.log(convertFahtToCelsius());