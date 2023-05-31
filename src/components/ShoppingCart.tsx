import { Offcanvas, Stack } from "react-bootstrap";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../util/formatCurrency";
import storeItems from '../data/items.json';
import {useDispatch, useSelector} from 'react-redux';
import { closeCart } from "../slices/cartSlice";
import type { RootState } from "../store/store";

export function ShoppingCart () {
    const {isOpen, cartItems} = useSelector( (state: RootState) => state.cart);
    const dispatch = useDispatch();

    return(
        <Offcanvas show={isOpen} onHide={() => dispatch(closeCart())} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => 
                        <CartItem key={item.id} {...item} />
                    )}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0))}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}