import "./Pokecard.css"

const Pokecard = ({id, name, type, base_experience}) => {
    let imgSrc= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
        <div className="Pokecard">
        <h4 className="Pokecard-title">{name}</h4>
        <img className="Pokecard-img" src={imgSrc} alt={name} />
        
            <div>Type: {type}</div>
            <div>EXP: {base_experience}</div>
           
    </div>
    )
}

export default Pokecard
