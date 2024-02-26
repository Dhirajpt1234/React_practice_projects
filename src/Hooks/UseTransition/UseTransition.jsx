import React, { useState, useTransition } from "react";

const UseTransition = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const [isPending, startTransition] = useTransition();

  const LIST_SIZE = 20000;

  // this code will give performance issue.
  //   const handleInputchange = (e) => {
  //     setValue(e.target.value);

  //     let l = [];
  //     for (let i = 0; i < LIST_SIZE; i++) {
  //       l.push(e.target.value);
  //     }
  //     setList(l);
  //   };

  const handleInputchange = (e) => {
    setValue(e.target.value);
    startTransition(() => {
      let l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <>
      <input type="text" onChange={handleInputchange} />
      {isPending
        ? "loading..."
        : list.map((listItem) => {
            return <div> {listItem}</div>;
          })}
    </>
  );
};

export default UseTransition;
