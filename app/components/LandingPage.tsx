import LoginForm from "./LoginForm";

export default function LandingPage() {
  return (
    <div
      className="
        min-h-[55vh]
        w-full max-w-[75vw]
        flex flex-col md:flex-row
        justify-center items-center
        rounded-xl shadow-2xl
        mx-auto
        overflow-hidden
      "
    >
      <div
        className="
        relative
        w-full md:w-1/3
        h-56 md:h-[70vh]
        bg-[url('/img/library_picture.jpg')]
        bg-cover bg-center bg-no-repeat
        hidden md:block
       "
      >
        <div className="absolute inset- 0 bg-black/35"></div>

        <div className="text-white font-bold text-3xl px-6 pt-5 text-right">Bookeo.</div>

      </div>

      <div
        className="
          w-full md:w-2/3
          flex
          justify-center items-center
        "
      >
        <LoginForm />
      </div>
    </div>
  );
}
