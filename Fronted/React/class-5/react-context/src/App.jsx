
import './App.css'
import Header from './Component/Header'
import Content from './Component/Content'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <h1>React Context API</h1>
 <Header/>
 <Content/>
    </>
  )
}

export default App
