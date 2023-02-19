import './CollaboratorCard.css';

const CollaboratorCard = (props) => {
    return (
        <div className='collaborator-card'>
            <div className='collaborator-card-header' style={ { backgroundColor: props.headerCardColor } }>
                <img src={ props.image } alt="" />
            </div>
            <div className='collaborator-card-body'>
                <h4>{ props.name }</h4>
                <h5>{ props.position }</h5>
            </div>
        </div>
    )
}

export default CollaboratorCard;