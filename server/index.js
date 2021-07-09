import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(sepress.urlencoded({ extended: true }))
app.use(cors())

const CONNECTION_URI =
  'mongodb+srv://eddie:mernstack@cluster0.axpkh.mongodb.net/MERN?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000
mongoose
  .connect(CONNECTION_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection is established and running on port ${PORT}`)
    )
  )
  .catch((err) => console.error(error))
