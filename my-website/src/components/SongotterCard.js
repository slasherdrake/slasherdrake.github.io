import PortfolioCard from './PortfolioCard';
import songotterHome from '../assets/Songotter-Home.png';
export default function SongotterCard() {
    return (
    <PortfolioCard
        title="Songotter"
        description="A music streaming service that allows users to listen to music from their favorite artists."
        image={songotterHome}
    />
    );
}