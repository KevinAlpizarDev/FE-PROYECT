
import { useRef, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetchGet } from "../hooks/useFetch";
import { AuthContext } from "../contexts/AuthProvider";
import { validateEmpty } from "../utils/validations";
import Form from "../components/Form";
import Input from "../components/Input";
import "../styles/login.css";


import pageLogo from "../assets/micromicro.png"

const Login = () => {
  const url = "http://localhost:3001/users";
  const userRef = useRef();
  const passRef = useRef();
  const [msg, setMsg] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { get, isLoading, error } = useFetchGet();

  const loginUser = async (e) => {
    e.preventDefault();
    let userInput = userRef.current.value;
    let passInput = passRef.current.value;

    if (validateEmpty(userInput)) {
      try {
        const data = await get(url);

        if (data) {
          const user = data.find((user) => user.username === userInput);

          if (user) {
            if (user.password === passInput) {
              setMsg("Inicio de sesión exitoso!");
              localStorage.setItem("id", user.id);
              setTimeout(() => {
                login();
                navigate("/products");
              }, 1000);
            } else {
              setMsg("Usuario y contraseña no coinciden");
            }
          } else {
            setMsg("Nombre de usuario no existe");
          }
        } else {
          setMsg("Error al obtener los datos del servidor");
        }
      } catch (error) {
        setMsg("Error: " + error.message);
      }
    } else {
      setMsg("Por favor llene todos los campos");
    }
  };

  return (
    <div className=" bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <a href="#">
        <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
          <div>
         
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

        </div>
      </a>
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
      
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>

       
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
        
          </div>
          <div className="p-6 pt-0">
            {isLoading ? (
              <p>Cargando...</p>
            ) : (
              <>
                <p className="mt-1.5 text-sm font-medium text-white/50 py-5">{msg}</p>
                <Form handleSubmit={loginUser}>
                  <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                    <div className="flex justify-between">
                      <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                        Username
                      </label>
                      <div className="absolute right-3 translate-y-2 text-green-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <input
                      type="text"
                      ref={userRef}
                      name="username"
                      placeholder="Username"
                      autoComplete="off"
                      className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
                      <div className="flex justify-between">
                        <label className="text-xs font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                          Password
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="password"
                          ref={passRef}
                          name="password"
                          className="block w-full border-0 bg-transparent p-0 text-sm file:my-1 placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 text-foreground"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="mt-4 flex items-center justify-between">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="remember"
                        className="outline-none focus:outline focus:outline-sky-300"
                      />
                      <span className="text-xs">Remember me</span>
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-sm font-medium text-foreground underline"
                    >
                      Forgot password?
                    </Link>
                  </div> */}
                  <div className="mt-4 flex items-center justify-end gap-x-2">
                    <Link
                      to="/signup"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                    >
                      Registrarse
                    </Link>
                    <button
                      className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                      type="submit"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </Form>
              </>
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Login;







