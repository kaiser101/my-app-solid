import { createStore } from 'solid-js/store';
import { createContext, useContext } from 'solid-js';

const CartContext = createContext([]);

const CartContextProvider = (props) => {
    const [items, setItems] = createStore([]);

    return (
        <CartContext.Provider value={{ items, setItems }}>
            {props.children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartContextProvider, useCartContext };
