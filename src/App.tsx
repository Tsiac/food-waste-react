import './App.css'
import { Outlet } from "react-router"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <Outlet />
      </LocalizationProvider>
    </>
  )
}

export default App
