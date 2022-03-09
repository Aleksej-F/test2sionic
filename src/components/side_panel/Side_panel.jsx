import React from 'react'
import './Side_panel.scss'

export const SidePanel = () => {
   return (
      <aside className='aside'>
         <div className='aside__slide'>
            <div className='aside__slide-img'></div>
            <div className='aside__slide-blok'>
               <p>Получай товары БЕСПЛАТНО!</p>
               <div className='aside__slide-blok-button'>
                  Узнать подробнее
               </div>
            </div>
         </div>
         <div className='aside__slide slide1'>
            <div>Новая</div>
            <div>коллекция</div>
         </div>
         <div className='aside__slide slide1 slide2'>
            <div>Новая</div>
            <div>коллекция</div>
         </div>
         <div className='aside__slide slide1'>
            <div>Новая</div>
            <div>коллекция</div>
         </div>
      </aside>
   )
}