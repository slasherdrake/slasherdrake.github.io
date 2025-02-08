//import luffy from '../assets/luffysvg.js';
import logo from '../assets/DK.png';
import { Link } from 'react-router-dom';
export default function NavBar(){
    return (
        
            <div className='nav flex'>
                <div className='container-lg flex'>
                    <div className = 'nav-col '>
                            <div className='logo-container'>
                                <img src={logo} alt='drakes logo' className = 'logo'/>
                        
                            </div>
                            
                        
                            <div className='name'>
                                <div className='name-words'>DRAKE KENDALL</div>
                            
                            </div>
                    </div>
                    <div className='nav-col'>
                
                        <Link to='/' className='nav-right-box border-grey'>
                            HOME
                            <div className='nav-right-box under-text'>HOME</div>
                            <div className='under'></div>
                        </Link>
                        
                        <Link to='about' className='nav-right-box border-grey'>
                            ABOUT
                            <div className='nav-right-box under-text'>ABOUT</div>
                            <div className='under'></div>
                        </Link>
                        <Link to='projects' className='nav-right-box border-grey'>
                            PROJECTS
                            <div className='nav-right-box under-text'>PROJECTS</div>
                            <div className='under'></div>
                        </Link>
                    </div>
                </div>
            </div>
        
    )
}