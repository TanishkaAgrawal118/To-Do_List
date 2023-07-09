import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import { completeTask, deleteTask, getTasksByUrl } from "../services/TaskService";

export function TaskList() {
  const [tasks, setTasks] = useState([]);
  const getTasks = async (url) => {
    const response = await getTasksByUrl(url);
    console.log(response.data);
    setTasks(response.data);

  };
  useEffect(() => {
    getTasks("all");
  },[]);

  return (
    <>
      <Container className="mt-5 text-center">
        <Alert>List of Tasks</Alert>
      </Container>
      <Container>
        <Dropdown onSelect={async(k,e)=>{
            await getTasks(e.target.innerHTML)
        }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Task
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>All</Dropdown.Item>
                    <Dropdown.Item>Pending</Dropdown.Item>
                    <Dropdown.Item>Completed</Dropdown.Item>
                </Dropdown.Menu>
        </Dropdown>
      </Container>
      <Container className="mt-4">
        <Row>
          {tasks.map((t) => {
            return (
              <Col lg="4">
                <Card>
                  <Card.Body>
                    <Alert variant={t.isCompleted ? "success" : "danger"}>
                      {t.isCompleted ? "Completed" : "Pending"}
                    </Alert>
                    <Card.Title>{t.name}</Card.Title>
                    <Card.Text>{t.description}</Card.Text>
                    {!t.isCompleted ? (
                      <Button
                        variant="primary"
                        onClick={async () => {
                          await completeTask(t._id);
                          await getTasks("all");
                        }}
                        className="btn-sm"
                      >
                        Complete
                      </Button>
                    ) : null}
                    <Button variant="danger"
                        onClick={async ()=>{
                            await deleteTask(t._id);
                            await getTasks("all");
                        }}
                        className="btn-sm ms-3">
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
