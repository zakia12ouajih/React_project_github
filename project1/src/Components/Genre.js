import { Link } from "react-router-dom"
export default function Genre(){
   return(
      <>
      <div class="container ">
         <nav className="navbar navbar-expand  bg-secondary  justify-content-center">
            
            <ul className="nav navbar-nav  justify-content-center">
               <li className="nav-item mx-auto">
                  <Link className="nav-link text-light" to='/action'>Action</Link>
               </li>
               <li class="nav-item mx-5">
                  <Link className="nav-link text-light" to='/drama'>Drama</Link>
               </li>
               <li class="nav-item mx-5">
                  <Link className="nav-link text-light" to='/game'>Game</Link>
               </li>
               <li class="nav-item mx-5">
                  <Link className="nav-link text-light" to='/school'>School Life</Link>
               </li>
               <li class="nav-item mx-5">
                  <Link className="nav-link text-light" to='/historical'>Historical</Link>
               </li>
            </ul>
         </nav>
         </div>

      </>
   )
}