import { Handle, Position } from "reactflow";
import { useState, useEffect } from "react";
import FieldRenderer from "./FieldRenderer";

export const BaseNode = ({
  id,
  label,
  data = {},
  customFields = [],
  inputHandles = [],
  outputHandles = [],
  nodeStyle = {},
  handleStyle = {},
  children,
  className = null,
  onFieldChange = null,
}) => {
  const [nodeData, setNodeData] = useState(data);
console.log(nodeData)
  const defaultHandleStyle = {
    background: "#fff",
    width: "15px",
    height: "15px",
    border: "1px solid #000",
  };

  useEffect(() => {
    const defaultData = {};
    customFields.forEach((field) => {
      if (!nodeData[field.name]) {
        if (field.name.includes("Name")) {
          defaultData[field.name] = id.replace(
            `custom${label}-`,
            `${label.toLowerCase()}_`
          );
        } else {
          defaultData[field.name] = field.default || "";
        }
      }
    });
    setNodeData((prevData) => ({ ...prevData, ...defaultData }));
  }, [id, customFields]);

  const handleInputChange = (fieldName, value) => {
    setNodeData({
      ...nodeData,
      [fieldName]: value,
    });
    if (onFieldChange) {
      onFieldChange(fieldName, value);
    }
  };

  return (
    <div
      style={{
        ...nodeStyle,
      }}
      className={`bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden transition-all hover:shadow-2xl ${
        className || "w-80"
      }`}
    >
      <div className="bg-slate-50 border-b border-gray-100 px-4 py-2">
        <span className="font-semibold text-slate-700">{label}</span>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {children && <div>{children}</div>}
        <div className="flex flex-col gap-4">
          {customFields?.map((field, index) => (
            <FieldRenderer
              key={index}
              field={field}
              value={nodeData[field.name]}
              onChange={handleInputChange}
              label={field.label}
            />
          ))}
        </div>
      </div>
      {inputHandles?.map((handle, index) => (
        <div
          key={`${id}-input-${index}`}
          style={{
            position: "absolute",
            top: handle.style?.top || "50%",
            left: "-6px", 
          }}
        >
          <Handle
            type="target"
            position={Position.Left}
            id={handle.id}
            style={{ ...handleStyle, ...defaultHandleStyle }}
            className="bg-white w-3 h-3 rounded-full border-1 border-purple-500"
          />
          {handle.label && (
            <div
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "11px",
                color: "#6b7280",
                pointerEvents: "none",
              }}
            >
              {handle.label}
            </div>
          )}
        </div>
      ))}
      {outputHandles?.map((handle, index) => (
        <div
          key={`${id}-output-${index}`}
          style={{
            position: "absolute",
            top: handle.style?.top || "50%",
            right: "-6px",
          }}
        >
          <Handle
            type="source"
            position={Position.Right}
            id={handle.id}
            className="bg-white w-3 h-3 rounded-full border-1 border-purple-500"
            style={{ ...handleStyle, ...defaultHandleStyle }}
          />
        </div>
      ))}
    </div>
  );
};
