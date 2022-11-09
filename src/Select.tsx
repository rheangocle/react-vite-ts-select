import { useState } from 'react';

import styles from './select.module.css'
type SelectOption = {
  label: string
  value: any
}

type SelectProps = {
  options: SelectOption[]
  onChange: (value: SelectOption | undefined) => void
  value?: SelectOption 
};

export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(prev => !prev) } tabIndex={0} className={styles.container}>
      <span className={styles.value}>
        {value?.label}
      </span>
      <button className={styles["clear-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`} >
        {options.map(option => (
          <li className={styles.option} key={option.label}>{option.label}</li>
        ))}
      </ul>
    </div>
  )
};