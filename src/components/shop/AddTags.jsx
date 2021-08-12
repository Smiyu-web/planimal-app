import React from "react";
import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

const AddTags = ({ tags, setTags }) => {
  const suggestions = [
    { id: "tree", text: "tree" },
    { id: "monstera", text: "monstera" },
    { id: "bonsai", text: "bonsai" },
    { id: "pachira", text: "pachira" },
    { id: "pothos", text: "pothos" },
    { id: "alocasia", text: "alocasia" },
    { id: "big leaf", text: "big leaf" },
    { id: "small leaf", text: "small leaf" },
  ];
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = [...tags].slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    setTags(newTags);
  };

  return (
    <div className="input_wrapper">
      <label className="input_label">Tags</label>
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          delimiters={delimiters}
          placeholder=""
        />
      </div>
    </div>
  );
};

export default AddTags;
