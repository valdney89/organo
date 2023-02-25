import React, { ReactElement } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    children: ReactElement | string,
    type: "button" | "submit" | "reset" | undefined
}

export default function Button({ children, type }: ButtonProps) {
  return (
    <button className={styles.button} type={type}>
        { children }
    </button>
  )
}
