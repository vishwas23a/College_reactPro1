
import CounterMain from '../CounterMain'
import NewCounterHandle from '../NewCounterHandle'
import Controlled from './Controlled'
import CardHandler from './components/CardHandler'
import Info from './components/Info'
import NewCounter from './components/NewCounter'

function App() {
  let lang=["java","javascript","kotlin","python"]



 return(
  // <Controlled/>
  <div>

  {/* <Info data={lang}/> */}
  {/* <CounterMain/> */}
  {/* <NewCounterHandle/> */}
  <CardHandler/>
  
  </div>
  )
}

export default App
