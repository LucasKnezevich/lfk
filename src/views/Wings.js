import { useState } from "react";
import LogIn from "../components/auth/LogIn";


const Wings = () => {

  const [inputText, setInputText] = useState('');

  return (
    <div className="wings">
      <LogIn />
    </div>
  )
}

export default Wings;