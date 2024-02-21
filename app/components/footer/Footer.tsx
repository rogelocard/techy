import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import FooterList from './FooterList';
// Icones
import {MdFacebook} from 'react-icons/md'
import {AiFillInstagram, AiFillTwitterCircle, AiFillYoutube} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-slate-700 text-slate-200 text-sm mt-16'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Categorias de compra</h3>
            <Link href="#">Celulares</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Relojes</Link>
            <Link href="#">Televisores</Link>
            <Link href="#">Accesorios</Link>
          </FooterList>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Servicio al cliente</h3>
            <Link href="#">Contactenos</Link>
            <Link href="#">Politicas de envio</Link>
            <Link href="#">Retornos & Cambios</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className='w-full md:w-1/3 mb-6 md:mb-0'>
            <h3 className='text-base font-bold mb-2'>Nosotros</h3>
            <p className='mb-2'>En nuestra tienda de dispositivos electronicos, nos dedicamos a proveer los ultimos
              y mas geniales dispositivos y accesorios a nuestros clientes. Con una amplia seleccion de telefonos,
              televisores, computadores portatiles, desktops, relojes y accessorios.
            </p>
            <br />
            <p>&copy; {new Date().getFullYear()} Hotbed4stores. Todos los derechos reservados.</p>
          </div>
          <FooterList>
            <h3 className='text-base font-bold mb-2'>Siguenos</h3>
            <div className='flex gap-2'>
              <Link href="#"> <MdFacebook size={24}/> </Link>
              <Link href="#"> <AiFillTwitterCircle size={24}/> </Link>
              <Link href="#"> <AiFillInstagram size={24}/> </Link>
              <Link href="#"> <AiFillYoutube size={24}/> </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  )
}

export default Footer