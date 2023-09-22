import React, { useState, useContext, useEffect } from 'react';
import { WordsContext, TodoContextType } from '../../context/ContextProvider';
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
    const [isEditing, setIsEditing] = React.useState<boolean>(false); 
    const [word, setWord] = React.useState<string | any>({english, russian, tags, transcription});
    
    console.log(word)
    // пропсы из TableWords
    const [isEmpty, setIsEmpty] = React.useState<boolean | null>(null);
    const { deleteWord, editWord } = React.useContext(WordsContext) as TodoContextType; 

    // useEffect с зависимостями
    // при изменении любого из этих свойств в props эффект будет вызван
    useEffect(() => {
      setWord({
        english: word.english,
        transcription: word.transcription,
        russian: word.russian,
        tags: word.tags,
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

    useEffect(() => {
      const checkInput = () => {
        if (word.english === ' ' || 
        word.russian === ' ' || 
        word.tags === ' ' || 
        word.transcription === ' ') {
          setIsEmpty(isEmpty === true);
        } else {
          setIsEmpty(isEmpty === true);
        }
      }
    
      checkInput();
    }, [isEmpty, word.english, word.russian, word.tags, word.transcription]);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };
    
    const handleCancelEdit = () => {
        setWord({ english, russian, tags, transcription });
        setIsEditing(!isEditing);
    };


    // function that saves entered word and checks whether field is empty
    const save = () => {
      if (word.english === '' || 
        word.russian === '' || 
        word.tags === '' ||
        word.transcription === '') {
          setIsEmpty(true);
          alert(`Please fill all the inputs required`);
        return;
        } else if (!word.russian.match("[а-яА-ЯЁё]")) {
          alert('Please enter a russian word');
          return;
        } else if ((!word.english.match("^[a-zA-Z0-9]+$")) ||(!word.tags.match("^[a-zA-Z0-9]+$")) ) {
          alert('Please enter an english word');
          return;
    }
    setIsEditing(!isEditing);
    editWord(id, word);
    console.log(`Form contains english: ${word.english}, transcription: ${word.transcription}, russian: ${word.russian}, tags: ${word.tags}`)
  }
  
    // onChange funcs contain target value and set it into appropriate field

    const onChangeLevel = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
    
      setWord((prevState: any) => ({
        ...prevState,
        tags: value,
      }));
      setIsEmpty(false);
    }

    const onChangeEnglish = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      setWord((prevState: any) => ({
        ...prevState,
        english: value,
      }));
      setIsEmpty(false);
    }

    const onChangeTranscription = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      setWord((prevState: any) => ({
        ...prevState,
        transcription: value,
      }));
      setIsEmpty(false);
    }
  
    const onChangeRussian = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      setWord((prevState: any) => ({
        ...prevState,
        russian: value,
      }));
      setIsEmpty(false);
    }

 // handleDeleteWord вызывает функцию deleteWord с двумя аргументами: id и wordToDelete.
 // id - id удаляемого слова
 // wordToDelete - объект со свойствами english, transcription, russian, tags
    const handleDeleteWord = () => {
      const wordToDelete = {
        english: word.english,
        transcription: word.transcription,
        russian: word.russian,
        tags: word.tags,
      };
      deleteWord(id, wordToDelete);
    }

console.log(word)

        return (
          <>
        <tr>
            <td>
                {isEditing? (              
                <input
                onChange={onChangeLevel} 
                value={word.tags}
                className={
                    word.tags.trim() === " "
                      ? `${TemplateTableStyles.empty_input}`
                      : ""
                  }
                type="text" /> ) : 
                (<span className={TemplateTableStyles.center__flex}>{word.tags}</span>)}
            </td>
            <td>
                {isEditing? (              
                <input 
                onChange={onChangeEnglish}
                  value={word.english}
                  className={
                      word.english.trim() === " "
                        ? `${TemplateTableStyles.empty_input}`
                        : ""
                    }
                  type="text" />) : 
                  (<span className={TemplateTableStyles.center__flex}>{word.english}</span>)}
            </td>
            <td>
                {isEditing? (              
                <input 
                onChange={onChangeTranscription}
                value={word.transcription}
                className={
                    word.transcription.trim() === " "
                      ? `${TemplateTableStyles.empty_input}`
                      : ""
                  }
                type="text" /> ) : 
                (<span className={TemplateTableStyles.center__flex}>{word.transcription}</span>)}
            </td>
            <td>
              {isEditing? (              
                <input
                onChange={onChangeRussian} 
                value={word.russian}
                className={
                    word.russian.trim() === " "
                      ? `${TemplateTableStyles.empty_input}`
                      : ""
                  }
                type="text" />) :
                (<span className={TemplateTableStyles.center__flex}>{word.russian}</span>)}
            </td>
            <td>
              <div className={TemplateTableStyles.center__flex}>
              {isEditing ? (
                    <>
                      <CustomButton                
                      onClick={save} 
                      className={isEmpty? [ButtonStyles.generalButton, ButtonStyles.buttonDisabled].join(' ') : [ButtonStyles.generalButton, ButtonStyles.buttonSave].join(' ')} 
                      name={'Save'}
                      disabled={isEmpty}
                      />

                      <CustomButton
                      className={[ButtonStyles.generalButton, ButtonStyles.buttonCansel].join(' ')} 
                      name={'Cancel'} 
                      onClick={handleCancelEdit}/>
                    </>
                  ) : (
                    <>
                      <CustomButton
                      className={[ButtonStyles.generalButton, ButtonStyles.buttonEdit].join(' ')}
                      name={'Edit'}
                      onClick={handleEdit}  />

                      <CustomButton
                      className={[ButtonStyles.generalButton, ButtonStyles.buttonDelete].join(' ')}
                      name={'Delete'}  
                      onClick={handleDeleteWord} />
                    </>
                  )}
              </div>
            </td>
        </tr>
        </>
    );
}