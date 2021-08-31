import React,{useEffect,useState} from 'react';
import { Navbar } from '../components/Navbar';
import {Modal} from '../components/Modal';
import {data} from '../static/data/ExperienceData'
import { LinkinInfo } from '../components/LinkIn_Info';
import { GithubInfo } from '../components/Github_Info';
import MobileCareerSlider from '../components/Mobile_career_slider';
import CareerMobileInfo from '../components/Career_mobile_info';

export default function Career() {
 
  /**
   * @name getWindowDimensions
   * @auther Jaehyun Jun
   * - Gets the client window dimensions
   */
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  /**
   * @name useWindowDimensions
   * @auther Jaehyun Jun 
   * @returns current client window dimension
   * - reset the client window dimention whenever the user resize the window
   */
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

  /**
   * @name onScroll
   * @auther Jaehyun Jun
   * Sets value of postion state with window scrolled Y value
   */
  function onScroll(){
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [])

  /**
   * @name openModal
   * @auther Jaehyun Jun
   * @param {Event} e 
   * - Toggles Modal and set value of current state with user definded object
   */
  const openModal = (e) => {
    setShowModal(prev => !prev);
    setCurrent(e.target.getAttribute("data-index"));
  }

  // Initialize States
  const [position, setPosition] = useState(0);
  const { height, width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const [current, setCurrent] = useState(0);

  return (
    <div className='career-page' style={{height:{height}, width:{width}}}>
      <div className='career-title-background' >
        <div className='none-filter-wrapper' style={position > height * 0.2 ? {backdropFilter:'blur(5px)'} : null}>
          <Navbar />
          <div className='career-heading' >
            <h1>
              Career
            </h1>
          </div>
          <div className='modal-container'>
            {data.map((company, index) => {
              return (
                <>
                <div className='info-container' >
                  <img src={company.imageSrc} alt={company.company}  onClick={openModal} data-index={index}/>
                </div>
                {index == current && <Modal showModal={showModal} setShowModal={setShowModal} data={company} key={index} />}
                </>
              )
            })};
          </div>
          <div className='social-network-container'>
            <LinkinInfo />
            <GithubInfo />
          </div>
          <div className={"mobile-career-container"}>
            <div className='modal-container-2'>
            <MobileCareerSlider />
            </div>
            <CareerMobileInfo />
          </div>
          <div className='vision-container'>
            <h1>My Vision</h1>
            <div className='vision-img-wrapper'>
              <img src='images/VisionInvest.png' alt='vision-invest' />
              <img src='images/UnderUpdate.png' alt='under-update' />
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}
