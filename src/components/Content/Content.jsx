import React, { useState } from 'react';
import styles from './content.module.css'
import Footer from '../Footer/Footer';

const Content = (props) => {
    const [showDetails, setShowDetails] = useState(false);

    const showDetailsHandler = () => {
        setShowDetails(true);
    }

    const closeDetailsHandler = () => {
        setShowDetails(false);
    }

    return (
        <div className={styles.main} >
            <div className={styles.img_container}>
                <img src={props.image} alt='photo' />
            </div>
            <div className={styles.body_conteiner}>
                <div className={styles.name}>
                    <h3>{props.name}</h3>
                    <h3>{props.price}</h3>
                </div>
                <div className={styles.btn_details}>
                    <button
                        onClick={showDetailsHandler}
                    >
                        Детали
                    </button>
                </div>
                {showDetails && <div className={styles.details}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium qui nulla ullam? Sint culpa libero illo quo vero.
                    <button className={styles.close_details}
                        onClick={closeDetailsHandler}
                    >X</button>
                </div>}
            </div>
                <hr />
            <Footer />
        </div>
    );
};

export default Content;