import Fetch from 'whatwg-fetch';

export function get(url){
  /*let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin','*');
  headers.append('Access-Control-Allow-Headers','*');*/
  var misCabeceras = new Headers();
  var miInit = { method: 'GET',
               headers: misCabeceras,
               mode: 'cors',
               cache: 'default' };

  return fetch(url, miInit)
  .then((response) => {
    return response.json();
  })
};
