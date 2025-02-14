import React from "react";
import styles from './Carousel.module.css'
import Image from "next/image";
import SliderToggler from "./SliderToggler";
import ToggleController from "./ToggleController";
function Carousel() {
    return <section className={styles.carousel__wrapper}>
        <ToggleController />
       
        <h3>Get Started - Quick Actions</h3>
        
        <div className={styles.carousel}>
            
        <CarouselSlide/>
        <CarouselSlide/>
        <CarouselSlide/>
        <CarouselSlide/>
        <CarouselSlide/>
        </div>
        
      
        
        
        
        
        
  </section>;
}

export default Carousel;


function CarouselSlide() {
    return (
        <div style={{ backgroundImage: "url('./start-here.svg')" }} className="min-w-[494px] h-[308px] bg-cover bg-no-repeat bg-center p-8 flex flex-col-reverse      ">
            <div className="flex justify-between  ">
                <div>
                    
                    <h3 className="text-[2rem] font-bold">Edit your first Mesh</h3>
                    <p className="">Learn the basics of how to use OOR3D</p>
                </div>
                
                
                <button className={styles.link} >
                    
                <Image src="/go-to-link.svg" height={20} width={20} alt="link" />
                </button>
                
                
            </div>
            
        </div>
    )
}



