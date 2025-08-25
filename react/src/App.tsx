
import './App.css'
import Greet from "./components/greet" //functiomal components
import Welcome from "./components/Welcome" //class components

function App() {

  return (
   <div>
      <Greet name ="john"/>
      <Welcome />
   </div>
      
  )
}

export default App
