import { createContext, useReducer } from "react";

export const CartContext = createContext();

const defaultCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            let updateItems = [...state.items];
            updateItems = [...state.items,action.item]
            return {
                items: updateItems,
                totalAmount: state.totalAmount + action.item.price * action.item.amount
            };
        case "REMOVE":
            return state;
        case "CLEAR":
            return state;
        default:
            return state;
    }
}


const CartProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: (item) => { dispatchCartAction({ type: "ADD",item }) },
        removeItem: () => { },
        clearItem: () => { },
    }
    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartProvider