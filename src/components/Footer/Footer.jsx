import React, { useState } from 'react';
import styles from './footer.module.css'

const Footer = () => {
    const [isDisabled, setIsDisabled] = useState(false);

    const btnTextAdd = "Добавить в корзину";
    const btnTextDelete = "Уже в корзине";

    const isDisabledHandler = () => {
        setIsDisabled(true);
    }

    const isActiveHandler = () => {
        setIsDisabled(false);
    }

    return (
        <div className={styles.footer_conteiner} >
            <div className={styles.text} >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ad laboriosam pariatur consequuntur est enim accusantium eveniet.
            </div>
            <div className={styles.btn_add_del}>
                <button className={styles.btn_add}
                    disabled={isDisabled}
                    onClick={isDisabledHandler}
                >
                    {(isDisabled && btnTextDelete) || (!isDisabled && btnTextAdd)}
                </button>
                {isDisabled && <div className={styles.delete_card} >
                    <button className={styles.delete} 
                        onClick={isActiveHandler}
                    >
                        Удалить из корзины
                    </button>
                </div>
                }

            </div>
        </div>
    );
};

export default Footer;