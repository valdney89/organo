import './TextField.css'

const TextField = (props) => {

    const onTyping = (event) => {
        props.onTyped(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{ props.label }</label>
            <input
                type="text"
                onChange={ onTyping }
                required={ props.required }
                placeholder={ props.placeholder }
                value={ props.value }
            ></input>
        </div>
    )
}

export default TextField