import React from 'react';
import s from './MainHeader.module.scss';



function MainHeader(props) {


    return (
        <div>
            <div className={s.floatMenu}>
                <div className={s.closeWindow}>X</div>
                <nav>
                    <ul>
                        <li><a href="#">Calendar</a></li>
                        <li><a href="#">Chat</a></li>
                        <li><a href="#">Profile</a></li>
                    </ul>
                </nav>
            </div>
            <div className={s.firstBlock}>
                <span className={s.hi}>Hi, Steaven</span>
                <div className={s.ring}>
                    <div className={s.icon}></div>
                    <span className={s.redDot}></span>
                    <div className={s.menu}></div>
                </div>
            </div>
            <h3 className={s.mainHeader}>Let’s find<br />
                your top doctor!</h3>
            <input type="text" placeholder="Search here"></input>
        </div>
    );
}

export default MainHeader;