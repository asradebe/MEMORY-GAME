
function Add(num1, num2, num3, num4) {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}


function Multiply(num1, num2, num3, num4) {
    let result = 1;
    for (let i = 0; i < arguments.length; i++) {
        result *= arguments[i];
    }
    return result;
}


