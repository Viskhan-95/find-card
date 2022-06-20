import React, { useState } from 'react';
import Form from './Form/Form';
import Content from './Content/Content';
import styles from './app.module.css';
import cards from './cards';

function App() {
    const [inputText, setInputText] = useState('');
    console.log(inputText);

    const findCard = cards.filter((card, index, cards) => {
        if (card.name.toLowerCase().includes(inputText.toLowerCase())) {
            return true;
        } else {
            return false;
        }
    });

    return (
        <div className={styles.main}>
            <Form inputText={inputText} setInputText={setInputText} />
            <div className={styles.content_container} >
                {findCard.map((card) => {
                    return (
                            <Content
                                name={card.name}
                                price={card.price}
                                image={card.image}
                            />
                    )
                })
                }
            </div>
        </div>
    );
}

export default App;