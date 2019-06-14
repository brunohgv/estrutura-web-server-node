const express = require('express')
const app = express()

const PORT = 8000

app.use(express.json());
app.use('/public', require('./routes'));

app.listen(PORT, () => {
  console.log(`App ouvindo a porta ${PORT}`)
})