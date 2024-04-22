/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// Middleware to parse JSON bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Handle form data
app.post('/submit-form', (req, res) => {
    const data = req.body
    fs.writeFile('data.txt', JSON.stringify(data), (err) => {
        if (err) {
        console.error(err)
        res.status(500).send('Error writing file')
        } else {
        res.send('Data saved successfully')
        console.log(data)
        }
    })
})

// Define routes
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))