export function formatDateForInput(dateString) {
    if (!dateString) {
        return '';
    }

    const [day, month, year] = dateString.split('.');
    return `${year}-${month}-${day}`;
}

export function formatDateForServer(dateString) {
    if (!dateString) {
        return '';
    }

    const [year, month, day] = dateString.split('-');
    return `${day}.${month}.${year}`;
}