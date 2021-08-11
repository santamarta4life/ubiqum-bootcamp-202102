export default async function createUser(username, email, password, foto){ // register-user
    const user =  { username, email, password, foto };
    let formBody = [];
    
    for (const property in user) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(user[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }

    formBody = formBody.join('&');

    const createUser = await fetch('http://localhost:5000/users/', {
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
        body: formBody
    })
}