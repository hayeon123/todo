import React from "react";
import ContentList from "./ContentList";
import ContentText from "./ContentText";
const Content = ({ notes, setNotes, isEditMode, isCheckboxMode }) => {
  return (
    <>
      {isCheckboxMode ? (
        <ContentList
          notes={notes}
          setNotes={setNotes}
          isEditMode={isEditMode}
        />
      ) : (
        <ContentText
          notes={notes}
          setNotes={setNotes}
          isEditMode={isEditMode}
        />
      )}
    </>
  );
};

export default Content;
