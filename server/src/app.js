import express from "express";
const app = express();
// settings
app.set('port', process.env.PORT || 8080);
// middlewares
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('hello world') 
})

app.listen(8080, () => {
  console.log('server is running');
})
