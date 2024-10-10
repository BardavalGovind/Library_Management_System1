import { useState }  from "react";
import { addBook } from "../apis/book-api";
import { useNavigate } from "react-router-dom";

const BookForm = ()=>{
    const [bookToBeAdded, setBookToBeAdded] = useState({
        isbn: "",
        title: "", 
        author: "",
        totalQuantity: "",
        issuedQuantity: "", 
        price: "",
    });

const navigate = useNavigate();

   /* const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting book:", bookToBeAdded);
            await addBook(bookToBeAdded);
            navigate("/"); // Redirect after successful addition
        } catch (error) {
            console.error("Failed to add book:", error.response ? error.response.data.message : error.message);
            alert("Failed to add book. Please try again."); // Provide feedback to user
        }
    };    */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const yourToken = localStorage.getItem('token'); // Adjust this line based on where you store your token
        console.log('Token:', typeof yourToken === 'string' ? yourToken : JSON.stringify(yourToken)); // Log the token here

        try {
            console.log("Submitting book:", bookToBeAdded);
            await addBook(bookToBeAdded, yourToken); // Pass the token to the addBook function
            navigate("/"); // Redirect after successful addition
        } catch (error) {
            console.error("Failed to add book:", error.response ? error.response.data.message : error.message);
            alert("Failed to add book. Please try again."); // Provide feedback to user
        }
    };


    const handleInputChange = (e) => {
        setBookToBeAdded({ ...bookToBeAdded, [e.target.name]: e.target.value });
    }

    return(
        <section className='app-section'>
        <h1>Add a new book.</h1>

        <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
            <label>ISBN</label>
            <input 
                type="text"
                name="isbn" 
                placeholder="ISBN" 
                value={bookToBeAdded.isbn} 
                onChange={handleInputChange}
                required={true}
                
                 />
        </div>
        <div className="field">
            <label>Title</label>
            <input 
               type="text" 
               name="title" 
               placeholder="Title" 
               value={bookToBeAdded.title} 
               onChange={handleInputChange} 
               required={true}
              
               />
        </div>
        <div className="field">
            <label>Author</label>
            <input 
               type="text" 
               name="author" 
               placeholder="Author" 
               value={bookToBeAdded.author} 
               onChange={handleInputChange} 
               required={true}
              
               />
        </div>
        <div className="field">
            <label>Issued Quantity</label>
            <input 
               type="number" 
               name="issuedQuantity" 
               placeholder="Issued Quantity" 
               value={bookToBeAdded.issuedQuantity} 
               onChange={handleInputChange} 
               required={true}
               min = {0}
              
               />
        </div>
        <div className="field">
            <label>Total Quantity</label>
            <input 
               type="number" 
               name="totalQuantity" 
               placeholder="Total Quantity" 
               value={bookToBeAdded.totalQuantity} 
               onChange={handleInputChange} 
               required={true}
               min = {1}
               />
        </div>
        <div className="field">
            <label>Price</label>
            <input 
               type="number" 
               name="price" 
               placeholder="Price" 
               value={bookToBeAdded.price} 
               onChange={handleInputChange} 
               required={true}
               min = {1}
               />
        </div>
        <button className="ui button" type="submit">Submit</button>
    </form>
        </section>
    );
}

export default BookForm;