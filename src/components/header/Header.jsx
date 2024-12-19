import React from 'react';
import  './Header.css';
import Phone from '../../assets/phone.svg';
import Heart from '../../assets/heart.svg';
import Cart from '../../assets/cart.svg';
import { IoIosArrowDown } from "react-icons/io";


const Header = () => {
    return (
        <div className={"header container"}>
            <div className={"logo"}>
                <h2>QPICK</h2>
            </div>
            <div className={"d-menu"}>
                <img src={Phone} alt="Phone" />
                <p>Выбрать модель телефона</p>
                <span style={{paddingTop: "7px"}}>
                    <IoIosArrowDown />
                </span>

            </div>
            <div className={"actions"}>
                <button className={"fav-btn"}>
                    <img src={Heart} alt="Heart" />
                    <span>2</span>
                </button>
                <button className={"cart.svg-btn"}>
                    <img src={Cart} alt="Cart" />
                    <span>1</span>
                </button>
            </div>
        </div>
    );
};

export default Header;