import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const [inputHandles, setInputHandles] = useState([]);

  const updateHandlesForVariables = (text) => {
    const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const matches = [...text.matchAll(regex)];

    const newHandles = matches.map((match, index) => ({
      id: `${id}-${match[1]}`,
      label: match[1],
      style: { top: `${(index + 1) * 20}%` },
    }));

    setInputHandles(newHandles);
  };

  useEffect(() => {
    updateHandlesForVariables(currText);
  }, [currText, id]);

  const handleFieldChange = (name, value) => {
    if (name === "text") {
      setCurrText(value);
    }
  };

  const customFields = [
    {
      label: "Text",
      name: "text",
      type: "textarea",
      default: currText,
    },
  ];

  const outputHandles = [{ id: `${id}-output` }];

  return (
    <BaseNode
      id={id}
      label="Text"
      data={{ ...data, text: currText }}
      customFields={customFields}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      onFieldChange={handleFieldChange}
      className="w-auto min-w-[200px]"
    >
        <div style={{ 
            visibility: 'hidden', 
            height: 0, 
            whiteSpace: 'pre', 
            overflow: 'hidden',
            fontFamily: 'inherit',
            fontSize: '14px',
            padding: '0 8px' 
        }}>
            {currText}
        </div>
    </BaseNode>
  );
};
