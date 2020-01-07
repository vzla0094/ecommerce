import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderCont,
  LogoContainerCont,
  OptionsCont,
  OptionCont
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderCont>
    <LogoContainerCont to="/">
      <Logo className="logo" />
    </LogoContainerCont>
    <OptionsCont>
      <OptionCont to="/shop">SHOP</OptionCont>
      <OptionCont to="/shop">CONTACT</OptionCont>
      {currentUser ? (
        <OptionCont as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionCont>
      ) : (
        <OptionCont to="/signin">SIGN IN</OptionCont>
      )}
      <CartIcon></CartIcon>
    </OptionsCont>
    {hidden ? null : <CartDropdown></CartDropdown>}
  </HeaderCont>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
