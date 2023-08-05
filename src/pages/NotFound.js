import { EmojiFrown } from "react-bootstrap-icons"

function NotFound() {
  return (
    <div className="notFound">

        <h1><EmojiFrown scale={50}></EmojiFrown> Page Not Found</h1>
        <p>Am sorry but it seems like this page has been deleted from the server. try trying another page or reporting to us via our contact page.</p>
      
    </div>
  )
}

export default NotFound
