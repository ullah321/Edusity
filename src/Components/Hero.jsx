import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="hero overflow-hidden bg-cover bg-center text-white px-5 md:px-20 lg:px-32 flex flex-col items-center justify-center pt-24">
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">We Ensure better education for a better world</h1>
        <p className="max-w-2xl mx-auto leading-tight my-6 text-sm lg:text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate fugit nisi ipsam aliquid enim sapiente iure et neque odit, vel earum amet iste consequatur quasi eveniet illum, consectetur nostrum.</p>
      </div>
        <button className="border border-white-900 text-white py-2 px-5 rounded font-medium hover:bg-white hover:text-black transition duration-300 ease-in-out inline-flex items-center justify-center text-md">Explore More <FontAwesomeIcon icon={faArrowRight} className='ml-4' /> </button>
    </div>
  );
}

export default Hero
