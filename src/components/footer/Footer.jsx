import React from 'react'
import './Footer.scss'

export const Footer = () => {
   return (
      <footer className='footer'>
         <div className='footer__container'>
            <div className='footer__logo'>
               React
            </div>
            <div className='footer__container-blok'>
               <div className='footer__messenger'>
                  Просоединяйтесь к нам
                  <div className='footer__messenger-container'>
                     <div className='footer__messenger-facebook'></div>
                     <div className='footer__messenger-vk'></div>
                     <div className='footer__messenger-inst'></div>
                  </div>
               </div>
               <div className='footer__application'>
                  Устанавливайте приложение
                  <div className='footer__application-container'>
                     <div className='footer__application-play'></div>
                     <div className='footer__application-store'></div>
                     
                  </div>
               </div>
            </div>
         </div>
      </footer>   
   )
}