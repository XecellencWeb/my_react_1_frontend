import { useLocation} from "react-router"
import Header from "./Header"

const currentPage = (path)=>{

    if(path==='/')return 'Home Page'
    if(path==='/Action')return 'Action Games'
    if(path==='/Adventure')return 'Adventure Games'
    if(path==='/Arcade')return 'Arcade Games'
    if(path==='/Puzzle')return 'Puzzle Games'
    if(path==='/Educative')return 'Educative Games'

}


function Heading() {
    const {pathname}=useLocation()
    
  return (<>
  <Header/>
    <h1 className="heading">{currentPage(pathname)}</h1>
    </>
  )
}

export default Heading
