import { useState } from 'react';
import logo from '../../src/assets/logo.png';
import { useEffect } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);


  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
  }


  return (
    <div className='absolute top-0 left-0  w-full z-10'>
      <nav className={`${sticky ? 'dark-nav' : ''} w-full text-white py-3 md:p-1 fixed top-0 left-0 flex items-center justify-between  mx-auto px-6 md:px-6 lg:px-32`}>
      <img src={logo} alt="" className='w-40 lg:w-52' />
        <ul className={showMobileMenu ? '' : 'hide-mobile-menu'}>
          <li className='inline-block my-6 mx-6 text-xl transition duration-300 ease-in-out cursor-pointer hover:text-blue-400'><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li className='inline-block my-6 mx-6 text-xl transition duration-300 ease-in-out cursor-pointer hover:text-blue-400'><Link to='programs' smooth={true} offset={-300} duration={500}>Programme</Link></li>
          <li className='inline-block my-6 mx-6 text-xl transition duration-300 ease-in-out cursor-pointer hover:text-blue-400'><Link to='about' smooth={true} offset={-180} duration={500}>About</Link></li>
          <li className='inline-block my-6 mx-6 text-xl transition duration-300 ease-in-out cursor-pointer hover:text-blue-400'><Link to='campus' smooth={true} offset={-270} duration={500}>Campus</Link></li>
          <li className='inline-block my-6 mx-6 text-xl transition duration-300 ease-in-out cursor-pointer hover:text-blue-400'><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
          <li className='inline-block my-6 mx-6 text-xl transition duration-300 ease-in-out cursor-pointer hover:text-blue-400'><Link to='contact' smooth={true} offset={-270} duration={500}><button className='btn bg-white text-black py-2 px-6 rounded-full font-medium'>Contact</button></Link></li>
        </ul>
        <FontAwesomeIcon icon={faBars} className='lg:hidden text-2xl block cursor-pointer' onClick={toggleMenu} />
      </nav>
    </div>
  );
}

export default Navbar