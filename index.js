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
            pool: true,
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user:  'maitraofficial@gmail.com',
                accessToken: 'ya29.a0AfH6SMDy95iKJIwGxIyyWo1kW5qrtHNkU3enjBj_iDLlUPvwXgzoIFvw0C9C0_XbVBYjmFGRDgp7vu57zvugDcwj4KU7YuoIg7tAe3tVIUSlhs8hvRBq31YFjEDfnFuOOOkgcfBDe-JC6ZgR71PHk7nx9yIwG2AqlOY',
                expires: 1593109815926 + 60000,
                refreshToken: '1//04zveV3Ghpk7XCgYIARAAGAQSNwF-L9IrBMlYFnhlhgv3VqPnj4Kc6CgTJ6zPbskSUQrJtBbwUdyUWPhzqd4SbSoSA3kdgL1CkpE',
                clientId: '1050770169701-0t7gbqqrfku9u2dcubpj8vqbm7ual8bf.apps.googleusercontent.com',
                clientSecret: 'FMM5vBDyg3uR8DfqgPHD4SvW',
                accessUrl: 'https://oauth2.googleapis.com/token',
            
            },
        })

        let mailOptions = {
            from: 'maitraofficial@gmail.com',
            to: 'maitraofficial@gmail.com',
            replyTo: 'maitraofficial@gmail.com',
            subject: 'Portfolio Contact Alert',
            text: req.body.message,
            html: htmlEmail
        }
        transporter.sendMail(mailOptions, (err, info) => {
            if(err)
            {
                console.log(err)
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