import React from "react";
import { Link } from "react-router-dom";
import EmptyNet from "../assets/img/NotFound.png";

export const CartEmpty: React.FC = () => (
  <div className="cart cart--empty">
    <h2>Корзина пустая :(</h2>
    <img src={EmptyNet} alt="Корзина пуста" />

    <Link to="/" className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  </div>
);
