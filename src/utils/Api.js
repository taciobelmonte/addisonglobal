const ROOT = "https://www.mocky.io/v2/59f08692310000b4130e9f71";

const headers = {
    'Accept': 'application/json',
};

export const getData = () =>{
    return fetch(`${ROOT}`, { headers })
        .then(res => res.json())
        .then(data => data)
};