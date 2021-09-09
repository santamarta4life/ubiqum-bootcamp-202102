import jwt_decode from "jwt-decode";


export function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return re.test(email)
}

export function decodeToken(token){
  var decoded = jwt_decode(token);
  console.log(decoded)
  var decodedHeader = jwt_decode(token, { header: true });
  console.log(decodedHeader);
 
}