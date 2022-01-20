import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const options = () => {
    const value = cookies.get('.cbt.devncore.org.authentication.session');
    const headers = {
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': '*',
            'Access-Control-Allow-Methods': '*',
            "DevNcore-Authentication": value == null ? "" : value
        }
    };
    return headers;
}

export const find = (name) => {
    return process.env.REACT_APP_SERVICE_URL + name;
}