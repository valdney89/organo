import './CollaboratorForm.css'

import { useState } from 'react'

import TextField from "../TextField/TextField"
import SelectField from '../SelectField'
import Button from '../Button'

const CollaboratorForm = (props) => {

    const onSave = (event) => {
        event.preventDefault()
        props.onCollaboratorSaved({
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

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    return (
        <section className='collaborator-form'>
            <form onSubmit={ onSave }>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField 
                    label="Nome" 
                    required={ true } 
                    placeholder="Digite o Nome..."
                    value={ name }
                    onTyped={ value => setName(value) }
                />
                <TextField 
                    label="Cargo" 
                    required={ true } 
                    placeholder="Digite o Cargo..." 
                    value={ position }
                    onTyped={ value => setPosition(value) }
                />
                <TextField 
                    label="Imagem" 
                    required={ true } 
                    placeholder="Informe o endereço da imagem..." 
                    value={ image }
                    onTyped={ value => setImage(value) }
                />
                <SelectField 
                    label="Time" 
                    required={ true } 
                    items={ props.teams }
                    value={ team }
                    onSelected={ value => setTeam(value) } 
                />
                <Button type="submit">Criar Card</Button>
            </form>
        </section>
    )
}

export default CollaboratorForm