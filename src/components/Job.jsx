
import { Row, Col } from "react-bootstrap";
import { HeartFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data , index }) => {


   // questa variabile la potremo chiamare per attivare il processo di SCRITTURA nello Store
   const dispatch = useDispatch();

  //  // useSelector ci chiede una funzione per selezionare una porzione di stato, quello che ritorna la funzione sarà il dato trovato in quel valore di stato,
  // // che verrà prelevato e assegnato alla variabile associata
  const heart = useSelector(state => state.favorite.heart);

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
      
          <HeartFill onClick={()=>{
            heart ? (dispatch({
              type: "HEART",
              payload: false
            }), dispatch({
              type: "REMOVE_FROM_FAVORITE",
              payload: index
            }) ) : (dispatch({
              type: "HEART",
              payload: true
            }), dispatch({
              type: "ADD_TO_FAVORITE",
              payload: data
            }))}}

           
            
          fill={heart ? "red" : "lightgrey"} />
        
      </Col>
    </Row>
  );
};

export default Job;
