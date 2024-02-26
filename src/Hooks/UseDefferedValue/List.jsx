import React, { useMemo, useDeferredValue } from "react";

const List = ({ input }) => {
  const size = 20000;

  const deferredInput = useDeferredValue(input);

  const list = useMemo(() => {
    let l = [];
    for (let i = 0; i < size; i++) {
      l.push(<div> {deferredInput} </div>);
    }
    return l;
  }, [deferredInput]);

  return list;
};

export default List;
