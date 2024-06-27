import "../styles/Task.css";
import Input from "./Input";
import Button from "./Button";
import { useFetchPut } from "../hooks/useFetch";
import { useContext, useEffect, useRef } from "react";
import { TodoContext } from "../pages/Home";
/////////////////////////////////////////////////////////REACT-BOOSTRAP/CARD
import Card from 'react-bootstrap/Card';
//////////////////////////////////////////////////////////REACT-BOOSTRAP/GRID
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Task = ({ currentTask }) => {
  const { currentUser, tasksRef, setTasks, setMsg, counter, setCounter } = useContext(TodoContext);
  const url = "http://localhost:3000/api/task/";
  const { put, error } = useFetchPut();
  const checkboxRef = useRef();

  useEffect(() => {
    checkboxRef.current.checked = currentTask.completed;
  }, [currentTask.completed]);

  const completeTask = async () => {
    const updatedList = tasksRef.current.map((task) =>
      task.id === currentTask.id
        ? { ...task, completed: !task.completed }
        : task
    );
    const user = { ...currentUser.current, tasks: updatedList };
    const response = await put(url + user.id, user);
    if (response) {
      checkboxRef.current.checked ? setCounter(counter + 1) : setCounter(counter - 1);
      tasksRef.current = updatedList;
      setTasks(updatedList);
      setMsg("Tarea completada!");
    } else {
      setMsg(error);
    }
  };

  const deleteTask = async () => {
    const updatedList = tasksRef.current.filter((task) => task.id !== currentTask.id);
    const user = { ...currentUser.current, tasks: updatedList };
    const response = await put(url + user.id, user);
    if (response) {
      if (checkboxRef.current.checked)
        setCounter(counter - 1);
      tasksRef.current = updatedList;
      setTasks(updatedList);
      setMsg("Tarea eliminada");
    } else {
      setMsg(error);
    }
  };

  return (


      // <Container>
      //   <Row>
      //     <Col>

            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Input ref={checkboxRef} type={"checkbox"} handleClick={completeTask} />
                <p>{currentTask.title}</p>
                <Button type={"text"} text={"Eliminar"} handleClick={deleteTask} />
              </Card.Body>
            </Card >


      //     </Col>
      //   </Row>
      // </Container>



  );
};

export default Task;



//////////////////////////////////////////////////////////////////////////////////////777777
{/* import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample; */}