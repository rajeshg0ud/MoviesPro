import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trailerId: null,
    }
    ,
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            console.log(action.payload)
            state.nowPlayingMovies= action.payload;
            
        },
        addPopularMovies:(state, action)=>{
            console.log(action.payload)
            state.popularMovies= action.payload;
            
        },
        addTopRatedMovies:(state, action)=>{
            console.log(action.payload)
            state.topRatedMovies= action.payload;
            
        },
        addUpComingMovies:(state, action)=>{
            console.log(action.payload)
            state.upComingMovies= action.payload;
            
        },
        addTrailerId:(state, action)=>{
            state.trailerId= action.payload;
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies, addTopRatedMovies,addUpComingMovies, addTrailerId}= movieSlice.actions;

export default movieSlice.reducer;