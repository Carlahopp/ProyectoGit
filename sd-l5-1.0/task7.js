export function rubricPerfect(score) {
    const parsedScore = parseInt(score);
    if (parsedScore === 11) return "Perfect";
    return parsedScore > 8 ? "Excellent" : (parsedScore >= 5 ? "Pass" : "Fail");
}
