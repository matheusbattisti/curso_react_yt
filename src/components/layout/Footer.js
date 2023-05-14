import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import React, { useState, useEffect } from 'react';

import style from "./Footer.module.css"

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(_ => {
    const year = new Date().getFullYear()
    setCurrentYear(year.toString())
    }, [])

    return (
      <footer className={style.footer}>
        <ul className={style.social_list}>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p className={style.copy_right}>
          <span>Costs</span> &copy;{currentYear}
        </p>
    </footer>
  )
}

export default Footer