// import { useRef, useState } from "react";
// import Form from "../components/Form";
// import Input from "../components/Input";
// import { validateEmpty, validateSpaces } from "../utils/validations";
// import { useFetchGet, useFetchPost } from "../hooks/useFetch";
// import { Link, useNavigate } from "react-router-dom";

// const Signup = () => {
//   const url = "http://localhost:3001/users";
//   // refs
//   const userRef = useRef();
//   const passRef = useRef();
//   const confirmRef = useRef();
//   // states
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();
//   // hooks
//   const { get, isLoading: getIsLoading, error: getError } = useFetchGet();
//   const { post, isLoading: postIsLoading, error: postError } = useFetchPost();

//   const signup = async (e) => {
//     e.preventDefault();

//     let userInput = userRef.current.value;
//     let passInput = passRef.current.value;
//     let confirmInput = confirmRef.current.value;

//     // validations
//     if (validateEmpty(userInput, passInput)) {
//       if (validateSpaces(userInput, passInput)) {
//         if (passInput === confirmInput) {
//           // clear inputs
//           userRef.current.value = "";
//           passRef.current.value = "";
//           confirmRef.current.value = "";

//           const data = await get(url);

//           if (data) {
//             // check if the username already exists
//             const exists = data.find((user) => user.username === userInput);
//             if (!exists) {
//               // create new user
//               const newUser = { username: userInput, password: passInput };
//               const response = await post(url, newUser);
//               if (response) {
//                 setMsg("Usuario creado con éxito, redirigiendo al login...");
//                 // redirect to login after 1 second
//                 setTimeout(() => {
//                   navigate("/login");
//                 }, 1000);
//               } else {
//                 setMsg(postError);
//               }
//             } else {
//               setMsg(
//                 <>
//                   El usuario ya existe, <Link to={"/login"}>inicie sesión</Link>
//                 </>
//               );
//             }
//           } else {
//             setMsg(getError);
//           }
//         } else {
//           setMsg("Contraseñas no coinciden");
//         }
//       } else {
//         setMsg("Por favor no ingrese espacios vacíos");
//       }
//     } else {
//       setMsg("Por favor llene los campos");
//     }
//   };

//   return (
//     <>
//       {getIsLoading || postIsLoading ? (
//         <p>Cargando...</p>
//       ) : (
//         <>
//           <Form handleSubmit={signup}>
//             <Input ref={userRef} type="text" placeholder="User" />
//             <Input ref={passRef} type="password" placeholder="Password" />
//             <Input ref={confirmRef} type="password" placeholder="Password" />
//             <Input type={"submit"} value={"Registrarse"} />
//           </Form>
//           <Link to={"/login"}>Iniciar Sesión</Link>
//           <p>{msg}</p>
//         </>
//       )}
//     </>
//   );
// };

// export default Signup;












///////////////////////////////////////////////////////////////////

import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetchGet, useFetchPost } from "../hooks/useFetch"; // Asumiendo que tienes un hook personalizado para manejar fetches
import { validateEmpty, validateSpaces } from "../utils/validations"; // Asumiendo que tienes funciones de validación personalizadas

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
             <span className="bg-gradient-to-tr bg-clip-text text-transparent font-bold from-red-500 from- via-red-400 via- to-yellow-300 to-" >
             Mic
              </span>
<span className="bg-gradient-to-tr bg-clip-text text-transparent font-bold from-yellow-500 from- via-teal-400 via- to-teal-300 to-">
  roW
</span>
<span className="bg-gradient-to-tr bg-clip-text text-transparent font-bold from-teal-500 from- via-blue-400 via- to-violet-300 to-">
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
                    className="block w-full border-0 bg-transparent p-0 text-sm my-1 rounded-full border-0 bg-accent px-4 py-2 font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
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
              <div className="mt-4 flex items-center justify-end gap-x-2">
                <button
                  type="submit"
                  className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                >
                  Register
                </button>
              </div>
            </form>
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