export function divide (a, b) {
    if (b === 0) {
        return "Erreur"
    }
    return a / b;
}

exports.divide = divide;