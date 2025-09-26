import "./imgCard.css"


export default function ImgCard(props) {
console.log(props)

    return (
        <div className='image-card'>
            <img src={props.imagem} alt={props.caption || 'Imagem Padrão'} />
            
            <p className="image-card-caption"></p>
                {props.caption}
        </div>
    )
}
