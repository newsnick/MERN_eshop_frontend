import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  UPDATE_CART_ITEM_COUNT,
  RESET_CART_ITEM_COUNT,
} from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://eshop-backend-9njr.onrender.com/api/products/${id}`
  )

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

  // Update cart item count
  dispatch(updateCartItemCount())
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

  // Update cart item count
  dispatch(updateCartItemCount())
}

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  })

  localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  })

  localStorage.setItem('paymentMethod', JSON.stringify(data))
}

export const updateCartItemCount = () => (dispatch, getState) => {
  const {
    cart: { cartItems },
  } = getState()
  const itemCount = cartItems.reduce((acc, item) => acc + item.qty, 0)
  dispatch({
    type: UPDATE_CART_ITEM_COUNT,
    payload: itemCount,
  })
}

export const resetCartItemCount = () => (dispatch) => {
  dispatch({
    type: RESET_CART_ITEM_COUNT,
  })
}
