import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import user_1 from '../assets/user-1.png';
import user_2 from '../assets/user-2.png';
import user_3 from '../assets/user-3.png';
import user_4 from '../assets/user-4.png';
import { useRef } from "react";


const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className="testimonials my-20 mx-auto px-20 relative" style={{width: '80%'}}>
        <FontAwesomeIcon icon={faArrowLeft} className="absolute p-3 lg:p-5 md:p-5 cursor-pointer bg-blue-800 rounded-full text-white text-1xl md:text-2xl lg:text-2xl" style={{top: '50%', transform: 'translateY(-50%)', left: '0'}} onClick={slideBackward} />
        <FontAwesomeIcon icon={faArrowRight} className="absolute p-3 lg:p-5 md:p-5 cursor-pointer bg-blue-800 rounded-full text-white text-1xl md:text-2xl lg:text-2xl" style={{top: '50%', transform: 'translateY(-50%)', right: '0'}} onClick={slideForward} />
      <div className="overflow-hidden">
        <ul ref={slider} className="flex" style={{ width: '200%', transition: '0.5s'}}>
            <li className="p-5" style={{width: '50%'}}>
                <div className="rounded p-3 md:p-10 lg:p-10" style={{lineHeight: '1.4', boxShadow: '0 0 20px rgba(0,0,0, 0.05)'}}>
                    <div className="flex items-center mb-5">
                        <img src={user_1} alt="" className="rounded-full border border-blue-800 mr-4 w-12 md:w-16 lg:w-16" />
                        <div className="">
                            <h2 className="font-bold text-md md:text-lg lg:text-lg">William Jackson</h2>
                            <span className="text-sm md:text-md lg:text-md">Edusity,USA</span>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, asperiores, itaque molestiae tenetur sit blanditiis quod amet aliquam a quidem aspernatur aliquid. Facere at dolor aliquam porro cum aut earum totam enim a, sequi, error maxime, laborum nihil ducimus minus.</p>
                </div>
            </li>
            <li className="p-5" style={{width: '50%'}}>
                <div className=" rounded p-3 md:p-10 lg:p-10" style={{lineHeight: '1.4', boxShadow: '0 0 20px rgba(0,0,0, 0.05)'}}>
                    <div className="flex items-center mb-5">
                        <img src={user_2} alt="" className="rounded-full border border-blue-800 mr-4 w-12 md:w-16 lg:w-16" />
                        <div className="">
                            <h2 className="font-bold text-md md:text-lg lg:text-lg">William Jackson</h2>
                            <span className="text-sm md:text-md lg:text-md">Edusity,USA</span>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, asperiores, itaque molestiae tenetur sit blanditiis quod amet aliquam a quidem aspernatur aliquid. Facere at dolor aliquam porro cum aut earum totam enim a, sequi, error maxime, laborum nihil ducimus minus.</p>
                </div>
            </li>
            <li className="p-5" style={{width: '50%'}}>
                <div className=" rounded p-3 md:p-10 lg:p-10" style={{lineHeight: '1.4', boxShadow: '0 0 20px rgba(0,0,0, 0.05)'}}>
                    <div className="flex items-center mb-5">
                    <img src={user_3} alt="" className="rounded-full border border-blue-800 mr-4 w-12 md:w-16 lg:w-16" />
                        <div className="">
                            <h2 className="font-bold text-md md:text-lg lg:text-lg">William Jackson</h2>
                            <span className="text-sm md:text-md lg:text-md">Edusity,USA</span>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, asperiores, itaque molestiae tenetur sit blanditiis quod amet aliquam a quidem aspernatur aliquid. Facere at dolor aliquam porro cum aut earum totam enim a, sequi, error maxime, laborum nihil ducimus minus.</p>
                </div>
            </li>
            <li className="p-5" style={{width: '50%'}}>
                <div className=" rounded p-3 md:p-10 lg:p-10" style={{lineHeight: '1.4', boxShadow: '0 0 20px rgba(0,0,0, 0.05)'}}>
                    <div className="flex items-center mb-5">
                    <img src={user_4} alt="" className="rounded-full border border-blue-800 mr-4 w-12 md:w-16 lg:w-16" />
                        <div className="">
                            <h2 className="font-bold text-md md:text-lg lg:text-lg">William Jackson</h2>
                            <span className="text-sm md:text-md lg:text-md">Edusity,USA</span>
                        </div>
                    </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, asperiores, itaque molestiae tenetur sit blanditiis quod amet aliquam a quidem aspernatur aliquid. Facere at dolor aliquam porro cum aut earum totam enim a, sequi, error maxime, laborum nihil ducimus minus.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials