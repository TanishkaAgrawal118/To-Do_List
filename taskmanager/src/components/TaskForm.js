import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row, Toast } from "react-bootstrap";
import { saveTask } from "../services/TaskService";
import { toast } from "react-hot-toast";
import { StatusCodes } from "http-status-codes";

export function TaskForm() {
  //backend api me kya kya data pass kiya tha -name,description,deadline to create Task
  const [formData, setFormData]=useState({});
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }
  const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await saveTask(formData);
        console.log(response);

        if(response.status===StatusCodes.CREATED)
        {
          toast.success("Task created successfully");
        }
        else{
          toast.error("Error in creating task....");
        }
   
  
  }
  return (
    <>
      <Container className="mt-5 text-center">
        <Alert>Create a new Task</Alert>
      </Container>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"  name="name" onChange={handleChange} placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"  name="description" onChange={handleChange} placeholder="Enter description" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control type="date"  name="deadline" onChange={handleChange}/>
                </Form.Group>
                <Button type="submit" variant="success" >Create</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
