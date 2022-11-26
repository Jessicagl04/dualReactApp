
import reactLogo from './assets/react.svg'
import './App.css'
import counterApp from './components/counterApp'
import weatherApp from './components/weatherApp'

function App() {
  

  return (
    <div className="App">
      <h1>My DualReactApp</h1>
      <div className='container'>
        <counterapp/>
        <weatherApp/>
      </div>
    </div>
  )
}

export default App
