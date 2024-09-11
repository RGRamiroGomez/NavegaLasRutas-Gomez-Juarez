import { Link } from 'react-router-dom'
import { SelectCategoria } from './SelectCategoria'
import { CartWidget } from './CartWidget'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import CSSPlugin from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin);
export const NavBar = () => {
    const logo = useRef()
    useGSAP(()=>{
        gsap.to(logo.current,{x:()=>{Math.random(-20,20)},duration:3,rotation:180,repeat:-1,ease:'bounce',yoyo:true})
    },{scope:logo})
    return (
        <nav className='flex flex-row justify-between p-10 bg-bisque' >
            <Link to="/" style={{textDecoration:'none'}} className='link'>
                <h1 className='font-bold'>eGarden</h1>
                <img src="/logoSprout.svg" alt="logo eGarden (brote)"  className='w-1/8' ref={logo}/>
            </Link>
            <SelectCategoria></SelectCategoria>
            <CartWidget/>
        </nav>
    )
}

