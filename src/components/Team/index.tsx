
import styles from './Team.module.scss';
import React from 'react';
import hexToRgba from 'hex-to-rgba';
import CollaboratorCard from '../CollaboratorCard';
import { Collaborator } from '../../shared/models/ICollaborator';

interface TeamProps {
    collaborators: Collaborator[];
    color: string;
    team: string;
    onDelete: (id: string | undefined) => void;
    onFavorite: (id: string | undefined) => void;
}

export default function Team({
    collaborators,
    color,
    team,
    onDelete,
    onFavorite
}: TeamProps) {
    return (
        (collaborators.length > 0) 
        ? <section 
            className={styles.team}
            style={ { backgroundColor: hexToRgba(color, 0.6) } }
        >
            <h3 style={ { borderBottomColor: color } }>
                { team }
            </h3>

            <div className={styles.teamCollaborators}>            
                { 
                    collaborators.map(
                        collaborator => 
                            <CollaboratorCard 
                                key={ collaborator.name }
                                collaborator={ collaborator }
                                headerCardColor={ color }
                                onDelete={ onDelete }
                                onFavorite={ onFavorite }
                            />
                    )
                }
            </div>
        </section>
        : <></>
    )
}