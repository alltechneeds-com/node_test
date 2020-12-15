import app from './App'
import * as bodyParser from 'body-parser'

// port
const port = process.env.PORT || 3000

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port, (err) => 
{
  if (err) {
    // error
    return console.log(err)
  }

  // startup port
  return console.log(`server is listening on ${port}`)
})