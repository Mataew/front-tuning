import React from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css'

const Profile = () => {


    const handleLogout = () => {
        localStorage.removeItem("token")
    }
    

    return (
        <div className='mainProfile'>
            <div className="sidebar">
                <h1>Мой профиль</h1>
                <span>Имя</span>
                <span>  Фамилия</span>
                <h4>Номер телефона:</h4>
                <span>012784</span>
                <NavLink onClick={handleLogout} to='/'>Выйти</NavLink>
            </div>
            <div className="cart">
                <h1>Мои заказы</h1>
            </div>
        </div>
    )
}

export default Profile;