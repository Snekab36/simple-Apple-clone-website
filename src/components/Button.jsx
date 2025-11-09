export default function Button({ label, onClick, variant = "primary" }) {
  const styles = variant === "primary"
    ? "bg-blue-500 text-white hover:bg-blue-600"
    : "border border-gray-400 text-gray-800 hover:bg-gray-100";
  
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-lg ${styles} transition`}>
      {label}
    </button>
  );
}
