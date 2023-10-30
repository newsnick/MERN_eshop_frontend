import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const initialAddress = shippingAddress?.address || ''
  const initialCity = shippingAddress?.city || ''
  const initialPostalCode = shippingAddress?.postalCode || ''
  const initialCountry = shippingAddress?.country || ''

  const [address, setAddress] = useState(initialAddress)
  const [city, setCity] = useState(initialCity)
  const [postalCode, setPostalCode] = useState(initialPostalCode)
  const [country, setCountry] = useState(initialCountry)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))

    navigate('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />{' '}
      <Link className='btn btn-light mb-3' to='/cart'>
        <i class='fa-solid fa-angle-left'> </i> <span> </span>
        Shopping Cart
      </Link>
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        {' '}
        <Form.Group controlId='address'>
          <Form.Label className='mt-2 mb-0'>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label className='mt-2 mb-0'>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='postalCode'>
          <Form.Label className='mt-2 mb-0'>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postalCode'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label className='mt-2 mb-0'>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary mt-3'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
