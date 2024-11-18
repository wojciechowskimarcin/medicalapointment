import React from 'react';
import doctor01 from './img/doctor01.png';
import doctor02 from './img/doctor02.png';
import './ListDoctors.scss';

const doctorData = [
    {
        title: "Dr.",
        photo: doctor01,
        fname: "Jenny ",
        sname: "Wilson",
        specialist: "Dental Surgeon",
        rank: 4.8,
        color: ["#ffd2a1", "#ffefdf"]
    },
    {
        title: "Dr.",
        photo: doctor02,
        fname: "Kristin",
        sname: "Watson",
        specialist: "General Dentist",
        rank: 4.8,
        color: ["#a0fbde", "#c7f9e9"]
    }
]

function Doctor({tit, photo, fname, sname, specialist, rank, color}) {
    const style = {
        background: `url("${photo}"), radial-gradient(${color[0]}, ${color[1]})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `contain`,
        backgroundPosition: `center bottom`,

    }
    return (
        <li>
            <div className="photo" style={style}></div>
            <div className="text">
                <div className="drName">{tit} {fname} {sname}</div>
                <div className="drSpecialist">{specialist}</div>
                <div className="rank">{rank}</div>
            </div>
        </li>
    )
}

function ListDoctors(props) {
    return (
        <div>
            <ul className="listDoctors">

                {doctorData.map(element => (
                    <Doctor tit={element.title} photo={element.photo}
                    fname={element.fname} sname={element.sname}
                    specialist={element.specialist} rank={element.rank}
                            color={element.color}
                    key={element.fname+element.sname}/>
                ))}

            </ul>
        </div>
    );
}

export default ListDoctors;