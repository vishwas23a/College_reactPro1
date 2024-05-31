
import { Route, Routes } from 'react-router-dom'
import CounterMain from '../CounterMain'
import NewCounterHandle from '../NewCounterHandle'
import Controlled from './Controlled'
import CardHandler from './components/CardHandler'
import Info from './components/Info'
import NewCounter from './components/NewCounter'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Comp2 from './components/Comp2'
import About from './components/About'
import Counter2 from './components/Counter2'
import Product1 from './components/Product1'
import Product2 from './components/Product2'
import Product3 from './components/Product3'
import Student from './components/Student'
import StudentInfo from './components/StudentInfo'
import PracState from './components/PracState'
import PracUseeffect from './components/PracUseeffect'
import Reducer from './components/Reducer'
import Context from './components/Context'
import Login from './components/Login'

function App() {
  // let lang=["java","javascript","kotlin","python"]



 return(
  // <Controlled/>
  <div>
    {/* <CounterMain/> */}
    {/* <PracState/> */}
    {/* <PracUseeffect/> */}
    {/* <Reducer/> */}
    {/* <Context/> */}
    <Login/>
{/* <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/CardHandler' element={<CardHandler/>}/>
      <Route path='/Comp2' element={<Comp2/>}/>
      <Route path='/About' element={<About/>}/>
      <Route  path='/StudentInfo' element={<StudentInfo/>}>
        <Route path='/StudentInfo/:name ' element={<StudentInfo/>}/>
        </Route>
      <Route path='/Counter2' element={<Counter2/>}> 
        <Route path='Product1' element={<Product1/>}/>
        <Route path='Product2' element={<Product2/>}/>
        <Route path='Product3' element={<Product3/>}/>
      </Route>
      <Route path='*' element={<Error/>}/>

    </Routes>
  {/* <Info data={lang}/> */}
  {/* <CounterMain/> 
  <NewCounterHandle/> */}
  {/* <CardHandler/> */}
  
  </div>
  )
}

export default App
