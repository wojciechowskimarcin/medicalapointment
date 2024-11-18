import s from "./Header.module.scss";
import StatusBar from "./StatusBar/StatusBar.jsx";
import MainHeader from "./MainHeader/MainHeader.jsx";
import React from 'react';

function Header(props) {
    return (
        <header>
            <StatusBar />
            <MainHeader />
        </header>
    );
}

export default Header;