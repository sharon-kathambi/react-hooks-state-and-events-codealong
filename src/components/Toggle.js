import React, {useState} from "react";

function Toggle() {

  const [isOff, setIsOff] = useState(false);

  function changeButton(event){
    console.log(isOff)
    setIsOff((isOff) => !isOff);
  }

  function switchButton(){
    if(isOff === false){
      return "OFF"
    }
    else{
      return "ON"
    }
  }

  const color = isOff ? "red": "white";

  return <button style={{background: color}} onClick={changeButton}>{switchButton()}</button>;
}

export default Toggle;
