import about from '../assets/about.png';
import play_icon from '../assets/play-icon.png';


const About = () => {
  return (
    <div className='about my-24 mx-auto flex items-center justify-between' style={{width: '80%'}}>
      <div className='basis-2/5 relative about-left'>
        <img src={about} alt="" className='w-full rounded-xl' />
        <img src={play_icon} alt="" className='w-14 absolute' style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
      </div>
      <div style={{flexBasis: '54%'}} className='about-right'>
        <h3 className='font-bold text-sm md:text-md lg:text-md text-blue-600'>ABOUT UNIVERSITY</h3>
        <h2 className='font-extrabold text-2xl md:text-3xl max-w-80 md:max-w-96 mb-4 mt-2'>Nurturing Tomorrows Leaders Today</h2>
        <p className='mb-4 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, illum ipsum. Sit beatae enim voluptatem aperiam veritatis, delectus aliquid, iure consequatur officiis quis soluta incidunt. Atque praesentium mollitia veritatis aliquid sit vero porro assumenda labore et, similique quas minima temporibus libero laudantium natus molestiae itaque cupiditate dolorum soluta animi! Inventore?</p>
        <p className='mb-4 text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quaerat enim modi explicabo architecto quibusdam odit expedita tempore magni labore esse ad a natus quae molestias commodi, facilis eligendi rem? Temporibus maxime reiciendis sit quibusdam rem minus distinctio ab alias?</p>
        <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum nobis harum reprehenderit dolor natus quaerat voluptatibus, quisquam sequi fugit reiciendis. Odio fuga ab quos ea explicabo incidunt, nulla possimus debitis, suscipit, totam optio esse commodi.</p>
      </div>
    </div>
  );
}

export default About
