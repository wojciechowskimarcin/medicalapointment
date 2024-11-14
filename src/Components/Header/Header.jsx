import s from "./Header.module.scss";
import StatusBar from "./StatusBar/StatusBar.jsx";
import Main from "./Main/Main.jsx";
import React from 'react';

function Header(props) {
    return (
        <header>
            <StatusBar />
            <Main />
        </header>
    );
}

export default Header;