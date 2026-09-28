export function rubricExcellent(score) {

    const parsedScore = parseInt(score);
    if (parsedScore === 11) return "Perfect"; // Protegemos el tope por consistencia
    return parsedScore > 8 ? "Excellent" : (parsedScore >= 5 ? "Pass" : "Fail");

}