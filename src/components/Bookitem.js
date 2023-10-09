
import Card from 'react-bootstrap/Card';

{/*Added functional component called bookItems to application*/}

function Bookitem(props){

    {/*added a map function to split the array of books
into individual books. */}

    return(
        <div>
     {/*Added card comonents to application*/}

 <Card>
      <Card.Body>{props.mybook.title}</Card.Body>
 </Card>

    <img src={props.mybook.thumbnailUrl}></img>
    <p>{props.mybook.authors[0]}</p>
        
        </div>
    );


}
export default Bookitem;