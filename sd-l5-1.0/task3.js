export function ageCalculator(year, month, day) {
    const today = new Date();
    
    const birthday = new Date(year, month, day);
    
    let age = today.getFullYear() - birthday.getFullYear();
    let theMonth = today.getMonth() - birthday.getMonth();

    if (theMonth < 0 || (theMonth === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}