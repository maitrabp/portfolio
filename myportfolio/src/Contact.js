import React from 'react';
import {FaLinkedin} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import {FaTwitter} from 'react-icons/fa'
import axios from 'axios'

class Contact extends React.Component {
    constructor()
    {
        super()
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            emailStatus: '',
            msgStatus: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    
    //handleChange
    handleChange  = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    async submitForm(e) {
        e.preventDefault();
        const {
            name, 
            email, 
            phone,
            message,
            msgStatus,
        } = this.state;
        await axios.post('/api/form', {
            name, 
            email,
            phone,
            message,
            msgStatus
        }).then((response)=>{
            if (response.data.msg === 'success'){
                this.msgStyle = {fontSize: "20px", color: "lightgreen", padding: "5px"}
                this.state.msgStatus = 'Success: Your message was sent!';
                this.state.name = '';
                this.state.email = '';
                this.state.phone = '';
                this.state.message = '';
                this.setState(this.state);
                //alert("Message Sent."); 
            }else if(response.data.msg === 'fail'){
                this.msgStyle = {fontSize: "20px", color: "red", padding: "5px"}
                this.state.msgStatus = 'Failed to send. Please contact me through linkedIn, twitter, or email (below form).';
                alert("Message failed to send.")
            }
        })

    }

    render() {
        
        return (
            <div
            className="container-fluid"
            style={{
                backgroundColor: "white",
                borderTop: "8px solid black",
                borderBottom: "8px solid black",
                textAlign: "center",
            }}
            >
                <div id="Contact">
                <div className="overlay">
                    <div className = "mainTitle" style={{color: "white"}}>
                        CONTACT ME
                    </div>
                    <div className = "formContainer">
                        <div style={this.msgStyle}>{this.state.msgStatus}</div>
                        <form onSubmit={this.submitForm}>      
                            <input name="name" value = {this.state.name} type="text"  onChange = {this.handleChange} className="feedback-input" placeholder="Name" required/>   
                            <input name="email" value = {this.state.email} type="text" onChange = {this.handleChange} className="feedback-input" placeholder="Email" required />
                            <input name="phone" value = {this.state.phone} type="tel"  onChange = {this.handleChange} className="feedback-input" placeholder="Phone (Optional)" />
                            <textarea name="message" value = {this.state.message} onChange = {this.handleChange} className="feedback-input" placeholder="Comment" required></textarea>
                            <input type="submit" value="SEND"/>
                        </form>
                    </div>
                    <div className = "contactButtons">
                        <a target="_blank" rel="noopener noreferrer" className="fontAwesomeButton" href = "https://www.linkedin.com/in/maitra-patel-911060176/">
                            <FaLinkedin size='2rem'></FaLinkedin> LinkedIn
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="fontAwesomeButton" href = "https://twitter.com/maaitraa">
                            <FaTwitter size='2rem'></FaTwitter> Twitter
                        </a>
                        <a className="fontAwesomeButton" title = "maitraofficial@gmail.com" href = "mailto: maitraofficial@gmail.com">
                            <IoMdMail size='2rem'></IoMdMail> Email
                        </a>
                    </div>
                </div>
            </div>
          </div>
        );     
    }
}
export default Contact;