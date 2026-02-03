import ourPhoto from "./assets/images/private/our-photo.jpeg";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-200 via-pink-300 to-rose-400">

      {/* Floral background overlay */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-25 md:opacity-40"
        style={{
          backgroundImage: "url('/assets/images/floral-bg.png')",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex justify-center px-4">
        <div className="flex flex-col items-center text-center max-w-md w-full pt-10 md:pt-12">

          {/* Headline */}
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl mb-8">
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              Will you be my Valentine?
            </span>
            <span className="ml-2 inline-block align-middle text-4xl">
              💖🥰
            </span>
          </h1>

          {/* Circular photo */}
          <div className="mb-12">
            <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl ring-4 ring-white/40 border-4 border-rose-300 bg-white/40 animate-float">
              <img
                src={ourPhoto}
                alt="Us"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Buttons will go here next */}

        </div>
      </div>

    </div>
  );
}

export default App;
