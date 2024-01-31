import React, {  useState } from "react";
import JsonData from "./MOCK_DATA.json";
import Card from "./Card";

const SearchFilter = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    console.log(searchValue);
  };

  return (
    <>
      <div style={{ alignItems: "center" }}>
        <input
          type="text"
          placeholder="search..."
          name="seachInput"
          onChange={handleChange}
        />

        {JsonData.filter((val) => {
          if (searchValue === "") {
            return val;
          } else {
            if (
              val.first_name
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              val.last_name.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return val;
            }
          }
        }).map((value, key) => {
          return (
            <Card
              first={value.first_name}
              last={value.last_name}
              count={key}
              key={key}
            />
          );
        })}
      </div>
    </>
  );
};

export default SearchFilter;
