// import { MovieSharp } from '@material-ui/icons'
import React,{useEffect, useState} from 'react'
import "./Result.css"
import VideoCard from './VideoCard'
import axios from './axios'
import FlipMove from "react-flip-move"
// import requests from './requests'

function Result({ selectedOption }) {
    //state
    const[movies,setMovies]=useState([]);

    useEffect(()=>{
        //run this code once when the results component loads/mounts
        async function fetchData(){
            const request=await axios.get(selectedOption);
            setMovies(request.data.results)
            return request;
            // console.log(request);
            
        }
        fetchData();

    },[selectedOption])
    return (
        <div className="results">
        <FlipMove>
        {movies.map((movie)=>(
            <VideoCard key={movie.id} movie={movie}/>
        ))}
        </FlipMove>
       
       
            
        </div>
    )
}

export default Result;
