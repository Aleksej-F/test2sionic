import React from 'react'
import './Header.scss'

export const Header = () => {
   return (
      <header className='header'>
         <div className='header__logo'>
            React
         </div>
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
         <div className='header__basket'>
            <div className='header__basket-img'></div>
            <div className='header__basket-count'>10+</div>
         </div>
         <div className='header__avatar'></div>
      </header>
   )
}