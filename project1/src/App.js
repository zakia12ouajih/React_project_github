import { BrowserRouter, Route, Routes } from "react-router-dom";
import Action from "./Components/Action";
import AnimeMovies from "./Components/AnimeMovies";
import Drama from "./Components/Drama";
import Footer from "./Components/Footer";
import Game from "./Components/Game";
import Genre from "./Components/Genre";
import Header from "./Components/Header";
import Historical from "./Components/Historical";
import Home from "./Components/Home";
import Popular from "./Components/Popular";
import RecentRelease from "./Components/RecentRealease";
import School from "./Components/School";



export default function App(){
  return(
    <div >
    <BrowserRouter>
    
    <Header/>
    <Footer/>
    <Routes>
      
      <Route path="/action" element={<Action/>}/>
      <Route path="/drama" element={<Drama/>}/>
      <Route path="/game" element={<Game/>}/>
      <Route path="/historical" element={<Historical/>}/>
      <Route path="/school" element={<School/>}/>



      <Route path="/home" element={<Home/>}/>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/anime_movies" element={<AnimeMovies/>}/>
      <Route path="/recent_realise" element={<RecentRelease/>}/>
      <Route path="/genre" element={<Genre/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}