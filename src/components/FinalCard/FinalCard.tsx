import React from 'react';
import ButtonStyle from '../CustomButton/CustomButtonStyles.module.scss'
import CustomButton from '../CustomButton/CustomButton';

export interface FinalCardProps extends React.HTMLAttributes<HTMLElement>  {
    onClick?: React.MouseEventHandler | undefined,
    countTranslated: number,
}

export default function EndOfCard({onClick, countTranslated} : FinalCardProps) {
    return(
        <div className="cards__container">

        <section className="card__content">
            <div className="card__word">
                <span className="card__level">You've learned {countTranslated} words</span>
                <span className="bold__word">Congrats!</span>
            </div>
        </section>
        
        <div onClick={onClick}>
        <CustomButton className={ButtonStyle.button} name={'Start again'}/>
        </div>
    </div>
    );
}