export default function Navbar({ setAuthMode }) {
  const flex = "flex justify-center items-center";
  const authButtonStyle =
    "h-full px-4 md:px-6 lg:w-[8vw] rounded-full font-black duration-300 ease-in-out hover:bg-gray-200 hover:text-black";

  return (
    <div
      className="
        relative
        w-full
        h-[8vh] md:h-[6vh] lg:h-[4vh]
        text-white
        flex
        flex-wrap
        items-center
        justify-between
        gap-2
        px-4 md:px-8
      "
    >
      {/* Desktop / Tablet Menu */}
      <div
        className="
          flex
          h-full
          w-[45vw] lg:w-[15vw]
          min-w-[180px]
          rounded-full
          items-center
          justify-around
          font-bold
          text-base lg:text-lg
          bg-gray-700
          backdrop-blur
        "
      >
        <button
          onClick={() => setAuthMode("login")}
          className={authButtonStyle}
        >
          Sign In
        </button>

        <button
          onClick={() => setAuthMode("register")}
          className={authButtonStyle}
        >
          Sign Up
        </button>
      </div>

      {/* Logo */}
      <h1
        className={`${flex} w-[25vw] min-w-[120px] text-2xl md:text-4xl font-black whitespace-nowrap`}
      ></h1>

      {/* Contact */}
      <div
        className={`${flex} ${authButtonStyle} h-full w-[20vw] md:w-[15vw] min-w-[120px] bg-gray-700 font-bold text-base lg:text-lg`}
      >
        Contact
      </div>
    </div>
  );
}
