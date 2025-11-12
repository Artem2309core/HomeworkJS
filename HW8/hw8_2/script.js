function deepCopy(obj) {
    if (obj === null || obj === undefined || Number.isNaN(obj)) return obj;
    if (typeof obj === 'function') return obj;
    if (typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }
    const copy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    //if (obj instanceof Date) return new Date(obj.getTime());

    return copy;
}