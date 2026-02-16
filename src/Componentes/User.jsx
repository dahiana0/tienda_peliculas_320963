import "../stylessheets/User.css";

export const User = ({image,nombre,estado}) => {
  return (
    <>

    <div className="character-card resplandor">
        <div className="character-image">
        <img src={image} alt={nombre}/>
        </div>
        <div className="character-info">
            <h2 className="character-name">{nombre}</h2>
            <div className="character-status">
                <span className="status-dot"></span> 
                <span>{estado}</span> 
            </div>
            <div className="info-section">
                <div className="info-label">Last known location:</div>
                <div className="info-value">Pawn Shop Planet</div>
            </div>
            <div className="info-section">
                <div className="info-label">First seen in:</div>
                <div className="info-value">Raising Gazorpazorp</div>
            </div>
        </div>
    </div>

    </>
  )
}





