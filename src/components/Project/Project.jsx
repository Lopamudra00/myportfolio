import React from "react";
import './Project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import work1 from '../../img/work1.png';
import work2 from '../../img/work2.png';
import work3 from '../../img/work3.png';
import work4 from '../../img/work4.png';
import { useContext } from "react";
import { themeContext } from "../../Context";
const Project = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="project" id="project">
            <span style={{ color: darkMode ? 'white' : '' }}>Recent</span>
            <span>Projects</span>
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='project-slider'
            >
                <SwiperSlide>
                    <img src={work1} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={work2} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={work3} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={work4} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Project;