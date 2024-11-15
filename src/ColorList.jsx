// ColorList.js

export default function ColorList({ changeColor }) {
  const colors = ["red", "blue", "green", "aqua"];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Colors List</h2>
      {colors.map(color => (
        <div
          key={color}
          className="p-2 my-1 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded"
          onClick={() => changeColor(color)}
        >
          {color}
        </div>
      ))}
    </div>
  );
}
