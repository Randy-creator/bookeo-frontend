import LoginForm from "./LoginForm";
import Navbar from "./Navbar";

export default function LandingPage() {
  const flex = "flex justify-center items-center ";
  const box_size = "min-h-screen md:min-h-[85vh] w-screen md:w-full max-w-screen md:max-w-[75vw]";
  return (
    <div
      className={`
          ${flex}
          ${box_size}
          bg-[url('/img/books.jpg')]
          bg-cover bg-center bg-no-repeat
          overflow-hidden
          `}
    >
      <div
        className={`
            ${flex}
            ${box_size}
            flex-col
            absolute inset bg-black/35
            rounded-lg
            `}
      >
        <Navbar></Navbar>

        <div
          className={`${flex}
          flex-row
          h-[75vh]
          w-full
          `}
        >
          <div
            className={`
            ${flex}
            w-full h-full
            `}
          >
           <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  );
}
