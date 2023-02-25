import styles from './CollaboratorCard.module.scss';
import React from 'react';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Collaborator } from '../../shared/models/ICollaborator';

interface CollaboratorCardProps {
    collaborator: Collaborator
    headerCardColor: string 
    onDelete: (id: string | undefined) => void;
    onFavorite: (id: string | undefined) => void;
}

export default function CollaboratorCard ({ 
    collaborator,
    headerCardColor,
    onDelete ,
    onFavorite,
}: CollaboratorCardProps) {
    
    const favorite = () => {
        onFavorite(collaborator.id)
    }
    
    return (
        <div className={styles.collaboratorCard}>
            <AiFillCloseCircle 
                size={ 25 }
                color='#fff'
                className={styles.collaboratorCardDelete}
                onClick={ () => onDelete(collaborator.id) }
            />
            <div 
                className={styles.collaboratorCardHeader} 
                style={ { backgroundColor: headerCardColor } }
            >
                <img src={ collaborator.image } alt="" />
            </div>
            <div className={styles.collaboratorCardBody}>
                <h4>{ collaborator.name }</h4>
                <h5>{ collaborator.position }</h5>
                <div className={styles.collaboratorCardBodyFavorite}>
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