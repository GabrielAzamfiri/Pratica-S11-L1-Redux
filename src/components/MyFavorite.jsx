import { Button, Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { useNavigate } from "react-router-dom";
import { House } from "react-bootstrap-icons";

const MyFavorite = () => {
  //  // useSelector ci chiede una funzione per selezionare una porzione di stato, quello che ritorna la funzione sarà il dato trovato in quel valore di stato,
  // // che verrà prelevato e assegnato alla variabile associata
  const favorite = useSelector(state => state.favorite.content);
  const navigate = useNavigate();
  return (
 
        <Container>
            <ListGroup className="my-4">
              <ListGroup.Item variant="primary" className="d-flex justify-content-between align-items-center">
                <span>

                Total Favorite Jobs: {favorite.length}
                </span>
                <Button onClick={()=> navigate("/")}><House/></Button>
              </ListGroup.Item>
            </ListGroup>
            <h1>Favorite Companies:</h1>
            {favorite.map(favorite => {
              return <Job key={favorite._id} data={favorite} />;
              
            })}
        </Container>


      
 
  );
};

export default MyFavorite;
