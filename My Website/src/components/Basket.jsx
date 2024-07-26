import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearBasket } from "../Redux/cardslice";
import { decrease } from "../Redux/cardslice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Basket() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  const items = useSelector((state) => state.card.items);
  const ref = useRef();
  const ref1 = useRef();

  const order = () => {
    if (items.length !== 0) {
      ref.current.innerText = "Order Posted Successfully!!";
    }

    setTimeout(temize, 2000);
  };
  const temize = () => {
    ref.current.innerText = "";
  };

  return (
    <div className="basket">
      <div className="basket-icon">
        <IconButton
          onClick={() => {
            toggleMenu();
          }}
          style={{ color: "black" }}
          aria-label="cart"
        >
          <StyledBadge badgeContent={items.length} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
      <div className={`basket-container ${menuOpen ? "open" : ""}`}>
        <h1 className="mybasket-title">MY BASKET</h1>
        <ul className="basket-items">
          {items.map((item, index) => (
            <li className="basket-item" key={index}>
              <img className="img-basket" src={item.image} alt="" />
              <button id="decrease" onClick={() => dispatch(decrease(item))}>
                {" "}
                DECREASE
              </button>
              <span id="quantity">quantity: {item.quantity}</span>
              <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                {" "}
                {(item.price * item.quantity).toFixed(2)}₺
              </span>
            </li>
          ))}
        </ul>
        <div className="basket-total">
          <button
            id="clear"
            onClick={() => {
              temize();

              dispatch(clearBasket());
            }}
          >
            CLEAR BASKET
          </button>
          <span style={{ fontWeight: "bold", fontSize: "17px" }} id="total">
            TOTAL:{" "}
            {items
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
            ₺
          </span>
          <button id="order" onClick={() => order()}>
            ORDER
          </button>
          <div ref={ref}></div>
        </div>
      </div>
    </div>
  );
}
