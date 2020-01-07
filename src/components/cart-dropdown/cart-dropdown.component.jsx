import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  CartDropdownCont,
  CartItemsCont,
  EmptyMessageCont,
  CustomButtonCont
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownCont>
    <CartItemsCont>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageCont className="empty-message">
          Your cart is empty
        </EmptyMessageCont>
      )}
    </CartItemsCont>
    <CustomButtonCont
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButtonCont>
  </CartDropdownCont>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
