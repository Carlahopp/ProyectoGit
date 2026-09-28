export function rubricPassFail(score) {
    const parsedScore = parseInt(score);
    return parsedScore >= 5 ? "Pass" : "Fail";
}
