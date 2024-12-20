import programme_1 from '../assets/program-1.png';
import programme_2 from '../assets/program-2.png';
import programme_3 from '../assets/program-3.png';
import programme_icon_1 from '../assets/program-icon-1.png';
import programme_icon_2 from '../assets/program-icon-2.png';
import programme_icon_3 from '../assets/program-icon-3.png';


const Programme = () => {
  return (
    <div className='programs flex mx-auto my-14 lg:my-16 items-center justify-between' style={{width: '80%'}}>
      <div style={{flexBasis: '31%'}} className='program relative'>
        <img className='w-full rounded-xl block' src={programme_1} alt="" />
          <div className='caption absolute top-0 left-0 right-0 bottom-0 rounded-xl flex flex-col items-center justify-center text-white cursor-pointer' style={{background: 'rgba(0,15,152,0.3)'}}>
            <img className='w-16 mb-4' src={programme_icon_1} alt="" />
            <p>Bachelors Programme</p>
          </div>
      </div>
      <div style={{flexBasis: '31%'}} className='relative program'>
        <img className='w-full rounded-xl block' src={programme_2} alt="" />
          <div className='absolute top-0 left-0 right-0 bottom-0 rounded-xl flex flex-col items-center justify-center text-white cursor-pointer caption' style={{background: 'rgba(0,15,152,0.3)'}}>
            <img className='w-14 mb-4' src={programme_icon_2} alt="" />
            <p>Masters Programme</p>
          </div>
      </div>
      <div style={{flexBasis: '31%'}} className='relative program'>
        <img className='w-full rounded-xl block' src={programme_3} alt="" />
          <div className='absolute top-0 left-0 right-0 bottom-0 rounded-xl flex flex-col items-center justify-center text-white cursor-pointer caption' style={{background: 'rgba(0,15,152,0.3)'}}>
            <img className='w-14 mb-4' src={programme_icon_3} alt="" />
            <p>PHD Programme</p>
          </div>
      </div>
    </div>
  );
}

export default Programme
