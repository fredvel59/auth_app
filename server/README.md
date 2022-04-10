# REST API Documentation

## End Points

Examples only for javascript developers

## Get Users All:

``` javascript
// you can also use "axios" 
async function getUsers() {
  const url = 'http://localhost:8080/users/all'; // GET method
  const request = await fetch(url);
  const response = await request.json();
  return response; 
}

// response: 
[ 
  {
    "id": "1oDDJLl4Qk1649605769377",
    "rool": "cliente",
    "name": "test name1",
    "email": "test@gmail.com.dev",
    "password": "$2a$10$i6mPHqA1MdSzG5yThgsZMu86.dqkHl7uAlmjNuwUd6Fe8cvRlmT.u",
    "phone": null,
    "photo": "",
    "photo_id": "",
    "verified": false,
    "admin": false,
    "key_email": null
  },
  {
    "id": "ViaoTyNIOm1649605769645",
    "rool": "cliente",
    "name": "test name1",   
    "email": "",
    "password": "$2a$10$p8BbFN4DFQTPL8R7vrWbduxj4ZgG6T3rxHJCYCurGWu.RjnM1LT4O",
    "phone": null,
    "photo": "",
    "photo_id": "",
    "verified": false,
    "admin": false,
    "key_email": null
  }
]
```
## Create a new User (Sign Up)

``` js
const createUser = async () => {
  const url = ''
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      name: 'your name', // your name must be contain greater than 5 characteres and less than 50
      email: 'your email', 
      password: 'your password' // no greater than 25 characterers and less than 6 
    })
  } )
  const response = await request.json();
  return response
}
// response: 
{ 
  response: 200, 
  message: `the user: "user name", was created successfully` 
}
```

