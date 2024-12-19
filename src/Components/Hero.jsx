import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="hero overflow-hidden bg-cover bg-center text-white px-5 md:px-20 lg:px-32 flex flex-col items-center justify-center">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-extrabold">We Ensure better education for a better world</h1>
        <p className="max-w-1xl mx-auto leading-tight my-6 text-sm lg:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate fugit nisi ipsam aliquid enim sapiente iure et neque odit, vel earum amet iste consequatur quasi eveniet illum, consectetur nostrum.</p>
      </div>
        <button className="border border-white-900 text-white py-3 px-6 rounded font-medium hover:bg-white hover:text-black transition duration-300 ease-in-out inline-flex items-center justify-center text-lg">Explore More <FontAwesomeIcon icon={faArrowRight} className='ml-4' /> </button>
    </div>
  );
}

export default Hero
