const initState = {
    cart: []
};

const shopReducer = (state = initState, action) => {
    if (action.type === 'ADD') {
        let isDuplicate = false;
        state.cart.forEach((item, index) => {
            if (item.id === action.item.id) {
                isDuplicate = true;
                let newCart = state.cart
                newCart[index].quantity += 1;
                return Object.assign({}, state, {
                    cart: newCart
                })
            }
        });

        if (isDuplicate === false) {
            let newCart = state.cart;
            newCart.push(action.item);
            return {...state, cart: newCart}
        }
    }
    return state;
}

export default shopReducer;