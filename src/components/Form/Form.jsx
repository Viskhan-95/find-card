import React from 'react';
import styles from './form.module.css';

const Form = (props) => {
    return (
        <div className={styles.conteiner}>
            <input className={styles.form}
            placeholder='Введите название кросовки'
                type='text'
                onChange={(e) => props.setInputText(e.target.value)}
                text={props.inputText}
            />
        </div>
    );
};

export default Form;