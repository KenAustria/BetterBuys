import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import ProductProfile from './pages/ProductProfile/ProductProfile';
import Cart from './pages/Cart/Cart';
import Success from './pages/Success/Success';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useAppSelector } from './hooks';
import { RootState } from './store';
import React from 'react';

const App: React.FC = () => {
    const user = useAppSelector((state: RootState) => state.user.currentUser);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductProfile />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/success" element={<Success />} />
                <Route path="/signin" element={user ? <Navigate to="/" /> : <Signin />} />
                <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
            </Routes>
        </Router>
    );
};

export default App;
