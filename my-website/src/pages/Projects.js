import SongotterCard from '../components/SongotterCard';
import PortfolioCard from '../components/PortfolioCard';
import songotterHome from '../assets/Songotter-Home.png';

export default function Projects(){
    return(
        <div className="container-lg">
            <h1 className='green'>PROJECTS</h1>
            <PortfolioCard
                title="Songotter" 
                description="Songotter Description"
                image={songotterHome}
                />
        </div>
    )
}