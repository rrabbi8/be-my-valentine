import { useNavigate } from "react-router-dom";

function Dinner() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-pink-200 via-pink-300 to-rose-300 px-6">
      <h1 className="text-4xl font-extrabold text-white mb-6">
        Dinner 🍽️
      </h1>

      <button
        onClick={() => navigate("/yes")}
        className="absolute top-4 left-4 text-white/80 hover:text-white transition text-sm font-medium"
      >
        ← Back
      </button>
    </div>
  );
}

export default Dinner;
