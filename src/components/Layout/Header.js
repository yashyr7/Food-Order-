import Ract from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return <>
        <haeder className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </haeder>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food'/>
        </div>
    </>
}

export default Header