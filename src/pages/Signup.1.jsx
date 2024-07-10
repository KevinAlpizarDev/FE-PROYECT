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
// ///////////////////////////////////////////////////////////////////////
import PageLogo from "../assets/micromicro.png"
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
          {/* <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
              />
            </svg>
          </div>
          Ardiansyah Putra */}
          {/* <img src={PageLogo} alt="" /> */}

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


              {/* <div className="mt-4">
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
              </div> */}

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
                    placeholder="user Name"
                    className="block w-full border-0 bg-transparent p-0 text-sm my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                  />
                </div>
              </div>
              {/* ///////////////////////////// */}
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
              {/* <div className="mt-4 flex items-center justify-end gap-x-2">
                <button
                  type="submit"
                  className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                >
                  Register
                </button>
              </div> */}

            </form>
            <div className="mt-4 flex items-center justify-end gap-x-2">
              {/* <button
                      className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                      type="submit"
                    >
                     Register
                    </button> */}
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




















      {/* ///////////////////////////////// */}

      {/* <div class="flex flex-col justify-center items-center font-[sans-serif] bg-gradient-to-r from-blue-800 to-blue-500 lg:h-screen p-6">
        <div class="grid md:grid-cols-2 items-center gap-y-8 bg-white max-w-7xl w-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md overflow-hidden">
          <div class="max-md:order-1 flex flex-col justify-center sm:p-8 p-4 bg-gradient-to-r from-blue-600 to-blue-700 w-full h-full">
            <div class="max-w-md space-y-12 mx-auto">
              <div>
                <h4 class="text-white text-lg font-semibold">Create Your Account</h4>
                <p class="text-[13px] text-white mt-2">Welcome to our registration page! Get started by creating your account.</p>
              </div>
              <div>
                <h4 class="text-white text-lg font-semibold">Simple & Secure Registration</h4>
                <p class="text-[13px] text-white mt-2">Our registration process is designed to be straightforward and secure. We prioritize your privacy and data security.</p>
              </div>
              <div>
                <h4 class="text-white text-lg font-semibold">Terms and Conditions Agreement</h4>
                <p class="text-[13px] text-white mt-2">Require users to accept the terms and conditions of your service during registration.</p>
              </div>
            </div>
          </div>

          <form class="sm:p-8 p-4 w-full" onSubmit={signup}>
            <div class="mb-12">
              <h3 class="text-blue-500 text-3xl font-extrabold max-md:text-center">Register</h3>
            </div>

            <div class="grid lg:grid-cols-2 gap-6">
              <div>
                <label class="text-gray-800 text-sm mb-2 block">First Name</label>
                <input  ref={userRef} name="name" type="text" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter name" />
             
              </div>
          
               <div>
                <label class="text-gray-800 text-sm mb-2 block">Password</label>
                <input    ref={passRef} name="password" type="password" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
              </div>
             
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                <input name="cpassword" type="password" class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
              </div>
            </div>

            <div class="flex items-center mt-6">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 rounded" />
              <label for="remember-me" class="ml-3 block text-sm">
                I accept the <a href="javascript:void(0);" class="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>

            <div class="mt-6">
              <button type="submit" class="py-3 px-6 text-sm tracking-wide font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none transition-all">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </div>
  );
};

export default Signup;



