// src/App.tsx
import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

const defaultCode = `
const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Hello JSX Preview</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
`;

function App() {
  const [code, setCode] = useState(defaultCode);

  return (
    <div className="h-dvh w-screen overflow-x-hidden grid grid-cols-2">
      <div className="p-2 border-r border-gray-300">
        <Editor code={code} setCode={setCode} />
      </div>
      <div className="p-2">
        <Preview code={code} />
      </div>
    </div>
  );
}

export default App;
