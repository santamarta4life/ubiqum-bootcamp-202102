import axios from "axios";
//import { FormatError } from "../errors";


export default function registerAccount(username, email, password) {

    axios.post("http://localhost:5000/users/auth", { username, email, password })
        .then((res) => {
            // Save to localStorage
            // Set token to localStorage
            const  token  = res.data.json();

            return token;
        });
}

/*export default async function registerUser(username, email, password) { // register-user
    const user = { username, email, password };
    let formBody = [];

    for (const property in user) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(user[property]);
        formBody.push(encodedKey + '=' + encodedValue);
    }

    formBody = formBody.join('&');

    const registerUser = await fetch('http://localhost:5000/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody

    })
        .then((res) => {
            // Save to localStorage
            // Set token to localStorage
            const { token } = res.data;

            return token;
        });
} */
