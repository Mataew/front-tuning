import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className='mainProfile'>
            <div className="sidebar">
                <h1>Мой профиль</h1>
                <span>Имя</span>
                <span>  Фамилия</span>
                <h4>Номер телефона:</h4>
                <span>012784</span>
            </div>
            <div className="cart">
                <h1>Мои заказы</h1>
            </div>
        </div>
    );
};

export default Profile;