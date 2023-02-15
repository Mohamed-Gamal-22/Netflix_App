import {createContext} from "react";
import axios from 'axios'
import {useEffect, useState } from 'react';


export let movieContext = createContext([]);

export function MovieContextProvider(props){
    
    // const token = localStorage.getItem("token");
    // const user_id = userData._id ;

    //////////////////////////////////////////
    const [movies, setMovies] = useState([])
    const [trendingAll, setTrendingAll] = useState([]);
    const [data, setData] = useState([]);
    const [tv, setTv] = useState([]);
    const [allNotes, setAllNotes] = useState([]);

    //////////////////////////////////////////
    //////////////////////////////////////////
    const getMovies = async() => {
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=941d7c8adac166c6d12ed7428eec2753`);
        setMovies(data.results);
        }

    const getDataFromApi = async() => {
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=941d7c8adac166c6d12ed7428eec2753`);
        setTrendingAll(data.results);
    }

    const getDataAny = async(mediaType = "all") => {
        let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=941d7c8adac166c6d12ed7428eec2753`);
        setData(data.results);
      }

      const getTv = async() => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=941d7c8adac166c6d12ed7428eec2753`);
    setTv(data.results);
    }
          
    const changeType =  (type) => {
        getDataAny(type)
    }

    const getAllNotes = async () => {
        let {data} = await axios.post(`https://sticky-note-fe.vercel.app/getUserNotes`, {token : localStorage.getItem("token"), userID : props.userData._id});
        setAllNotes(data.Notes);
    }    


    // why when i comment these lines cant be called all above functions !
    useEffect(() =>{
        getDataFromApi()
        getMovies()
        getDataAny();
        getTv()
    },[])

    useEffect(() => {
        if(props.userData !== null){
            getAllNotes()
        }
    }, [props.userData])

    ///////////////////////////////////////////
    ///////////////////////////////////////////
    
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////





    

    return (
        <movieContext.Provider value=
        {{movies, trendingAll, data, tv, changeType, allNotes}}>
            {props.children}
        </movieContext.Provider>
    )
}