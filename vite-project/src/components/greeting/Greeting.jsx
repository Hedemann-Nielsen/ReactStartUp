import { useState } from "react"
import style from "./Greeting.module.scss"

export function Greeting () {
const [name, setName] = useState();
const handleInputChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
    <div className={style.greeting}>
        <form>
            <label 
            >Send en hilsen til: {name} </label>
            <input 
            type="text" 
            value={name} 
            onChange={handleInputChange}
            placeholder="Indtast navn"/>
        </form>
    </div>
    </>
  )
}
