import app from './App'
import * as bodyParser from 'body-parser'

const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, (err) => 
{
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})