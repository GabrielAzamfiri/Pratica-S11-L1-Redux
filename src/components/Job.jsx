import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {  addToFavoriteAction } from "../redux/actions";

const Job = ({ data }) => {
  const [favorite, setFavorite] = useState(false);

  // questa variabile la potremo chiamare per attivare il processo di SCRITTURA nello Store
  const dispatch = useDispatch();

  //  // useSelector ci chiede una funzione per selezionare una porzione di stato, quello che ritorna la funzione sarà il dato trovato in quel valore di stato,
  // // che verrà prelevato e assegnato alla variabile associata
  // const favorite = useSelector(state => state.favorite.content);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1}>
       
        
        
          <HeartFill
            onClick={() => {
              setFavorite(!favorite),
                dispatch(addToFavoriteAction(data));
            }}
            fill={favorite ? "red" : "lightgrey"}
          />
        
      </Col>
    </Row>
  );
};

export default Job;
