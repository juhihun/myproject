const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/api/login',(req,res)=>{
  const userid = req.body.userid;
  const userpw = req.body.userpw;
  console.log(userid,userpw);
  res.send({userid,userpw});
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})