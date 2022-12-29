import { useState } from "react"
import { Link } from "react-router-dom";


export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  function validateAccountCreation() {
    if (isFormValid) {

    } else {
      alert("Form not valid.")
    }
  }

  return (
    <div className="signup">

      <form action="" className="signup_form form">
        <div className="input_section">
          <label for="email">Email</label>
          <input
            className="input"
            type="email"
            name="email"
            id=""
            onChange={input => setEmail(input.target.value)}
          />
        </div>

        <div className="input_section">
          <label for="password1">Password</label>
          <input 
            className="input"
            type="password" 
            name="password1" 
            id=""
            onChange={input => setPassword1(input.target.value)}
          />
        </div>

        <div className="input_section">  
          <label for="password2">Confirm Password</label>
          <input
            className="input"
            type="password"
            name="password2"
            onChange={input => setPassword2(input.target.value)}
          />
        </div>

        <button className="form_submit_btn" onClick={validateAccountCreation}>Create Account</button>

      </form>

      <p className="question_primary">Already have an account?</p>
      <Link to='/wings' className="link_primary">Log In</Link>
      <p>{email}</p>

    </div>
  )
}