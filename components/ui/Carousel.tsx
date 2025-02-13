import React from "react";
import styles from './Carousel.module.css'
import { url } from "inspector";
function Carousel() {
    return <section className={styles.carousel__wrapper}>
        <h3>Get Started - Quick Actions</h3>
        
        <div className={styles.carousel}>
            
        <CarouselSlide/>
        <CarouselSlide/>
        <CarouselSlide/>
        </div>
        
      
        
        
        
        
        
  </section>;
}

export default Carousel;


function CarouselSlide() {
    return (
        <div style={{ backgroundImage: "url('./start-here.svg')" }} className="min-w-[494px] h-[308px] bg-cover bg-no-repeat bg-center ">
            <div className="flex justify-between">
                <div>
                    
                <h3>
                    
                Edit your first Mesh
                </h3>
                </div>
                
                <Image src="/" />
                
                
            </div>
            
        </div>
    )
}
