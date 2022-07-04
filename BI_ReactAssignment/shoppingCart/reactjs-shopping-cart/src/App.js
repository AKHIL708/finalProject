import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 style={{
                        display:"flex" , 
                        justifyContent:"center",
                        textShadow:"2px 2px 4px gray",
                        fontWeight:"bolder",
                        textDecoration:"underline"}} >Shopping Cart 👕</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

           
        </div>
    );
}

export default App;
