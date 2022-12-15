import { useEffect } from "react";
import { useState } from "react";


const Wings = () => {

  const [inputText, setInputText] = useState('');

  useEffect(() => {
    
  });

  return (
    <div className="wings">
      <form action="" className="wings_form">
        <input 
          type="text"
          className="wings_input"
          onChange={text => setInputText(text.target.value)}
        />
      </form>
      <p>{inputText}</p>
    </div>
  )
}

export default Wings;