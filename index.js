require('dotenv').config();


const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const nodemailer = require('nodemailer')
const app = express()
const PORT = process.env.PORT || 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form', (req, res) =>
{
    nodemailer.createTestAccount((err,account) => {
        const htmlEmail = `<h2>YOU HAVE A NEW CONTACT REQUEST FROM YOUR PORTFOLIO</h2>
                           <h3> Contact Details: </h3>
                            <ul> 
                                <li>Name: ${req.body.name}</li>
                                <li>Email: ${req.body.email}</li>
                                <li>Phone: ${req.body.phone}</li>
                            </ul>
                            <h4>Message:</h4>
                            <p>${req.body.message}</p>`
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user:  process.env.REACT_APP_USERNAME,
                pass: process.env.REACT_APP_PASSWORD,
            },
        })

        let mailOptions = {
            from: process.env.REACT_APP_USERNAME,
            to: process.env.REACT_APP_USERNAME,
            replyTo: process.env.REACT_APP_USERNAME,
            subject: 'Portfolio Contact Alert',
            text: req.body.message,
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if(err)
            {
                res.json({
                    msg: 'fail'
                  })
                return console.log(err)
            } else {
                res.json({
                    msg: 'success'
                  })
                console.log("Message Sent %s", info.message)
                console.log("Message URL: %s", nodemailer.getTestMessageUrl(info))
            }
            
        })
    })
})
//Check if the process is running in production mode
if(process.env.NODE_ENV === "production")
{
    app.use(express.static('myportfolio/build'));

    app.get('*',  (req, res) => {
        res.sendFile(path.resolve(_dirname, 'myportfolio', 'build', 'index.html'));
    })

}

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})