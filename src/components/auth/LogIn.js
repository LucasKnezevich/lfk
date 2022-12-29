import { useState } from "react"
import { Link } from "react-router-dom";


export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  function validateAccountCreation() {
    if (isFormValid) {

    } else {
      alert("Form not valid.")
    }
  }

  return (
    <div className="login">

      <form action="" className="login_form form">
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
            name="password" 
            id=""
            onChange={input => setPassword1(input.target.value)}
          />
        </div>

        <button className="form_submit_btn" onClick={validateAccountCreation}>Log In</button>

      </form>

      <p className="question_primary">Don't have an account?</p>
      <Link to='/wings/signup' className="link_primary">Sign Up</Link>

    </div>
  )
}