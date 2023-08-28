import React, { useState, useContext, useEffect } from 'react';
import { WordsContext } from '../../context/ContextProvider';
import TemplateTableStyles from './TemplateTable.module.scss';
import CustomButton from '../CustomButton/CustomButton';
import ButtonStyles from '../CustomButton/CustomButtonStyles.module.scss'

export interface TemplateTableProps {
    english: string,
    russian: string,
    tags: string,
    transcription: string,
    id: string,
}

export default function Template({english, russian, tags, transcription, id} : TemplateTableProps) {
    //const [isEditing, setIsEditing] = React.useState(false); 
    const [word, setWord] = React.useState({english, russian, tags, transcription});
    
    console.log(word)
    // пропсы из TableWords
    //const [isEmpty, setIsEmpty] = useState(null);
    //const { deleteWord, editWord } = useContext(WordsContext); // call deleteWord from the context 
    // and set in into variable deleteWord

    // useEffect с зависимостями
    // при изменении любого из этих свойств в props эффект будет вызван
    useEffect(() => {
      setWord({
        english: english,
        transcription:transcription,
        russian: russian,
        tags: tags,
      });
    }, [english, transcription, russian, tags]);

    // const checkInput = () => {
    //   if (word.english.trim() === '' || 
    //   word.russian.trim() === '' || 
    //   word.tags.trim() === '' || 
    //   word.transcription.trim() === '') {
    //     setIsEmpty(true);
    //   } else {
    //     setIsEmpty(false);
    //   }
    // };

    // useEffect(() => {
    //   console.log('mount');
    //   return() => {
    //     console.log('unmount');
    //   }
    // }, [])

    // useEffect(() => {
    //   checkInput();
    // }, [english, russian, tags, transcription]);

    // const handleEdit = () => {
    //     setIsEditing(!isEditing);
    // };
    
    // const handleCancelEdit = () => {
    //     setWord({ english, russian, tags, transcription });
    //     setIsEditing(!isEditing);
    // };


    // function that saves entered word and checks whether field is empty
//     const save = () => {
//         if (word.english.trim() === '' || 
//         word.russian.trim() === '' || 
//         word.tags.trim() === '' ||
//         word.transcription.trim() === '') {
//           setIsEmpty(true);
//           alert(`Please fill all the inputs required`);
//         return;
//         } else if (!word.russian.match("[а-яА-ЯЁё]")) {
//           alert('Please enter a russian word');
//           return;
//         } else if ((!word.english.match("^[a-zA-Z0-9]+$")) ||(!word.tags.match("^[a-zA-Z0-9]+$")) ) {
//           alert('Please enter an english word');
//           return;
//         }

//       setIsEditing(!isEditing);
//       // call for function from context to edit word and send it to api
//       editWord(id, word);
//       window.location.reload();
//       // here the editFunc calls when we save changes 
//       // then we send it id and object 'word'
//       // with changes
//       console.log(`Form contains english: ${word.english}, transcription: ${word.transcription}, russian: ${word.russian}, tags: ${word.tags}`)
//     }


//     // onChange funcs contain target value and set it into appropriate field

//     const onChangeLevel = (event) => {
//       const value = event.target.value;

//       setWord(prevState => ({
//         ...prevState,
//         tags: value,
//       }));
//       setIsEmpty(false);
//     }

//     const onChangeEnglish = (event) => {
//       const value = event.target.value;

//       setWord(prevState => ({
//         ...prevState,
//         english: value,
//       }));
//       setIsEmpty(false);
//     }

//     const onChangeTranscription = (event) => {
//       const value = event.target.value;

//       setWord(prevState => ({
//         ...prevState,
//         transcription: value,
//       }));
//       setIsEmpty(false);
//     }
  
//     const onChangeRussian = (event) => {
//       const value = event.target.value;

//       setWord(prevState => ({
//         ...prevState,
//         russian: value,
//       }));
//       setIsEmpty(false);
//     }

//   // handleDeleteWord вызывает функцию deleteWord с двумя аргументами: id и wordToDelete.
//  //id - id удаляемого слова
//  // wordToDelete - объект со свойствами english, transcription, russian, tags
//     const handleDeleteWord = () => {
//       const wordToDelete = {
//         english: word.english,
//         transcription: word.transcription,
//         russian: word.russian,
//         tags: word.tags,
//       };
//       deleteWord(id, wordToDelete);
//     }

console.log(word)

        return (
          <>
        <tr>
            <td><input 
            value={word.tags}
            className={
                word.tags.trim() === ""
                  ? `${TemplateTableStyles.empty_input}`
                  : ""
              }
            type="text" />
            {/* <span className={TemplateTableStyles.center__flex}>{word.tags}</span> */}
            </td>
            <td><input 
            value={word.english}
            className={
                word.english.trim() === ""
                  ? `${TemplateTableStyles.empty_input}`
                  : ""
              }
            type="text" />
            {/* <span className={TemplateTableStyles.center__flex}>{word.english}</span> */}
            </td>
            <td><input 
            value={word.transcription}
            className={
                word.transcription.trim() === ""
                  ? `${TemplateTableStyles.empty_input}`
                  : ""
              }
            type="text" />
            {/* <span className={TemplateTableStyles.center__flex}>{word.transcription}</span> */}
            </td>
            <td><input 
            value={word.russian}
            className={
                word.russian.trim() === ""
                  ? `${TemplateTableStyles.empty_input}`
                  : ""
              }
            type="text" />
            {/* <span className={TemplateTableStyles.center__flex}>{word.russian}</span> */}
            </td>
            <td>
              <div className={TemplateTableStyles.center__flex}>
              <CustomButton
              className={[ButtonStyles.generalButton, ButtonStyles.buttonEdit].join(' ')}
              name={'Edit'}  />

              <CustomButton
              className={[ButtonStyles.generalButton, ButtonStyles.buttonDelete].join(' ')}
              name={'Delete'}  />
              </div>
            </td>
        </tr>
        </>
    );
}

/*
<td>
              {isEditing? (
                    <input
                    onChange={onChangeLevel}
                    type="text"
                    value={word.tags}
                    // check whether field is empty
                    // if true, set the class wth warning frame
                    className={word.tags.trim() === '' ? `${TableAppearance.empty_input}` : ''}
                  />
              ) : ( 
                <span className={TableAppearance.center__flex}>{word.tags}</span>
                )}
              </td>
            <td>
              {isEditing ? (
                    <input
                      onChange={onChangeEnglish}
                      type="text"
                      value={word.english}
                      className={word.english.trim() === '' ? `${TableAppearance.empty_input}` : ''}
                    />
                  ) : (
                    <span className={TableAppearance.center__flex}>{word.english}</span>
                  )}
            </td>
            <td>
            {isEditing ? (
                    <input
                    onChange={onChangeTranscription}
                    type="text"
                    value={word.transcription}
                    className={word.transcription.trim() === '' ? `${TableAppearance.empty_input}` : ''}
                  />
            ) : (
                  <span className={TableAppearance.center__flex}>{word.transcription}</span>
            )}
            </td>
            <td>
            {isEditing ? (
                    <input
                    onChange={onChangeRussian}
                    type="text"
                    value={word.russian}
                    className={word.russian.trim() === '' ? `${TableAppearance.empty_input}` : ''}
                  />
            ) : (
                  <span className={TableAppearance.center__flex}>{word.russian}</span>
            )}
            </td>
            <td>
                {/* <div className={TableAppearance.center__flex}>
                {isEditing ? (
                    <>
                      <Button                   
                      onClick={save} 
                      className={isEmpty ? `${buttonDisabled}` : `${buttonSave}`} 
                      name={'Save'}
                      disabled={isEmpty}/>

                      <Button 
                      className={buttonCansel} 
                      name={'Cancel'} 
                      onClick={handleCancelEdit}/>
                    </>
                  ) : (
                    <>
                    <Button 
                    className={buttonEdit} 
                    name={'Edit'} 
                    onClick={handleEdit} />

                    <Button 
                    className={buttonDelete}
                    name={'Delete'}
                    // handleDeleteWord привязана к событию onClick кнопки
                    onClick={handleDeleteWord} />
                    </>
                  )}
                </div> 
                </td> }
*/