import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";


export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const [emailMessage, setEmailMessage] = useState('');

  // RegEx for email and password
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  useEffect(() => {

    // Email
    if (email.length === 0) {
      setEmailMessage('');
      setIsEmailValid(false);
    } else if (email.length != 0 && !email.match(emailRegEx)) {
      setEmailMessage('Please enter a valid email.');
      setIsEmailValid(false);
    } else if (email.match(emailRegEx)) {
      setEmailMessage('');
      setIsEmailValid(true);
    }

    // Password
    if (password.length <= 0) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }

    // Form
    if (isEmailValid && isPasswordValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }

  })

  function validateLogIn() {
    if (isFormValid) {
      alert('Invalid credentials.')
    } else {
      alert("Form not valid.")
    }
  }

  return (
    <div className="login view_content">

      <form action="" className="login_form form">
        <div className="input_section">
          <div className="input_label_section">
            <label for="email">Email</label>
            <p className="input_warning_message">{emailMessage}</p>
          </div>

          <input
            className="input"
            type="email"
            name="email"
            id=""
            onChange={input => setEmail(input.target.value)}
          />
        </div>

        <div className="input_section">
          <div className="input_label_section">
            <label for="password1">Password</label>
          </div>
          
          <input 
            className="input"
            type="password" 
            name="password" 
            id=""
            onChange={input => setPassword(input.target.value)}
          />
        </div>

        <button className="form_submit_btn" onClick={validateLogIn}>Log In</button>

      </form>

      {/* <p className="question_primary">Don't have an account?</p>
      <Link to='/wings/signup' className="link_primary">Sign Up</Link> */}

    </div>
  )
}