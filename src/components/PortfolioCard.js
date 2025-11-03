
const PortfolioCard = ({title, description, image}) => {
    
    return (
    <div className="portfolio-card">
        <div className = 'left-card'>
            <div className = 'card-title'>{title}</div>
            
            <div className="portfolio-card-content">
    
                <p>{description}</p>
            </div>
        </div>
        <div className = 'right-card'>
            <img src={image} alt={title} class= 'card-img'/>
        </div>

    </div>
    )
}
export default PortfolioCard;