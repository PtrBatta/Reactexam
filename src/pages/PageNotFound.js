import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <div>
        <h1>A keresett oldal nem található! 😔</h1>
        <Link to="/">Vissza a kezdőoldalra</Link>
    </div>
  )
}

export default PageNotFound;