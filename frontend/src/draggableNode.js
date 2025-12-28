export const DraggableNode = ({ type, label, icon }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={`
        cursor-grab bg-white text-gray-700 
        border border-gray-200 rounded-lg 
        w-20 h-20 flex flex-col items-center justify-center 
        shadow-sm hover:shadow-md hover:border-blue-400 hover:text-blue-500
        transition-all duration-200
        ${type}
      `}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
};
