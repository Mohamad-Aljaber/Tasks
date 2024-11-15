// App.js
import { useState } from "react";

import ColorList from "./ColorList";
import Box from "./Box";
import FullExample from "./FillExample";
export default function App() {
  const [color, setColor] = useState("gold");

  return (
    <div style={{ padding: "10px" }}>
      <ColorList changeColor={color => setColor(color)} />
      <Box color={color} />
      <button
        className="px-4 py-2 my-4 bg-violet-700 text-white rounded-md hover:bg-violet-800"
        onClick={() => setColor("black")}
      >
        reset color
      </button>
      <FullExample />
    </div>
  );
}
