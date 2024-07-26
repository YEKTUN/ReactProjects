import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserById } from '../Redux/homeslice';
import Pagination from '@mui/material/Pagination';
import Basket from '../components/Basket';
import { useParams } from 'react-router-dom';
import { addToBasket} from '../Redux/cardslice';
import { removeAllItemFromBasket } from '../Redux/cardslice';




function Products() {
  const products = useSelector((state) => state.home.products);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;
  const [counts, setCounts] = useState({});
  const{id}=useParams()
  const product=products.find((product) => product.id === id)
  const count=useSelector((state)=>state.home.count)
 
  useEffect(() => {
    dispatch(fetchUserById());
  }, [dispatch]);

  useEffect(() => {
    // Her ürün için ayrı bir sayıcı oluştur
    const initialCounts = {};
    products.forEach((product) => {
      initialCounts[product.id] = 0;
    });
    setCounts(initialCounts);
  }, [products]);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const increment = (productId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: prevCounts[productId] + 1 <= products.find((product) => product.id === productId).rating.count
        ? prevCounts[productId] + 1
        : prevCounts[productId],
    }));
  };

  const decrement = (productId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: prevCounts[productId] - 1 >= 0 ? prevCounts[productId] - 1 : prevCounts[productId],
    }));
  };

  return (
    <div className="products-container">
      <Basket />
      <h1 className="title1">PRODUCTS</h1>
      <ul className="product">
        {currentProducts?.map((a) => (
          <li key={a.id} className="per-product">
            <img className="img"src={a.image} alt={a.title} />
            <div className="product-info">
              <div>
                <p>{a.price}₺</p>
                <p>{a.title}</p>
                <p>Rate: {a.rating.rate}</p>
                <p>Stock: {a.rating.count}</p>
              </div>
             
            </div>
            <div className='add-deletebtn'>
            <button onClick={()=>{
              dispatch(addToBasket(a))
              
              
             
                
              
              console.log(a.id);
            }} id='add'>Add</button>
            <button id='delete' onClick={() => dispatch(removeAllItemFromBasket(a))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <Pagination count={Math.ceil(products.length / productsPerPage)} page={currentPage} onChange={handleChange} />
      </div>
    </div>
  );
}

export default Products;
