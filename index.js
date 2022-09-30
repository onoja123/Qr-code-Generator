const express = require("express")
const ejs = require("ejs")
const path = require("path")
const qrcode = require("qrcode")
const app = express()

app.set("view engine", "ejs")

app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res)=>{
    res.render("index")
})

app.post("/scan", (req, res, next)=>{
const text = req.body.text;

console.log(text)
qrcode.toDataURL(text, (err, src)=>{
    res.render("scan", {
        qr_code:src,
    })
})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, 
    console.log(`server running on port ${PORT}`)
)