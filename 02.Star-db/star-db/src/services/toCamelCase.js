export default (str) => {
    const regExp = /[^a-zA-Z0-9]+(.)/g
    return str
        .toLowerCase()
        .replace(regExp, (m, chr) => chr.toUpperCase());
}