import React, { createContext, useState, useEffect } from "react";
export interface ContextValues {
    words: any[], 
}

export const WordsContext = createContext<ContextValues | null>(null);

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [words, setWords] = React.useState<any[]>([]); 
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
  
    function loadData() {
      setIsLoading(true);
      fetch("http://itgirlschool.justmakeit.ru/api/words")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error while loading");
          }
          return response.json();
        })
        .then((data) => {
          setIsLoading(false);
          setWords(data);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    }
  
    useEffect(() => {
      loadData();
    }, []);
  
    const values = { words };

    return (
      <WordsContext.Provider value={values}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{`Ooops, error occurred: ${error}`}</p>}
        {children}
      </WordsContext.Provider>
    );
  };

export default ContextProvider;

// export const ContextProvider = ({ children } : ContextValues) => {
//     const [words, setWords] = useState([]);

//     //const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState("");
  
//     function loadData() {
//       setIsLoading(true);
//       try {
//         fetch("http://itgirlschool.justmakeit.ru/api/words")
//           .then((response) => {
//             if (response.ok) {
//               return response.json();
//             } else {
//               throw new Error("Error while loading");
//             }
//           })
//           .then((data) => {
//             setIsLoading(false);
//             setWords(data);
//           });
//       } catch (error) {
//         setIsLoading(false);
//         setError(error);
//       }
//     }
  
//     // async function addWord(id: number, newWord: any) {
//     //   console.log("addWord");
//     //   try {
//     //     fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/add`, {
//     //       method: "POST",
//     //       mode: "cors",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //       body: JSON.stringify(newWord),
//     //     })
//     //       .then((response) => {
//     //         if (response.ok) {
//     //           return response.json();
//     //         } else {
//     //           throw new Error("Try again");
//     //         }
//     //       })
//     //       .then((data) => {
//     //         setIsLoading(false);
//     //         setWords((prevWords) => [...prevWords, data]);
//     //       });
//     //   } catch (error) {
//     //     setIsLoading(false);
//     //     setError(error);
//     //     return "Fail to add word";
//     //   }
//     //   loadData();
//     // }
  
//     // async function editWord(id, newWord) {
//     //   console.log("edited");
  
//     //   try {
//     //     fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
//     //       method: "POST",
//     //       mode: "cors",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //       body: JSON.stringify(newWord),
//     //     })
//     //       .then((response) => {
//     //         if (response.ok) {
//     //           return response.json();
//     //         } else {
//     //           throw new Error("Try again");
//     //         }
//     //       })
//     //       .then((data) => {
//     //         console.log(data);
//     //         setIsLoading(false);
//     //         setWords((prevWords) => [...prevWords, data]);
//     //       });
//     //   } catch (error) {
//     //     setIsLoading(false);
//     //     setError(error);
//     //     return "Fail to edit the word";
//     //   }
//     // }
  
//     // // function to delete word from the table
//     // // id - wordId, newWord - information of word (ru, en, etc)
//     // async function deleteWord(id, newWord) {
//     //   console.log("deleted");
  
//     //   try {
//     //     // get word from the api with its id
//     //     fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
//     //       method: "POST",
//     //       mode: "cors",
//     //       headers: {
//     //         "Content-Type": "application/json",
//     //       },
//     //       body: JSON.stringify(newWord), // convert text to json
//     //     })
//     //       .then((response) => {
//     //         if (response.ok) {
//     //           return response.json();
//     //         } else {
//     //           throw new Error("Try again");
//     //         }
//     //       })
//     //       .then((data) => {
//     //         setIsLoading(false);
//     //         // filter the list of words
//     //         // retain only the words with another id
//     //         // if id mathes with id from the list, delete mathed word
//     //         setWords((prevWords) => prevWords.filter((word) => word.id !== id));
//     //       });
//     //   } catch (error) {
//     //     setIsLoading(false);
//     //     setError(error);
//     //     return "Fail to delete the word";
//     //   }
//     //   loadData();
//     // }
  
//     // useEffect(() => {
//     //   loadData();
//     // }, []);
  
//     // //analogue if(isLoading)
//     // {
//     //   isLoading && <p>Loading...</p>;
//     // }
//     // {
//     //   error && <p>{`Ooops, error occured: ${error.message}`}</p>;
//     // }
  
//     // set context funcs to variable to export
//     const values = { words };
//     return (
//         <WordsContext.Provider value={values}>{children}</WordsContext.Provider>
//       );
// }