import './CollaboratorCard.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const CollaboratorCard = ({ collaborator, headerCardColor, onDelete, onFavorite }) => {
    
    const favorite = () => {
        onFavorite(collaborator.id)
    }
    
    return (
        <div className='collaborator-card'>
            <AiFillCloseCircle 
                size={ 25 }
                color='#fff'
                className='collaborator-card-delete'
                onClick={ () => onDelete(collaborator.id) }
            />
            <div 
                className='collaborator-card-header' 
                style={ { backgroundColor: headerCardColor } }
            >
                <img src={ collaborator.image } alt="" />
            </div>
            <div className='collaborator-card-body'>
                <h4>{ collaborator.name }</h4>
                <h5>{ collaborator.position }</h5>
                <div className='collaborator-card-favorite'>
                    {
                        collaborator.favorite 
                            ?   <AiFillHeart 
                                    size={ 25 } 
                                    color='#fff'
                                    onClick={ favorite } 
                                />
                            :   <AiOutlineHeart 
                                    size={ 25 } 
                                    color='#fff'
                                    onClick={ favorite } 
                                />
                    }
                </div>
            </div>
        </div>
    )
}

export default CollaboratorCard;