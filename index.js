import express from 'express'
import path from 'path'
const __dirname = path.resolve()
const app = express()
const PORT = 3000

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
//Sending static files to the browser
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
    
})
//If on the client-side we didnt get mistakes with the values we send back the sum of the values 
app.post('/', (req, res, next) => {
    res.send(req.body.sum);
})
//Starting server
app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT} ...`);
});
