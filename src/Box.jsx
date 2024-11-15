export default function Box({ color }) {
  return (
    <div
      className="w-60 h-60 my-4 flex items-center justify-center text-white font-semibold rounded"
      style={{ backgroundColor: color }}
    >
      Box Color
    </div>
  );
}
