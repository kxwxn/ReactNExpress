import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <Link to='/cart' className={styles.cart} />
            <Link to='/signinup' className={styles.signinup} />
            <div className={styles.slide}>
                <div className={styles.navi}>
                    <Link to='/'>NOWIK</Link>
                    <Link to='/photograph'>PHOTOGRAPH</Link>
                    <Link to='/3d'>THREE-DIMENSION</Link>
                    <Link to='/softwareengineering'>SOFTWARE-ENGINEERING</Link>
                </div>
                <div className={styles.navi}>
                    <Link to='/'>NOWIK</Link>
                    <Link to='/photograph'>PHOTOGRAPH</Link>
                    <Link to='/3d'>THREE-DIMENSION</Link>
                    <Link to='/softwareengineering'>SOFTWARE-ENGINEERING</Link>
                </div>
            </div>
        </div>
    )
}

export default Header