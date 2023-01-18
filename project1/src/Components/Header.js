import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Header(){
   return(
      <div className="container">
         
         <nav className="navbar navbar-expand navbar-light bg-dark bg-gradient justify-content-between">
            <a className="navbar-brand text-light mx-2" href="/">AnimeNews</a>
            
            <ul className="nav navbar-nav justify-content-center">
               <li className="nav-item">
                  <Link className="nav-link text-light" to='/home'>Home</Link>
               </li>
               <li class="nav-item">
                  <Link className="nav-link text-light" to='/popular'>Popular</Link>
               </li>
               <li class="nav-item">
                  <Link className="nav-link text-light" to='/anime_movies'>Anime Movies</Link>
               </li>
               <li class="nav-item">
                  <Link className="nav-link text-light" to='/Recent_realise'>Recent Realise</Link>
               </li>
               <li class="nav-item">
                  <Link className="nav-link text-light" to='/genre'>Genre</Link>
               </li>
            </ul>
         </nav>
         
         
         
         
      
      </div>
   )
}