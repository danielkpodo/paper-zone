import React from "react";
import { Form, Select } from "semantic-ui-react";

const CategorySelect = () => {
  const options = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" }
  ];
  return (
    <div className="category">
      <Form.Field control={Select} options={options} placeholder="Gender" />
    </div>
  );
};

export default CategorySelect;
