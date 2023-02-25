import styles from './SelectField.module.scss'
import React from 'react'
import { SelectOption } from '../../shared/models/ISelectOptions';

interface SelectFieldProps {
    onSelected: (value: string) => void;
    label: string;
    required: boolean;
    value: string;
    items: SelectOption[]
}

export default function SelectField({
    onSelected,
    label,
    required,
    value,
    items
}: SelectFieldProps) {

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelected(event.target.value)
    }

    return(
        <div className={styles.selectField}>
            <label>{ label }</label>
            <select 
                onChange={ onSelect }
                required={ required } 
                value={value}
            >
                <option value="">Selecione...</option>
                { 
                    items.map(item => 
                        <option key={ item.id }>
                            { item.name }
                        </option>) 
                }
            </select>
        </div>
    )
}