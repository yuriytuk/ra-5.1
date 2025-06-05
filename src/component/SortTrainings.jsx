function parseDate(str) {
    const [day, month, year] = str.split(".");
    return new Date(`20${year}-${month}-${day}`);
}

export function getSorted(trainings) {
    return [...trainings].sort((a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB - dateA;
    });
}
