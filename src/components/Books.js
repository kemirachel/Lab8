
import Bookitem from "./Bookitem";

{/*book application*/}


function Books(props){
    return props.myBooks.map(
        (book) => {
            return <Bookitem mybook={book} key={book.isbn}></Bookitem>
        }
        
        );
    
    
    }
    export default Books;
