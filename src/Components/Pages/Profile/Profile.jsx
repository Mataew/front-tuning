import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoad } from '../../../redux/features/reducerProfile';
import './Profile.css'

const Profile = () => {

    const dispatch = useDispatch()

    const token = useSelector(state => state.application.token)


    useEffect(() => {
        dispatch(userLoad(token))
    }, [])

    

    const user = useSelector(state => state.profilfeReducer.user)

    console.log(user);

    const handleLogout = () => {
        localStorage.removeItem("token")
        window.location.reload()
    }
    

    return (
        <div className='mainProfile'>
            <div className="sidebar">
                {user.map((item) => {
                    return (<>
                        <h1>Мой профиль</h1>
                        <span className='name'>{item.firstName}</span>
                        <span className='name'>  {item.lastName}</span>
                        <h4>Номер телефона:</h4>
                        <span>{item.number}</span>
                        <button onClick={handleLogout}>Выйти</button>
                        </>)
                })}
            </div>
            <div className="cart">
                <h1>Мои заказы</h1>
            </div>
        </div>
    )
}

export default Profile;