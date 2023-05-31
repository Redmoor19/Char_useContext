import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import type { RootState } from '../store/store';
import { openCart } from '../slices/cartSlice';
import { ShoppingCart } from './ShoppingCart';

export function Navbar() {
    const cartQuantity = useSelector( (state: RootState) => state.cart.cartItems.reduce((sum, {quantity}) => sum + quantity, 0) );
    const dispatch = useDispatch();

    return(
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
                </Nav>
                {cartQuantity > 0 ?
                <Button 
                onClick={() => dispatch(openCart())}
                style={{width: "3rem", height: "3rem", position: "relative"}}
                variant='outline-primary'
                className='rounded-circle'
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.182 100.969" fill='currentColor'>
                <path id="shopping-cart" d="M32.718,105.354a3.725,3.725,0,0,1,0-7.449c13.743.048,49.991.013,64.17.023a8.243,8.243,0,0,0,8.069-6.418l8.052-34.867a6.7,6.7,0,0,0-6.5-8.209c-5.7,0-54.125-.219-78.927-.318L23.648,33.529a8.03,8.03,0,0,0-7.736-5.92H3.318a3.318,3.318,0,0,0,0,6.635H15.912a1.381,1.381,0,0,1,1.331,1.016l15.1,56.019a10.356,10.356,0,0,0-9.982,10.531,10.409,10.409,0,0,0,10.358,10.179h4.838a11.612,11.612,0,1,0,20.979,0H79.483a11.613,11.613,0,1,0,20.894-.175,3.316,3.316,0,0,0-1.058-6.46Zm20.3,11.612a4.977,4.977,0,1,1-4.981-4.977h.008A4.982,4.982,0,0,1,53.021,116.966Zm36.952,4.975a4.976,4.976,0,0,1-.081-9.952h.162a4.976,4.976,0,0,1-.081,9.952Zm16.557-66.847a.052.052,0,0,1,.013.056l-3.393,14.692H91.662l1.956-14.824,12.861.052A.053.053,0,0,1,106.531,55.094Zm-34.2,36.2V76.477H84.094L82.139,91.292Zm-16.452,0L53.9,76.477H65.691V91.292Zm-15.273,0h-.01A1.8,1.8,0,0,1,38.86,89.97L35.224,76.477H47.21l1.971,14.815Zm12.419-21.45-2-15,14.665.059V69.842Zm19.306,0V54.932l14.6.059-1.96,14.851Zm-28-15.023,2,15.023H33.435L29.37,54.759ZM96.888,91.292H88.831l1.955-14.815h10.832l-3.127,13.54A1.638,1.638,0,0,1,96.888,91.292Z" transform="translate(0 -27.609)"/>
                </svg>
                <div 
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: "white", 
                        width: "1.5rem", 
                        height: "1.5rem",
                        position: "absolute", 
                        bottom: 0, 
                        right: 0,
                        transform: "translate(25%, 25%)"}}>
                    {cartQuantity}
                </div>
            </Button> : null}
            </Container>
            <ShoppingCart />
        </NavbarBs>
    )
}