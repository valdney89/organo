import { useState } from 'react';
import Banner from './components/Banner/Banner';
import CollaboratorForm from './components/CollaboratorForm';
import Team from './components/Team';

function App() {

  const teamsData = [
    { 
      id: 1, 
      name: 'Programação', 
      primaryColor: '#57C278', 
      secondaryColor: '#D9F7E9'
    },
    { 
      id: 2, 
      name: 'Front-end', 
      primaryColor: '#82CFFA', 
      secondaryColor: '#E8F8FF' 
    },
    { 
      id: 3, 
      name: 'Data Science', 
      primaryColor: '#A6D157', 
      secondaryColor: '#F0F8E2' 
    },
    { 
      id: 4, 
      name: 'Devops',
      primaryColor: '#E06B69', 
      secondaryColor: '#FDE7E8' 
    },
    { 
      id: 5, 
      name: 'Ux Design', 
      primaryColor: '#D86EBF', 
      secondaryColor: '#FAE5F5' 
    },
    { 
      id: 6, 
      name: 'Inovação e Gestão', 
      primaryColor: '#FF8A29', 
      secondaryColor: '#FFEEDF' 
    },
    { 
      id: 7, 
      name: 'Mobile', 
      primaryColor: '#FEBA05', 
      secondaryColor: '#FFF5D9' 
    }
  ]

  const [collaborators, setCollaborator] = useState([])

  const onNewCollaboratorAdded = (collaborator) => {
    if(collaborator.team) {
      setCollaborator([...collaborators, collaborator])
    }
  }

  return (
    <div className="App">
      <Banner />

      <CollaboratorForm 
        onCollaboratorSaved={ 
          collaborator => onNewCollaboratorAdded(collaborator)
        }
        teams={ teamsData }
      />

      { 
        teamsData.map(
          team => 
            <Team 
              key={ team.id } 
              team={ team.name } 
              primaryColor={ team.primaryColor }
              secondaryColor={ team.secondaryColor }
              collaborators={ 
                collaborators.filter(
                  collaborator => collaborator.team === team.name
                )
              }
            />
        )
      }
    </div>
  );
}

export default App;
