import React from "react";
import { Form, Select } from "semantic-ui-react";
import FetchContext from "../context/FetchContext";

const CategorySelect = () => {
  const options = [
    { key: "f", text: "Fashion", value: "fashion" },
    { key: "n", text: "Nature", value: "nature" },
    { key: "b", text: "Backgrounds", value: "backgrounds" },
    { key: "s", text: "Science", value: "science" },
    { key: "e", text: "Education", value: "education" },
    { key: "p", text: "People", value: "people" },
    { key: "fe", text: "Feelings", value: "feelings" },
    { key: "r", text: "Religion", value: "religion" },
    { key: "h", text: "Health", value: "health" },
    { key: "pla", text: "Places", value: "places" },
    { key: "ani", text: "Animals", value: "animals" },
    { key: "i", text: "Industry", value: "industry" },
    { key: "c", text: "Computer", value: "computer" },
    { key: "spo", text: "Sports", value: "sports" },
    { key: "t", text: "Transportation", value: "transportation" },
    { key: "tra", text: "Travel", value: "travel" },
    { key: "bui", text: "Buildings", value: "buildings" },
    { key: "busi", text: "Business", value: "business" },
    { key: "mus", text: "Music", value: "music" }
  ];
  return (
    <div className="category">
      <FetchContext.Consumer>
        {context => {
          return (
            <Form.Field
              control={Select}
              options={options}
              placeholder="Filter by category"
            />
          );
        }}
      </FetchContext.Consumer>
    </div>
  );
};

export default CategorySelect;
