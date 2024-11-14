import React from 'react';
import s from './Main.module.scss';
function Main(props) {
    return (
        <div>
            <div className={s.hi}>Hi, Steaven</div>
            <h3 className={s.mainHeader}>Let’s find<br />
                your top doctor!</h3>
            <input type="text" placeholder="Search here"></input>
        </div>
    );
}

export default Main;