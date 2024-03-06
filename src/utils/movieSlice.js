import { createSlice } from "@reduxjs/toolkit";


const movieSlice= createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null,
        trendingMovies:null,
        trailerId: null,
        trailerInfo:null,
    }
    ,
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies= action.payload;
            
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies= action.payload;
            
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies= action.payload;
            
        },
        addUpComingMovies:(state, action)=>{
            state.upComingMovies= action.payload;
            
        },
        addTrendingMovies:(state, action)=>{
            state.trendingMovies= action.payload;
            
        },
        addTrailerId:(state, action)=>{
            state.trailerId= action.payload;
        },
        addTrailerInfo:(state, action)=>{
            state.trailerInfo= action.payload;
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies, addTopRatedMovies,addUpComingMovies, addTrailerId, addTrendingMovies, addTrailerInfo}= movieSlice.actions;

export default movieSlice.reducer;