import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import {
   HOME_ROUTE,CATALOG_ROUTE,BASKET_ROUTE,ORDER_ROUTE,DELIVERY_ROUTE
 } from '../../utils/constants'

 export const Header = () => {
   return (
      <header className='header'>
         <Link 
            to={HOME_ROUTE}
         >
            <div className='header__logo'>
               React
            </div>
         </Link>
         <div className='header__address'>
            <div className='header__address-icon'>
            
            </div>
            <div className='header__address-text'>
               Александровск-Са...
            </div>
         </div>
         <div className='header__send'>
            <p>Поиск бренда, товара, категории...</p>
            <div className='header__send-frame'>
               <div className='header__send-img'></div>
            </div>
         </div>
         <Link 
            to={BASKET_ROUTE}
         >
            <div className='header__basket'>
               <div className='header__basket-img'></div>
               <div className='header__basket-count'>10+</div>
            </div>
         </Link>
         <div className='header__avatar'></div>
      </header>
   )
}