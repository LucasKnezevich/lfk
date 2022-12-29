import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');



  // Validating user input
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // WARNING MESSAGES
  const [emailMessage, setEmailMessage] = useState('');
  const [password1Message, setPassword1Message] = useState('');
  const [password2Message, setPassword2Message] = useState('');

  // RegEx for email and password
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const passwordRegExFull = /(?=.*[0-9])*(?=.*[!@#$%^&*()\-__+.])/;
  const passwordNumberRegEx = /(?=.*[0-9])/;
  const passwordSpecialCharRegEx = /(?=.*[!@#$%^&*()\-__+.])/;


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

    // Password 1
    if (password1.length === 0) {
      setPassword1Message('');
    } else if (password1.length < 8) {
      setPassword1Message('Must be at least 8 characters.');
    } else if (!password1.match(passwordNumberRegEx)) {
      setPassword1Message('Needs at least 1 number.');
    } else if (!password1.match(passwordSpecialCharRegEx)) {
      setPassword1Message('Needs at least 1 special character.');
    } else if (password1.length >= 8 && password1.match(passwordRegExFull)) {
      setPassword1Message('');
    }

    // Password 2 & checking for match to password 1
    // This is what sets isPasswordValid
    if (password2.length === 0) {
      setPassword2Message('');
      setIsPasswordValid(false);
    } else if (password2.length < 8) {
      setPassword2Message('Must be at least 8 characters.');
      setIsPasswordValid(false);
    } else if (!password2.match(passwordNumberRegEx)) {
      setPassword2Message('Needs at least 1 number.');
      setIsPasswordValid(false);
    } else if (!password2.match(passwordSpecialCharRegEx)) {
      setPassword2Message('Needs at least 1 special character.');
      setIsPasswordValid(false);
    } else if (password1 != password2) {
      setPassword2Message('Passwords must match');
    } else if (
      password2.length >= 8 &&
      password2.match(passwordRegExFull) &&
      password1 === password2
    ) {
      setPassword2Message('');
      setIsPasswordValid(true);
    }


    // Determining if the form is valid to be submitted
    if (
      isPasswordValid &&
      isEmailValid
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  });


  function validateSignUp() {
    if (isFormValid) {
      alert('Success')
    } else {
      alert("Form not valid.")
    }
  }

  return (
    <div className="signup view_content">

      <form action="" className="signup_form form">

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
            <p className="input_warning_message">{password1Message}</p>
          </div>
          
          <input 
            className="input"
            type="password" 
            name="password1" 
            id=""
            onChange={input => setPassword1(input.target.value)}
          />
        </div>

        <div className="input_section">  
          
          <div className="input_label_section">
            <label for="password2">Confirm Password</label>
            <p className="input_warning_message">{password2Message}</p>
          </div>

          <input
            className="input"
            type="password"
            name="password2"
            onChange={input => setPassword2(input.target.value)}
          />
        </div>

        <button className="form_submit_btn" onClick={validateSignUp}>Create Account</button>

      </form>

      <p className="question_primary">Already have an account?</p>
      <Link to='/wings' className="link_primary">Log In</Link>
      <p>{email}</p>

    </div>
  )
}