const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const checkAccount = require('./check_account')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index', { message: '' })
})

app.post('/', (req, res) => {
  const { email, password } = req.body
  const firstName = checkAccount({ email, password })

  if (firstName) res.render('profile', { firstName })
  else {
    res.render('index', {
      message: 'Username/Password 錯誤',
      account: { email, password }
    })
  }
})

app.listen(port, () => {
  console.log('http://localhost:3000')
})
