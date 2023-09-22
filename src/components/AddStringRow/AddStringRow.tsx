import React, { useState, useContext } from "react";
import AddStringRow from "./AddStringRow.module.scss";
import ButtonStyles from '../CustomButton/CustomButtonStyles.module.scss'
import CustomButton from "../CustomButton/CustomButton";
import { WordsContext, TodoContextType } from "../../context/ContextProvider";

interface AddStringProps {
      id: string;
}

export default function StringRow({id} : AddStringProps) {
  const [lvl, setLevel] = useState<string>("lvl"); //initialize the state
  const [en, setEnglish] = useState<string>("en");
  const [tr, setTranscription] = useState<string>("tr");
  const [ru, setRussian] = useState<string>("ru");

  const { words, addWord } = useContext(WordsContext) as TodoContextType; 

  {words.map((word) => (
    console.log(word.id)
  ))}

  const handleButtonAddClick = () => {
    // Выводим введенные данные в консоль
    // console.log('Level:', lvl);
    // console.log('English:', en);
    // console.log('Transcription:', tr);
    // console.log('Russian:', ru);

    //create an object contains input values
    //then call for func and send it an object to add new word into API
    const newWord = {
      tags: lvl,
      english: en,
      transcription: tr,
      russian: ru,
    };

    console.log(newWord);
    addWord(id, newWord);
  };

  return (
    <div className={AddStringRow.container__div}>
      <h1 className={AddStringRow.title}>Add new word</h1>
      <table className={AddStringRow.table}>
        <thead className={AddStringRow.thead}>
          <tr>
            <th>Level</th>
            <th>English</th>
            <th>Transcription</th>
            <th>Russian</th>
            <th>Options</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="lvl"
                value={lvl}
                //initialize the state
                onChange={(e) => setLevel(e.target.value)}
              ></input>
            </td>

            <td>
              <input
                type="text"
                name="en"
                value={en}
                onChange={(e) => setEnglish(e.target.value)}
              ></input>
            </td>

            <td>
              <input
                type="text"
                name="tr"
                value={tr}
                onChange={(e) => setTranscription(e.target.value)}
              ></input>
            </td>

            <td>
              <input
                type="text"
                name="ru"
                value={ru}
                onChange={(e) => setRussian(e.target.value)}
              ></input>
            </td>

            <td>
              <div className={AddStringRow.add__container}>
                <CustomButton
                  className={[ButtonStyles.generalButton, ButtonStyles.buttonAdd].join(' ')} 
                  name={"Add"}
                  onClick={handleButtonAddClick}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
