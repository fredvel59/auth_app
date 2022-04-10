# REST API Documentation

## End Points

Examples only for javascript developers

``` javascript
async function getUsers() {
  const url = 'http://localhost:8080/users/all';
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


