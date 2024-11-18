// eslint-disable-next-line no-unused-vars
import React from 'react';
import s from "./Main.module.scss"
import Categories from "./Categories/Categories.jsx";
import ListDoctors from "./ListDoctors/ListDoctors.jsx";

function Main(props) {
    return (
        <main>
            <Categories />
            <ListDoctors />
        </main>

    );
}

export default Main;