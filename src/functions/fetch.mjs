export const fetchJSON = async (url) => {
    const response = await window.fetch(url);
    const data = await response.json();
    return data;
};