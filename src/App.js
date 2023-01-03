import Home from "./routes/Home/Home"
import { Routes, Route } from 'react-router-dom'
import Newborn from "./routes/Newborn/Newborn";
import SixMonth from "./routes/SixMonth/SixMonth";
import Tots from "./routes/Tots/Tots";
import Preschooler from "./routes/Preschooler/Preschooler";
import SchoolAged from "./routes/SchoolAged/SchoolAged";

function App() {
  // const navigate = useNavigate();
  // function handleClick () {
  //   navigate(this.props.path)
  // }
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/newborn' element={<Newborn/>}/>
      <Route path='/6month-12month' element={<SixMonth/>}/>
      <Route path='/tots' element={<Tots/>}/>
      <Route path='/preschooler' element={<Preschooler/>}/>
      <Route path='/school-aged' element={<SchoolAged/>}/>      
    </Routes>

  )
}

export default App;
