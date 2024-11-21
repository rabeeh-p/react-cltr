import React, { useState } from "react";

const MemoizedChild = React.memo(({ name }) => {
  console.log("Child component is rendering...");
  return <div>Hello, {name}</div>;
});

const Parent = () => {
  const [parentCount, setParentCount] = useState(0);
  const [childName, setChildName] = useState("Rabeeh");

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Increment Parent Count: {parentCount}
      </button>

      <MemoizedChild name={childName} />
    </div>
  );
};

export default Parent;
