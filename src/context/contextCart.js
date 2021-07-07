import { createContext, useState, useContext, useEffect } from 'react';

export const ContextCart = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalValue, setTotalValue] = useState();

    useEffect(() => {
        let value = 0;
        cart.map(item => {
            const FormatValue = parseFloat(item.precoTotal) + parseFloat(value);
            value = (FormatValue).toFixed(2);
            return null
        });
        setTotalValue(value);
    }, [cart])

    const saveItem = (item) => {
        const newCart = cart;
        newCart.push(item)
        setCart([...newCart])
    }

    const removeItem = (index) => {
        const newCart = cart.filter((item, i) => i !== index);
        setCart([...newCart]);
    }

    const store = {
        saveItem,
        cart,
        totalValue,
        removeItem
    }

    return (
        <ContextCart.Provider value={store}>
            {children}
        </ContextCart.Provider>
    )
}

export const useCart = () => {
    const context = useContext(ContextCart);

    const {
        cart,
        saveItem,
        totalValue,
        removeItem,
    } = context;

    return {
        cart,
        saveItem,
        totalValue,
        removeItem
    }
}