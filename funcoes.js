function soma(a, b) {
    return parseInt(a) + parseInt(b);
}
function sub(a, b) {
    return parseInt(a) - parseInt(b);
}
function mult(a, b) {
    return parseInt(a) * parseInt(b);
}
function div(a, b) {
    return parseInt(a) / parseInt(b);
}
function maior(a, b) {
    if (parseInt(a) > parseInt(b)) {
        return parseInt(a);
    } else {
        return parseInt(b)
    }
}
function potencia(a, b) {
    return (Math.pow(parseInt(a), parseInt(b)))
}

function sen(a) {
    return (Math.sin(parseInt(a)))
}

function cos(a) {
    return (Math.cos(parseInt(a)))
}
function tan(a) {
    return (Math.tan(parseInt(a)))
}
function sqrt(a) {
    return (Math.sqrt(parseInt(a)))
}
function percent(a, b) {
    return ((parseInt(a) / 100) * parseInt(b))
}

module.exports = { soma, sub, mult, div, maior, potencia, sen, cos, tan, sqrt, percent };