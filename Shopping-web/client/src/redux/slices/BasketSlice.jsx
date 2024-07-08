// import { createSlice,createAsyncThunk, combineSlices } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     Baskets:[],
//     emtyİtems:[],
//     selectedbaskets:{},
   

// }

// export const getProducts = async (BasketID) => {
//     try{
    
//      const cokkie = document.cookie.split(";")
//      const jwtToken =[]
//      const resultToken = cokkie.map((token) => {
//          if (token.startsWith("js")){
//              jwtToken.push(token)
//          }
        
//      })
//      const Token = jwtToken[0].split("=")[1]
//      const response = await axios.get(" http://127.0.0.1:3002/api/v1/basket/"+BasketID+"/"+Token)
//      if(typeof response.data.length == 'undefined' ){
//          return response.data.message
//      }
//      console.log(response.data)
//     }catch(err){
//          return console.log(err)
//     }
   
//  }


// export const Basketslice = createSlice({
//     name:"Baskets",
//     initialState,
//     reducers:{
//         setSelectedbaskets: (state,action) => {
//             state.selectedbaskets = action.payload;

//         }
//     },
//     extraReducers:(builder)=>{
//         builder.addCase(getProducts.fulfilled,(state,action) =>{
//             state.Baskets = action.payload;
//         } )
//     } 
// })

// export const {setSelectedbaskets} = Basketslice.actions

// export default Basketslice.reducer

