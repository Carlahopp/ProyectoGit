export function costCalculator(amount) {
    const parsedAmount = parseFloat(amount)

    return parsedAmount + 3 + (parsedAmount * 0.01);
    
}