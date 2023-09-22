import React, { useEffect, useState, useContext, forwardRef, useCallback, RefObject } from 'react';
import cn from 'classnames';
import '../../styles/styles.scss'

import ButtonStyles from '../CustomButton/CustomButtonStyles.module.scss'
import CustomButton from '../CustomButton/CustomButton';

import { WordsContext, TodoContextType } from '../../context/ContextProvider'

// interface CardProps {
//   word: {
//     tags: string;
//     transcription: string;
//     english: string;
//     russian: string;
//     id: string;
//   };
//   onClickTranslate: () => void;
//   previousCard: () => void;
//   nextCard: () => void;
// }

const Card = forwardRef<HTMLButtonElement>(function Card(ref) {
  const [isTranslate, setIsTranslate] = useState(false);
  //const { word, onClickTranslate } = props;
  //const { tags, transcription, english, russian, id } = word;

  const context = useContext(WordsContext) as TodoContextType;
  const words = context.words;
  console.log(words);

  const onClickButton = () => {
    //onClickTranslate();
    setIsTranslate(!isTranslate);
  };

  // useEffect(() => {
  //   setIsTranslate(false);
  // }, [id]);

  // useEffect(() => {
  //   if (isTranslate && ref && ref.current) {
  //     ref.current.focus();
  //   }
  // }, [isTranslate, ref]);

  return (
    <div className="cards__container">
      <section className="card__content">
        <div className="card__word">
          <span className="card__level">
            {/* {tags} */}
            level
            </span>
          <span className="bold__word">
            {/* {english} */}
            english
          </span>
          <span className="card__topic">
            {/* {transcription} */}
            transcription
            </span>
          {isTranslate && (
            <span onClick={onClickButton} className="word__translation">
              {/* {russian} */}
              russian
              </span>
          )}
          {!isTranslate && (
            <span className="word__translation-button">
              <CustomButton
                className={[ButtonStyles.generalButton, ButtonStyles.buttonTranslate].join(' ')} 
                name={'translate'}
                onClick={onClickButton}
                //ref={ref}
              />
            </span>
          )}
        </div>
      </section>
      <div className={ButtonStyles.buttons__container}>
        <div 
        //onClick={props.previousCard}
        >
          <CustomButton className={ButtonStyles.button}
            name={'Previous'} />
        </div>
        <div 
        //onClick={props.nextCard}
        >
          <CustomButton className={ButtonStyles.button}
            name={'Next'} />
        </div>
      </div>
    </div>
  );
});

export default Card;
