import app from './app.js';

const port = app.get('port');

app.get('/', (_req, res) => {
  res.json({
    message: "The server is running successfully, you can go to the documentation",
    documentation: 'https://github.com/fredvel59/auth_app/tree/master/server#readme'
  }) 
})

app.listen(port, () => {
  console.log(`the server is running on port: ${port}`);
})
