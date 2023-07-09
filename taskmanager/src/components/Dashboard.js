import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { getTasksByUrl } from "../services/TaskService";
import { LinkContainer } from "react-router-bootstrap";


export function Dashboard() {
    const[pendingTasks, setPendingTasks]=useState(0);
    const[completedTasks, setCompletedTasks]=useState(0);

    const fetchPendingTasks=async()=>{
        const response=await getTasksByUrl('Pending');
        setPendingTasks(response.data.length);
    }

    const fetchCompletedTasks=async()=>{
        const response=await getTasksByUrl('Completed');
        setCompletedTasks(response.data.length);
    }
    useEffect(() => {
        fetchPendingTasks();
        fetchCompletedTasks();
    },[]);

  return (
    <>
      <Container className="mt-5 text-center">
        <Alert>Welcome to Task manager app</Alert>
      </Container>
      <Container>
        <Row>
            <Col lg="4">
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>Total Tasks</Card.Title>
                        <Card.Text>
                            <Alert variant="info">{pendingTasks + completedTasks}</Alert>
                        </Card.Text>
                        <LinkContainer to='/view-tasks'>
                            <Button variant="primary">View all tasks</Button>
                        </LinkContainer>
                     
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="4">
                <Card style={{ width: "18rem" }}>
                    
                    <Card.Body>
                        <Card.Title>Completed Tasks</Card.Title>
                        <Card.Text>
                            <Alert variant='success'>{completedTasks}</Alert>
                        </Card.Text>
                        <LinkContainer to='/view-tasks'>
                            <Button variant="success">View all tasks</Button>
                        </LinkContainer>
                        
                    </Card.Body>
                </Card>
            </Col>
            <Col lg="4">
                <Card style={{ width: "18rem" }}>
                    <Card.Body>
                        <Card.Title>Pending Tasks</Card.Title>
                        <Card.Text>
                            <Alert variant='danger'>{pendingTasks}</Alert>
                        </Card.Text>
                        <LinkContainer to='/view-tasks'>
                            <Button variant="danger">View all tasks</Button>
                        </LinkContainer>
                        
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </Container>
    </>
  );
}
