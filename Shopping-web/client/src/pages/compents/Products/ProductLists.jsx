import  {React, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from '../../../redux/slices/productsSlice';
import LoadingCompent from '../loadingCompent'
import "./style.css"
import {useNavigate} from 'react-router-dom'
function ProductLists() {


    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllProducts());

    }, []);

    
   
    
    return (
        <>
            <div className='Columns'>
                    {
                        products.map(item => (
                            <div className='imgColumn'  key={item}>
                                <div className='Row'>
                                  <img className='img' src={item.Url} alt="" />
                                  <div className='namePrice'>
                                        <h3>{item.Name}</h3>
                                  <div className='container'></div>
                                        <h3>{item.Price}</h3>
                                  <div className='container'></div>
                                        <button onClick={() => {navigate("/products/details/" + item._id)}} className='deatils'>Detay</button>    
                                  </div>

                                </div>
                                
                            </div>
                        ))
                    }
                    <LoadingCompent/>
            </div>
         
        </>
       
    );
}

export default ProductLists