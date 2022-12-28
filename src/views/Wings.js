import { useState } from "react";
import SignUp from "../components/auth/SignUp";


const Wings = () => {

  const [inputText, setInputText] = useState('');

  return (
    <div className="wings">
      <SignUp />
    </div>
  )
}

export default Wings;