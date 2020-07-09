//not tested yet, potentionally broken

export const placeOrder = (orderInfo, userInfo, ownProps) => {
    return (dispatch, getState) => {
        const doc = {
            orderInfo,
            userInfo,
            status: 'placed'
        }
        ownProps.firestore.collection('projects').add(doc)
        .then(console.log('order placed')
        .catch(err => console.log(err))
        );
    }
}