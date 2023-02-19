import './SelectField.css'

const SelectField = (props) => {

    const onSelect = (event) => {
        props.onSelected(event.target.value)
    }

    return(
        <div className='select-field'>
            <label>{ props.label }</label>
            <select 
                onChange={ onSelect }
                required={ props.required } 
                value={props.value}
            >
                <option value="">Selecione...</option>
                { 
                    props.items.map(item => 
                        <option key={ item.id }>
                            { item.name }
                        </option>) 
                }
            </select>
        </div>
    )
}

export default SelectField