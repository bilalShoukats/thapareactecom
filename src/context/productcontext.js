//createContext
//provider
//consumer=> is ka ander ya  useContextApi
////
 
import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import  reducer  from "../Reducer/productReduce";
    const AppContext = createContext();

    const API = "https://api.pujakaitem.com/api/products";

    const initialstate={
        isLoading:false,
        isError:false,
        Products:[],
        featureProducts:[],
        //2nd api
        isSingleLoading:false,
        singleProduct:{},

        };

    const AppProvider = ({children})=>{
        const [state, dispatch]=useReducer(reducer, initialstate);
     
        const getProducts = async  (url)=>{
            dispatch({type: "SET_LOADING" });
            try{
                const res = await axios.get(url);
                // console.log('responst',res)
                const products = await res.data;
                
                dispatch({type:"SET_API_DATA",payload:products});
                console.log('products',products)
                
               }catch (error ) {
                dispatch({type: "API_ERROR" });
                                
                 }
       };
           

       //MY 2nd api call for Single product

       const getSingleProduct = async(url)=>{
        dispatch({type: "SET_SINGLE_LOADING" });

        try{
            
            const res = await axios.get(url);
            console.log('res',res);
            const singleProduct =await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct});

        }catch(error){
            dispatch({type: "SET_SINGLE_ERROR" });
            console.log('errsr',error)
        }

       };


        useEffect(()=>{
        getProducts(API)

              },[]);


        return <AppContext.Provider value={{...state,getSingleProduct}}>{children}</AppContext.Provider>


    } 

    // custommmmmmmm Hooook 

    const useProduContext  =()=>{
        return useContext(AppContext)
    };
    /// custom Hooook

    export {AppProvider,AppContext,useProduContext }