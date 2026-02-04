import { useNavigate } from "react-router-dom";

function Yes() {
    const navigate = useNavigate();

    return (
        <div className="h-screen overflow-hidden flex flex-col items-center text-center bg-gradient-to-br from-rose-300 via-pink-300 to-red-300 px-6 pt-16">

            {/* Top message */}
            <div className="max-w-md animate-fade-up">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                    I knew you’d say yes 💖
                </h1>

                <p className="text-lg md:text-xl text-gray-800 mb-12">
                    You just made me the happiest person.
                    Ready for what comes next? 😊
                </p>
            </div>

            {/* Options will go here */}
            <div className="flex-1 w-full overflow-y-auto flex justify-center pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full animate-fade-up" style={{ animationDelay: "0.2s" }}>

                    {/* Gifts */}
                    <div
                        onClick={() => navigate("/gifts")}
                        className="bg-white/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 max-h-[140px] flex flex-col items-center justify-center shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer">
                        <div className="text-5xl mb-4">🎁</div>
                        <div className="text-xl font-semibold text-gray-700">Gifts</div>
                    </div>

                    {/* Brunch */}
                    <div
                        onClick={() => navigate("/brunch")}
                        className="bg-white/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 max-h-[140px] flex flex-col items-center justify-center shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer">
                        <div className="text-5xl mb-4">🥐</div>
                        <div className="text-xl font-semibold text-gray-700">Brunch</div>
                    </div>

                    {/* Dinner */}
                    <div
                        onClick={() => navigate("/dinner")}
                        className="bg-white/30 backdrop-blur-md rounded-2xl p-4 sm:p-6 max-h-[140px] flex flex-col items-center justify-center shadow-lg transition transform hover:scale-105 active:scale-95 cursor-pointer">
                        <div className="text-5xl mb-4">🍽️</div>
                        <div className="text-xl font-semibold text-gray-700">Dinner</div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Yes;