import styles from './Card.module.css'
import RedButton from './RedButton';
import Image from 'next/image';


function Card() {
    return <div className={styles.card}>
        <p >
            <Image src={'/trophy-small.svg'} height={15} width={15}  alt='logo'/>
            
            Current Plan
            </p>
            
            <div className='flex justify-between  '>
                
                <Image src="/opened-folder.svg" height={55 } width={55 } alt="logo" />
                
                <RedButton/>
                
            </div>
            
            
    
        
      
        
  </div>;
}

export default Card;
