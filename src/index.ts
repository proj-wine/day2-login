import express from 'express'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username !== 'admin' && password !== 'admin') {
    res.status(401).send('Invalid username or password')
    return
  }
  res.send('Login successful')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
