const ROOT = "https://www.mocky.io/v2/59f08692310000b4130e9f71";

/*let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);*/

const headers = {
    'Accept': 'application/json',

};
//'Authorization': token

export const getData = () =>{
    return fetch(`${ROOT}`, { headers })
        .then(res => res.json())
        .then(data => data);
};
//res.json()