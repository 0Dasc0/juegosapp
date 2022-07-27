import React from 'react'
import Navbarc from '../../components/navbar/index'
import Slider from '../../components/slider/index'
import Contenido from '../../components/contenido/index'
import Cards from '../../components/cards/index'

import f1 from '../../assets/images/1.jpeg'
import f2 from '../../assets/images/2.jpg'
import f3 from '../../assets/images/2.jpeg'
import Footer from '../../components/footer/index'

export const Home = () => {
  return (
    <>
       <Navbarc/>


<Slider/>

<center>
<Contenido/>
</center>

<div className='cards'>
<Cards 
  img={f1} 
  title='Horizon Zero Dawn' 
  text='Horizon Zero Dawn es un videojuego de acción, aventura y de mundo abierto desarrollado por Guerrilla Games'
  buttom='Ver mas' 
   />

<Cards 
  img={f2} 
  title='Until Dawn' 
  text='Cuando ocho amigos deciden pasar sus vacaciones invernales en una montaña alejada del resto de la civilización en Blackwood Pines'
  buttom='Ver mas' 
   />

<Cards 
  img={f3} 
  title='Metal Slug' 
  text='La historia se desarrolla a partir del año 2008 en adelante,​ cuando un escuadrón llamado Halcones Peregrinos debe frustrar los intentos de golpe de estado'
  buttom='Ver mas' 
   />
   


</div>

<Footer/>

    </>
  )
}
