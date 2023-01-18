import React from "react";
import CodeView from "../components/codeView/CodeView";
import ErrorWrapper from "../components/errorWrapper/ErrorWrapper";

const WatchCode = () => {
  return (
    <>
      <ErrorWrapper>
        <CodeView />
      </ErrorWrapper>
    </>
  );
};

export default WatchCode;
