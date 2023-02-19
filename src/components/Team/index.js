import CollaboratorCard from '../CollaboratorCard';
import './Team.css'

const Team = (props) => {
    return (
        (props.collaborators.length > 0) && 
        <section 
            className='team' 
            style={ { backgroundColor: props.secondaryColor } }
        >
            <h3 style={ { borderBottomColor: props.primaryColor } }>
                { props.team }
            </h3>

            <div className='team-collaborators'>            
                { 
                    props.collaborators.map(
                        collaborator => 
                            <CollaboratorCard 
                                key={ collaborator.name }
                                name={ collaborator.name }
                                position={ collaborator.position }
                                image={ collaborator.image }
                                headerCardColor={ props.primaryColor }
                            />
                    )
                }
            </div>
        </section>
    )
}

export default Team;