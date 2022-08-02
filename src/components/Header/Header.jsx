import React from "react";
import "./Header.css"
import logo from '../../image/logo.png'

const Header = (props) => {

    let page1 = 'https://swapi.dev/api/people/';
    let page2 = 'https://swapi.dev/api/people/?page=2';
    let page3 = 'https://swapi.dev/api/people/?page=3';

    return (
        <div className="header">
            <img className="logo" src={logo} alt='logo' />
            <div>

            </div>
            <div className="block_pages">
                <button className="page_btn" onClick={ev => props.changePage(page1)}>1</button>
                <button className="page_btn" onClick={ev => props.changePage(page2)}>2</button>
                <button className="page_btn" onClick={ev => props.changePage(page3)}>3</button>
            </div>


        </div>

    );
}

export default Header;