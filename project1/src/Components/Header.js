import 'bootstrap/dist/css/bootstrap.min.css'
// import {Link} from "react-router-dom"
export default function Header(){
   return(
      <>
      
      
         <div className="container bg-dark">
            
            <nav className="navbar navbar-default navbar-fixed-top " role="navigation">
               <a className="navbar-brand text-light" href="#">AnimeList</a>
               <ul className="nav nav-navbar d-inline-flex px-2 " >
                  <li >
                     <a className=' btn btn-default text-light px-2 stretched-link' href="#">Home</a>
                  </li>
                  <li>
                     <a className='btn btn-default text-light px-1'  href="#">Recent Release</a>
                  </li>
                  <li>
                     <a className='btn btn-default text-light px-1'  href="#">Popular</a>
                  </li>
                  <li>
                     <a className='btn btn-default text-light px-1'  href="#">Anime Movies</a>
                  </li>
                  <li>
                     <a className='btn btn-default text-light px-1'  href="#">Genre</a>
                  </li>
               </ul>
            </nav>
            
         </div>
         
      </>
   )
}