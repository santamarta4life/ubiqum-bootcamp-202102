export default async function postUserData(username, email, userpassword, foto){ // register-user
    const user =  { username, email, userpassword, foto };
    let formBody = [];
    
    for (const property in user) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(user[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }

    formBody = formBody.join('&');

    const userData = await fetch('http://localhost:5000/users/', {
        method:'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
        body: formBody
    })

    //const content = await userData.json()
  
}