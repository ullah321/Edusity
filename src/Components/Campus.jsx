import gallery_1 from '../assets/gallery-1.png';
import gallery_2 from '../assets/gallery-2.png';
import gallery_3 from '../assets/gallery-3.png';
import gallery_4 from '../assets/gallery-4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Campus = () => {
  return (
    <div className='campus my-20 mx-auto text-center' style={{width: '80%'}}>
      <div className='gallery flex items-center justify-between mb-10'>
        <img className='rounded-xl' src={gallery_1} alt="" />
        <img className='rounded-xl' src={gallery_2} alt="" />
        <img className='rounded-xl' src={gallery_3} alt="" />
        <img className='rounded-xl' src={gallery_4} alt="" />
      </div>
      <button className="bg-blue-700 text-white py-3 px-6 mt-4 mb-12 rounded-lg font-medium hover:border hover:border-blue-600 hover:bg-white hover:text-blue-700 transition duration-300 ease-in-out inline-flex items-center justify-center text-lg">See more here <FontAwesomeIcon icon={faArrowRight} className='ml-4' /> </button>
    </div>
  );
}

export default Campus
