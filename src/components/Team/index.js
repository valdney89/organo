import CollaboratorCard from '../CollaboratorCard';
import './Team.css'
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    return (
        (props.collaborators.length > 0) && 
        <section 
            className='team' 
            style={ { backgroundColor: hexToRgba(props.color, 0.6) } }
        >
            <h3 style={ { borderBottomColor: props.color } }>
                { props.team }
            </h3>

            <div className='team-collaborators'>            
                { 
                    props.collaborators.map(
                        collaborator => 
                            <CollaboratorCard 
                                key={ collaborator.name }
                                collaborator={ collaborator }
                                headerCardColor={ props.color }
                                onDelete={ props.onDelete }
                                onFavorite={ props.onFavorite }
                            />
                    )
                }
            </div>
        </section>
    )
}

export default Team;