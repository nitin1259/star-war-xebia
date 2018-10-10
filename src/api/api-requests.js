export const getRequest = async (url) => {
    const data = await fetch(url).then(res => {
        return handleResponse(res)
    }).catch(err => {
        console.log(`${url} ${err.statusText}` + err);
        alert(`${url} ${err.statusText}`);
    })
    return data;
}

function handleResponse(res) {
    if (!res.ok) {
        return Promise.reject(res)
    }
    return res.json()
}