export default (url) => {
    const regExp = /\/([0-9]*)\/$/;
    const match = url.match(regExp);
    return match ? match[1] : null;
}