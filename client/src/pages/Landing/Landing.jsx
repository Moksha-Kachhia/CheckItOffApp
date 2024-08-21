import React from 'react';
import NavBar from '../../components/NavBar';
import {Link} from 'react-router-dom'
import landing from '../../assets/Landing.jpg';
import styles from './Landing.module.css';

function Landing() {
  return (
    <div>
      <NavBar active={"home"}/>
        <div className={styles.landing__wrapper}>
            <div className={styles.landing__text}>
                <h1>Improve Your Time Management With <span className="primaryText">CheckItOff!</span></h1>
            <div className='btnWrapper'>
            <Link to="/register" className="primaryBtn">Register</Link>
                <Link to="/login" className='secondaryBtn'>Login</Link>
            </div>
            </div>

            <div className={styles.landing__img}>
                <img src={landing} alt="landing" />
            </div>
      </div>
    </div>
  )
}

export default Landing;