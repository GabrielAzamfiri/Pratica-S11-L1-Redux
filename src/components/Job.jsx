import { Row, Col } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavoriteAction } from "../redux/actions";

const Job = ({ data }) => {
  // questa variabile la potremo chiamare per attivare il processo di SCRITTURA nello Store
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.addRemoveFavorite.content);
  const isInFavorite = favorite.some(job => job._id === data._id);
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
        {isInFavorite ? (
          <HeartFill
            
            fill="red"
          />
        ) : (
          <Heart
            onClick={() => {
              dispatch(addToFavoriteAction(data));
            }}
          />
        )}
      </Col>
    </Row>
  );
};

export default Job;
