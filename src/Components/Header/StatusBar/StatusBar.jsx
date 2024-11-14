import React from 'react';
import s from './StatusBar.module.scss';
import signal from './img/MobileSignal.svg'
import battery from './img/Battery.svg'
import wifi from './img/Wifi.svg'
function StatusBar(props) {
    return (
        <div className={s.statusBar}>
            <div>9:41</div>
            <div className={s.row}>
                <img src={signal} alt=""/>
                <img src={wifi} alt=""/>
                <img src={battery} alt=""/>
            </div>
        </div>
    );
}

export default StatusBar;