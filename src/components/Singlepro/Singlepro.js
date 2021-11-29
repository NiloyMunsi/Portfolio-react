import React from 'react';

const Singlepro = (props) => {
    const { name, img } = props.pro;
    return (
        <div className="">
            <img className="profile-pic" src={img} alt="" />
            <h2>Name: {name}</h2>

        </div>
    );
};

export default Singlepro;