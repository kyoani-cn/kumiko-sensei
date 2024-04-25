let BASE_API_URL = '/api/kumiko-sensei/';
let BASE_VOCAL_URL = '/vocals-hex/';

if(/31.2/.test(location.origin)) {
    const host = location.origin.replace(/\d+$/,'');
    BASE_API_URL = `${host}40055${BASE_API_URL}`;
    BASE_VOCAL_URL = `${host.replace('p','ps')}5501/vocals-hex/`;
}


export { BASE_API_URL, BASE_VOCAL_URL };