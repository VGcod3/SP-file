import React from "react";
import TextView from "../components/textView/TextView";
import ErrorWrapper from "../components/errorWrapper/ErrorWrapper";

const TextPage = () => {
  return (
    <>
      <ErrorWrapper>
        <TextView />
      </ErrorWrapper>
    </>
  );
};

export default TextPage;
