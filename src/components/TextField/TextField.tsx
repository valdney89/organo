import styles from './TextField.module.scss';
import React from 'react';

interface TextFieldProps {
    onTyped: (value: string) => void;
    label: string;
    required?: boolean;
    placeholder: string;
    value: string;
    type: 'text' | 'date' | 'number' | 'password' | 'email';
}

const TextField = ({
    onTyped,
    label,
    required = false,
    placeholder,
    value,
    type = 'text'
}: TextFieldProps) => {

    const onTyping = (event: React.ChangeEvent<HTMLInputElement>) => {
        onTyped(event.target.value)
    }

    return (
        <div className={styles.textField}>
            <label>{ label }</label>
            <input
                type={ type }
                onChange={ onTyping }
                required={ required }
                placeholder={ placeholder }
                value={ value }
            ></input>
        </div>
    )
}

export default TextField