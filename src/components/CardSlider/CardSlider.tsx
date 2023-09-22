// import React, { useRef, useCallback, useContext} from 'react';
// // import components
// import Card from '../CardComponent/CardComponent';
// //import FinalCard from '../FinalCard/FinalCard'
// import { TodoContextType, WordsContext } from '../../context/ContextProvider';

// type ButtonTranslateRefType = HTMLButtonElement | null;

// export default function CardSlider() {
//     const [cardIndex, setCardIndex] = React.useState<number>(0);
//     const [idxWordsTranslated, setIdxWordsTranslated] = React.useState<object>([]);
    
//     const buttonTranslateRef = useRef<ButtonTranslateRefType>(null);

//     // Callback-функция для установки ref
//     const setButtonTranslateRef = useCallback((node: ButtonTranslateRefType) => {
//     if (node) {
//         buttonTranslateRef.current = node;
//     }
//     }, []);

//     const context = useContext(WordsContext) as TodoContextType;
//     console.log(context)
//     if (context === null) {
//         return <div>Loading...</div>;
//     } else {
//         console.log(context);
//     }
//     const words = context.words;

//     function nextCard() {
//         if (buttonTranslateRef.current) {
//             buttonTranslateRef.current.focus();
//         }
//         setCardIndex(cardIndex + 1);
//     }

//     function previousCard() {
//         setCardIndex(cardIndex - 1);
//     }

//     function startSlider() {
//         setCardIndex(0);
//         setIdxWordsTranslated([]);
//     }

//     // function onClickTranslate() {
//     //     setIdxWordsTranslated((prev) => {
//     //         if (!idxWordsTranslated.includes(cardIndex)) {
//     //             return [
//     //                 ...prev,
//     //                 cardIndex
//     //             ]
//     //         }
//     //         return prev;
//     //     })
//     // }

//     // const countTranslated = idxWordsTranslated.length;

//     //if(words) {
//         return(
//             <>
//                 {/* {cardIndex < words.length && (
//                     <>
//                         <Card
//                             previousCard={previousCard}
//                             //onClickTranslate={onClickTranslate} 
//                             word={words[cardIndex]}
//                             nextCard={nextCard}
//                             ref={setButtonTranslateRef} onClickTranslate={function (): void {
//                                 throw new Error('Function not implemented.');
//                             } }                        />
//                         {cardIndex + 1} / {words.length}
//                     </>
//                     )} */}
//                         <Card
//                             previousCard={previousCard}
//                             //onClickTranslate={onClickTranslate} 
//                             word={words[cardIndex]}
//                             nextCard={nextCard}
//                             ref={setButtonTranslateRef} onClickTranslate={function (): void {
//                                 throw new Error('Function not implemented.');
//                             } }                        />
//                 {/* {cardIndex === words.length && (
//                     <>
//                         <FinalCard 
//                         startSlider={startSlider} 
//                         countTranslated={countTranslated}/>
//                     </>
//                     )} */}
//             </>
//         )
//     //}
// }

export {}