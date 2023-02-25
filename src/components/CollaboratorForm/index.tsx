import styles from './CollaboratorForm.module.scss';
import React from 'react';

import { useState } from 'react'

import TextField from "../TextField/TextField"
import SelectField from '../SelectField'
import Button from '../Button'
import { Collaborator } from '../../shared/models/ICollaborator';
import { ITeam } from '../../shared/models/ITeam';
import { SelectOption } from '../../shared/models/ISelectOptions';

interface FormularioProps {
    onCollaboratorSaved: (collaborator: Collaborator) => void;
    onTeamSaved: (team: ITeam) => void;
    teams: SelectOption[]
}

const CollaboratorForm = ({
    onCollaboratorSaved,
    onTeamSaved,
    teams
}: FormularioProps) => {

    const onSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onCollaboratorSaved({
            name,
            position,
            image,
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    const onSaveTeam = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onTeamSaved({
            color: teamColor,
            name: teamName,
        })
        setTeamName('')
        setTeamColor('')
    }

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const [teamColor, setTeamColor] = useState('')
    const [teamName, setTeamName] = useState('')

    return (
        <section className={styles.collaboratorForm}>
            <form onSubmit={ onSave }>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    label="Nome" 
                    required
                    placeholder="Digite o nome..."
                    value={ name }
                    onTyped={ value => setName(value) }
                />
                <TextField 
                    label="Cargo" 
                    required
                    placeholder="Digite o cargo..." 
                    value={ position }
                    onTyped={ value => setPosition(value) }
                />
                <TextField 
                    label="Imagem" 
                    required
                    placeholder="Informe o endereço da imagem..." 
                    value={ image }
                    onTyped={ value => setImage(value) }
                />
                <SelectField 
                    label="Time" 
                    required
                    items={ teams }
                    value={ team }
                    onSelected={ value => setTeam(value) } 
                />
                <Button type="submit">Criar Card</Button>
            </form>

            <form onSubmit={ onSaveTeam }>
                <h2>Preencha os dados para criar um novo time.</h2>
                <TextField 
                    label="Nome do time" 
                    required
                    placeholder="Digite o nome do time..."
                    value={ teamName }
                    onTyped={ value => setTeamName(value) }
                />
                <TextField 
                    label="Cor do time" 
                    required
                    placeholder="Digite a cor do time..." 
                    value={ teamColor }
                    onTyped={ value => setTeamColor(value) }
                />
                <Button type="submit">Criar Novo Time</Button>
            </form>
        </section>
    )
}

export default CollaboratorForm