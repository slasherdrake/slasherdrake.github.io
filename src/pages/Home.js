
import luffy from '../assets/luffy.png';
import LinkedIn from '../assets/LI-Logo.png';
import Github from '../assets/GitHub_Logo_White.png';
export default function Home(){
    return (
        <div className='container-xl'>
            <h1 className='green'>Hey there! I'm Drake Kendall,</h1>
            <div className='bar'></div>
            <h2 className='green'>a Software Developer and Master's student in Software</h2>
            <h2 className='green'>Engineering at the University of Arizona. Welcome to my website!</h2>
            <h2 className ='green'>Contact: drakekendall@email.com</h2>
            <button className = 'link-button'>
                <a href="https://www.linkedin.com/in/drake-kendall/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt='LinkedIn Link'></img>
                </a>
            </button>
            <button className = 'link-button'>
                <a href="https://github.com/slasherdrake" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt='Github link'></img>
                </a>
            </button>
        
            
        </div>
    )
}