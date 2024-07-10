import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetchGet, useFetchPost } from "../hooks/useFetch"; // Asumiendo que tienes un hook personalizado para manejar fetches
import { validateEmpty, validateSpaces } from "../utils/validations"; // Asumiendo que tienes funciones de validación personalizadas
import PageLogo from "../assets/micromicro.png";

const Signup = () => {
  const url = "http://localhost:3001/users"; // URL del backend para registrar usuarios
  const userRef = useRef();
  const passRef = useRef();
  const confirmRef = useRef();
  const [msg, setMsg] = useState(""); // Estado para mensajes al usuario
  const navigate = useNavigate(); // Hook de React Router para navegación
  const { get, isLoading: getIsLoading, error: getError } = useFetchGet(); // Hook personalizado para fetch GET
  const { post, isLoading: postIsLoading, error: postError } = useFetchPost(); // Hook personalizado para fetch POST

  // Función para manejar el registro de usuarios
  const signup = async (e) => {
    e.preventDefault(); // Prevenir el envío automático del formulario

    // Obtener los valores actuales de los campos de entrada
    let userInput = userRef.current.value;
    let passInput = passRef.current.value;
    let confirmInput = confirmRef.current.value;

    // Validación básica de campos vacíos y espacios en blanco
    if (validateEmpty(userInput, passInput)) {
      if (validateSpaces(userInput, passInput)) {
        // Verificar si las contraseñas coinciden
        if (passInput === confirmInput) {
          // Limpiar campos después de verificar
          userRef.current.value = "";
          passRef.current.value = "";
          confirmRef.current.value = "";

          // Realizar una solicitud GET para verificar si el usuario ya existe
          const data = await get(url);

          if (data) {
            const exists = data.find((user) => user.username === userInput);
            if (!exists) {
              // Si el usuario no existe, crear un nuevo usuario
              const newUser = { username: userInput, password: passInput };
              const response = await post(url, newUser); // Enviar solicitud POST para registrar usuario

              if (response) {
                // Si se registra correctamente, mostrar mensaje y redirigir al login después de 1 segundo
                setMsg("User created successfully, redirecting to login...");
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              } else {
                // Mostrar mensaje de error si falla el registro
                setMsg(postError);
              }
            } else {
              // Mostrar mensaje si el usuario ya existe
              setMsg("User already exists, please choose a different username.");
            }
          } else {
            // Mostrar mensaje si falla la solicitud GET
            setMsg(getError);
          }
        } else {
          // Mostrar mensaje si las contraseñas no coinciden
          setMsg("Passwords do not match. Please enter matching passwords.");
        }
      } else {
        // Mostrar mensaje si se detectan espacios en blanco en el usuario o contraseña
        setMsg("Please avoid spaces in username and password.");
      }
    } else {
      // Mostrar mensaje si no se completan todos los campos
      setMsg("Please fill in all fields.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <a href="#">
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
          <h1 className="text-4xl">
            <span className="bg-gradient-to-tr bg-clip-text text-transparent font-bold from-red-500 via-red-400 to-yellow-300">
              Mic
            </span>
            <span className="bg-gradient-to-tr bg-clip-text text-transparent font-bold from-yellow-500 via-teal-400 to-teal-300">
              roW
            </span>
            <span className="bg-gradient-to-tr bg-clip-text text-transparent font-bold from-teal-500 via-blue-400 to-violet-300">
              orld
            </span>
          </h1>
        </div>
      </a>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter">Sign Up</h3>
            <p className="mt-1.5 text-sm font-medium text-white/50">
              Please fill in the following details to create an account.
            </p>
          </div>
          <div className="p-6 pt-0">
            <form onSubmit={signup}>
              <div className="mt-4">
                <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <div className="flex justify-between">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                      Username
                    </label>
                  </div>
                  <input
                    ref={userRef}
                    type="text"
                    placeholder="Username"
                    className="block w-full border-0 bg-transparent p-0 text-sm my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <div className="flex justify-between">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                      Password
                    </label>
                  </div>
                  <input
                    ref={passRef}
                    type="password"
                    placeholder="Password"
                    className="block w-full border-0 bg-transparent p-0 text-sm my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                  <div className="flex justify-between">
                    <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                      Confirm Password
                    </label>
                  </div>
                  <input
                    ref={confirmRef}
                    type="password"
                    placeholder="Confirm Password"
                    className="block w-full border-0 bg-transparent p-0 text-sm my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                  />
                </div>
              </div>
            </form>
            <div className="mt-4 flex items-center justify-end gap-x-2">
              <button
                type="submit"
                className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
              >
                Register
              </button>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <p className="text-sm font-medium text-foreground">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Log in here
              </Link>
            </p>
          </div>
          <p className="mt-2 text-sm font-medium text-red-500">{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;










