import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[],
    selectedProduct:{},
    loading:false,

}
const BASE_URL ="http://127.0.0.1:4000/api/v1/products"

export const getAllProducts =  createAsyncThunk("getAllProducts", async() =>{
    const response = await axios.get(`${BASE_URL}`);
    return response.data
},[])

export const productsSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        setSelectedProduct: (state,action) => {
            state.selectedProduct = action.payload;

        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state) => {
            state.loading= true;
        })
        builder.addCase(getAllProducts.fulfilled,(state,action) =>{
            state.loading = false;
            state.products = action.payload;
        } )
    } 
})

export const {setSelectedProduct} = productsSlice.actions

export default productsSlice.reducer

