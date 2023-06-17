import React from 'react';

import resumeSvg from "../assets/resume.svg"

import styles from './Header.module.css';

function Header(){
    return <div className={styles.container}>
        <div className={styles.left}>
            <p className={styles.heading}>Elevate your <span>Resume,</span> Elevate your <span>Career!</span></p>
            <p className={styles.heading}>Build Your Resume. <span>It's Free</span></p>
        </div>
        <div className={styles.right}>
            <img src={resumeSvg} alt="Resume" />
        </div>
    </div>
}

export default Header;