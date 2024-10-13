const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000 //5000 used for testing and PORT 3000(from fly.toml) for production

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

// start app in a wrong port
app.listen(PORT , () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
