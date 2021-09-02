import Navbar from "./Components/Navbar";
import Input from "./Components/Input";
import {useEffect} from "react"

function App() {
  useEffect(() => {
    document.querySelector("input").focus()
  }, [])
  
  return (
    <>
      <Navbar theme="dark" />
      <div className="container"> 
        <Input />
      </div>
    </>
  );
}

export default App;
