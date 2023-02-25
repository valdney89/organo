import { useState } from 'react';
import React from 'react';
import Banner from './components/Banner/Banner';
import CollaboratorForm from './components/CollaboratorForm';
import Team from './components/Team';
import { v4 as uuidv4 } from 'uuid';
import { Collaborator } from './shared/models/ICollaborator';
import { ITeam } from './shared/models/ITeam';
import { SelectOption } from './shared/models/ISelectOptions';

function App() {

  const [teams, setTeam] = useState<ITeam[]>([
    { 
      id: uuidv4(), 
      name: 'Programação', 
      color: '#57C278', 
    },
    { 
      id: uuidv4(), 
      name: 'Front-end', 
      color: '#82CFFA', 
    },
    { 
      id: uuidv4(), 
      name: 'Data Science', 
      color: '#A6D157',  
    },
    { 
      id: uuidv4(), 
      name: 'Devops',
      color: '#E06B69', 
    },
    { 
      id: uuidv4(), 
      name: 'Ux Design', 
      color: '#D86EBF', 
    },
    { 
      id: uuidv4(), 
      name: 'Inovação e Gestão', 
      color: '#FF8A29', 
    },
    { 
      id: uuidv4(), 
      name: 'Mobile', 
      color: '#FEBA05',  
    }
  ])

  const [collaborators, setCollaborator] = useState<Collaborator[]>([
    {
      id: uuidv4(),
      name: 'JULIANA AMOASEI',
      position: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: 'Programação',
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'VALDNEY NOGUEIRA',
      position: 'Desenvolvedor Front-end',
      image: 'https://github.com/valdney89.png',
      team: 'Front-end',
      favorite: true
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      position: 'Engenheiro de Software',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: 'Front-end',
      favorite: false
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      position: 'CEO',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: 'Inovação e Gestão',
      favorite: false
    },
  ])

  const addCollaborator = (newCollaborator: Collaborator) => {
    if(newCollaborator.team) {
      setCollaborator([...collaborators, newCollaborator])
    }
  }
  
  const deleteCollaborator = (id: string | undefined) => {
    if(!id) { return; }
    
    setCollaborator(collaborators.filter(collaborator => collaborator.id !== id))
  }

  const createTeam = (newTeam: ITeam) => {
    setTeam([...teams, { ...newTeam, id: uuidv4() }])
  }

  const favorite = (id: string | undefined) => {
    if(!id) { return; }

    setCollaborator(collaborators.map(
      collaborator => {
        if(collaborator.id === id) {
          collaborator.favorite = !collaborator.favorite
        }

        return collaborator;
      }
    ))
  }

  return (
    <div className="App">
      <Banner 
        url="/images/banner.png"
        alt="Banner mostrando um time dando as mãos"
      />

      <CollaboratorForm 
        onTeamSaved={ team => createTeam(team) }
        onCollaboratorSaved={ 
          collaborator => addCollaborator(collaborator)
        }
        teams={ teams as SelectOption[] }
      />

      { 
        teams.map(
          team => 
            <Team 
              key={ team.id } 
              team={ team.name } 
              color={ team.color }
              collaborators={ 
                collaborators.filter(
                  collaborator => collaborator.team === team.name
                )
              }
              onDelete={ deleteCollaborator }
              onFavorite={ favorite }
            />
        )
      }
    </div>
  );
}

export default App;
