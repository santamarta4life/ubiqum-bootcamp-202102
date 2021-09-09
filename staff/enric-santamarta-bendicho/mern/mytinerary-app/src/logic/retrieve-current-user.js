import axios from 'axios';

export default async function (token) {

  return (async () => {
    try {
      const res = await axios.get('http://localhost:5000/users', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      const user = res.data
      return user
    } catch (error) {
      const { status } = error

      switch (true) {
        case status === 401:
          throw new Error('wrong credentials')
        case status < 500:
          throw new Error('client error')
        case status >= 500:
          throw new Error('server error')
      }
    }
  })()
}


