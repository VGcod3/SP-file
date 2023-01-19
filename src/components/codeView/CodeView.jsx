import React, { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorComponent from "../errorComponent/ErrorComponent";

import { useParams } from "react-router-dom";
// import hljs from "highlight.js";

import { useHttp } from "../../hooks/http.hook";

import "./codeView.scss";

const copyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-clipboard-check"
    viewBox="0 0 16 16"
  >
    <path
      fill-ule="evenodd"
      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
    />
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
  </svg>
);

const copiedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-clipboard"
    viewBox="0 0 16 16"
  >
    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"></path>
    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"></path>
  </svg>
);
const TextView = () => {
  const { fileID } = useParams();

  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const { loading, request, error } = useHttp();

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    request("c", fileID).then((res) => setText(() => res.data.text));
    // .then(() => hljs.loadCSSandJS());
  }, []);

  return (
    <div className="card textField bg-dark container px-0 mx-auto">
      <div className="card-header">
        <button
          type="button"
          onClick={handleCopy}
          className={`clipboard-button btn ${
            copied ? "border-light text-light " : "btn-light"
          }`}
        >
          {/* {copied ? copyIcon + "Copied" : copiedIcon + "Copy"} */}
          {copied ? copyIcon : copiedIcon}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="card-body">
        {loading ? <Spinner /> : null}
        {error ? <ErrorComponent /> : null}
        {!loading && !error ? (
          <pre className="p-0 container ">
            <code className="card-text p-0 code hljs language-css">{text}</code>
          </pre>
        ) : null}
      </div>
    </div>
  );
};

export default TextView;
