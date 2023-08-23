import React, { useContext } from "react";
import { WordsContext } from "../../context/ContextProvider";
//import TableWordsStyles from './TableWordsStyles.module.scss'
import TemplateTable from '../TemplateTable/TemplateTable';

export default function TableWordsComponent() {
  const context = useContext(WordsContext);

  console.log(context)
  //const words = context.words;

  // here we use words got from context
  if (context === null) {
    return <div>Loading...</div>;
  } else {
    console.log(context);
  }

  const words = context.words;

  return (
    <>
      <tbody>
        {" "}
        {words.map((word, id) => (
          <TemplateTable
            // key & id we get from JSON as id & tags_json
            key={id} // id
            id={word.id} // tags_json
            tags={word.tags}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            //name={"Edit"}
          ></TemplateTable>
        ))}
      </tbody>
    </>
  );
}
