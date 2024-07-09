import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { House, Trash } from "react-bootstrap-icons";
import {  removeFromFavoriteAction } from "../redux/actions";

const MyFavorite = () => {
  const dispatch = useDispatch();
  //  // useSelector ci chiede una funzione per selezionare una porzione di stato, quello che ritorna la funzione sarà il dato trovato in quel valore di stato,
  // // che verrà prelevato e assegnato alla variabile associata
  const favorite = useSelector(state => state.addRemoveFavorite.content);
  const navigate = useNavigate();
  return (
    <Container>
      <ListGroup className="my-4">
        <ListGroup.Item variant="primary" className="d-flex justify-content-between align-items-center">
          <span>Total Favorite Jobs: {favorite.length}</span>
          <Button onClick={() => navigate("/")}>
            <House />
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <h1>Favorite Companies:</h1>
      {favorite.map((favorite, index) => {
        return (
          <Row key={index} className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
            <Col xs={3}>
              <Link to={`/${favorite.company_name}`}>{favorite.company_name}</Link>
            </Col>
            <Col xs={8}>
              <a href={favorite.url} target="_blank" rel="noreferrer">
                {favorite.title}
              </a>
            </Col>
            <Col xs={1}>
              <Trash
                onClick={() => {
                  dispatch(removeFromFavoriteAction(index));
                }}
                fill="red"
              />
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default MyFavorite;
