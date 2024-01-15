import { useState } from "react";
import style from "./Counter.module.scss"

export  function Counter() {
    const [count, setCount] = useState(0);

  return (
    <>
    <div className={style.counter}>
    <button 
    type="button"
    onClick={() => setCount(count + 1)}
    >Klik her
    </button>
    <p>Du har klikket på knappen {count} antal gange</p>
        
    </div>
    </>
  )
}
