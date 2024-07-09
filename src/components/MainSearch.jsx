import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { Cart } from "react-bootstrap-icons";
import {  useNavigate } from "react-router-dom";
import { getJobsAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(getJobsAction(query))
   
  };
  const jobs = useSelector(state => state.searchedJobs.jobs);
  const isLoading = useSelector(state => state.searchedJobs.isLoading);
  const hasError = useSelector(state => state.searchedJobs.hasError);
  const errorMessage = useSelector(state => state.searchedJobs.errorMessage);
  return (
    
    <Container>
      <Row className="align-items-center">
      { hasError ? ( 
        <Col>
          <Alert variant="danger" className="mt-5">Error : {errorMessage}</Alert>
          
        </Col>
      ) : 
      ( <>
      <Col xs={10} className="mx-auto my-3">
        <h1 className="display-1">Remote Jobs Search</h1>
      </Col>
      <Col xs={2}> 
        <Button onClick={()=> navigate("/favorites")}> <Cart/> </Button>
       </Col>
      <Col xs={10} className="mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
        </Form>
      </Col>
      <Col xs={10} className="mx-auto mb-5">

        {isLoading ? 
        ( <Spinner animatino="border" className="mt-3" variant="primary" />) : 
        (jobs.map(jobData => (
          <Job key={jobData._id} data={jobData} />
        )))
        }
      </Col>
      </>
      )}
        
      </Row>
    </Container>
  );
};

export default MainSearch;
