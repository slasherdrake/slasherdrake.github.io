
const PortfolioCard = ({title, description, image}) => {
    
    return (
    <div className="portfolio-card">
        <div className = 'card-title'>{title}</div>
        <img src={image} alt={title} class= 'card-img'/>
        <div className="portfolio-card-content">
    
            <p>{description}</p>
        </div>
    </div>
    )
}
export default PortfolioCard;