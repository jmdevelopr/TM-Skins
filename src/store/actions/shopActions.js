export const addToCart = item => {
    return {
        type: 'ADD',
        item
    }
}

export const subQuantity = item => {
    return {
        type: 'SUBTRACT',
        item
    }
}