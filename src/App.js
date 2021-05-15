import { useEffect } from "react"
import AmbrosiaSpa from "./page/ambrosiaSpa"


const App = () => {
  useEffect(() => {
    document.title = "Ambrosia Spa";
  }, []);

  return (
    <>
      <AmbrosiaSpa/>
    </>
  )
}

export default App
