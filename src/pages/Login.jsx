// import { useRef, useContext, useState } from "react";
// import { validateEmpty } from "../utils/validations";
// import { Link, useNavigate } from "react-router-dom";
// import { useFetchGet } from "../hooks/useFetch";
// import { AuthContext } from "../contexts/AuthProvider";
// import Form from "../components/Form";
// import Input from "../components/Input";
// import "../styles/login.css"

// const Login = () => {
//   const url = "http://localhost:3000/api/task";
//   // ref
//   const userRef = useRef();
//   const passRef = useRef();
//   // states
//   const [msg, setMsg] = useState("");
//   // context
//   const { login } = useContext(AuthContext);
//   // navigate
//   const navigate = useNavigate();
//   // custom hook
//   const { get, isLoading, error } = useFetchGet();
//   const loginUser = async (e) => {
//     e.preventDefault();
//     let userInput = userRef.current.value;
//     let passInput = passRef.current.value;
//     if (validateEmpty(userRef.current.value)) {
//       const data = await get(url);
//       if (data) {
//         const user = data.find((user) => user.username === userInput);
//         if (user) {
//           if (user.password === passInput) {
//             setMsg("Inicio de sesión éxitoso!");
//             localStorage.setItem("id", user.id);
//             setTimeout(() => {
//               login();
//               navigate("/home");
//             }, 1000);
//           } else setMsg("Usuario y contraseña no coinciden");
//         } else setMsg("Nombre de usuario no existe.");
//       } else setMsg(error);
//     } else setMsg("Por favor llene los campos");
//   };
//   return (
//     <>
//       {isLoading ? (
//         <p>Cargando...</p>
//       ) : (
//         <>


//             <Link to={"/signup"}>Registrarse</Link>
//             <p>{msg}</p>

// <Form handleSubmit={loginUser}>


// <Input ref={userRef} type="text" placeholder="User" />


// <Input ref={passRef} type="password" placeholder="Password" />

// <Input
//   type={"submit"}
//   value={"Iniciar sesión"}
// />

// </Form>
//         </>
//       )}
//     </>
//   );
// };

// export default Login;




import { useRef, useContext, useState } from "react";
import { validateEmpty } from "../utils/validations";
import { Link, useNavigate } from "react-router-dom";
import { useFetchGet } from "../hooks/useFetch";
import { AuthContext } from "../contexts/AuthProvider";
import Form from "../components/Form";
import Input from "../components/Input";
import "../styles/login.css"
import Header from "../components/login/Header";
///////////////////////////////////////////////////////////
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

const Login = () => {
  const url = "http://localhost:3001/users";
  // ref
  const userRef = useRef();
  const passRef = useRef();
  // states
  const [msg, setMsg] = useState("");
  // context
  const { login } = useContext(AuthContext);
  // navigate
  const navigate = useNavigate();
  // custom hook
  const { get, isLoading, error } = useFetchGet();
  const loginUser = async (e) => {
    e.preventDefault();
    let userInput = userRef.current.value;
    let passInput = passRef.current.value;
    if (validateEmpty(userRef.current.value)) {
      const data = await get(url);
      if (data) {
        const user = data.find((user) => user.username === userInput);
        if (user) {
          if (user.password === passInput) {
            setMsg("Inicio de sesión éxitoso!");
            localStorage.setItem("id", user.id);
            setTimeout(() => {
              login();
              navigate("/home");
            }, 1000);
          } else setMsg("Usuario y contraseña no coinciden");
        } else setMsg("Nombre de usuario no existe.");
      } else setMsg(error);
    } else setMsg("Por favor llene los campos");
  };
  return (
    <div className="text-2xl">
      <Header />

      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <>


          <Link to={"/signup"}>Registrarse</Link>
          <p>{msg}</p>

          <Form handleSubmit={loginUser} className="space-y-5 bg-current shadow p-10 rounded-lg">


            <Input ref={userRef} type="text" placeholder="User" />


            <Input ref={passRef} type="password" placeholder="Password" />

            <Input
              type={"submit"}
              value={"Iniciar sesión"}
            />

          </Form>
        </>
      )}
    </div>




  );
};

export default Login;




// FORM BOOSTRAP
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function BasicExample() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default BasicExample;