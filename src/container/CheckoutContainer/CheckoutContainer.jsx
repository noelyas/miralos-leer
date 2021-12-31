import React from 'react'
import CartSummary from '../../components/CartSummary/CartSummary'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

const CheckoutContainer = () => {

    return (
        <div>
            <CartSummary />
            <CheckoutForm />
        </div>
    
    )
}

export default CheckoutContainer
