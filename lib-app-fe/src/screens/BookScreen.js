import { useState, useEffect } from "react";
import { getAllBooks } from "../apis/book-api";

const BookScreen = ()=>{
    const [bookList, setBookList] = useState([]);

    const fetchBooks = async () => {
        try {
            const books = await getAllBooks();
            console.log("Fetched books: ", books);
            setBookList(books);
           
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(()=>{
        fetchBooks()
            .then()
            .catch((err)=>{
                console.error(err);
            });
    }, []);

    return(
        <section className="app-section">
        <h1>List of all the books in the library</h1>
        <table className="ui single line table">
        <thead>
            <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Total Quantity</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {bookList.map((book)=>{
                return(
                <tr>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.totalQuantity}</td>
                <td>{book.issuedQuantity}</td>
                <td>
                    <button 
                      className="ui green button" 
                      disabled={book.issuedQuantity >= book.totalQuantity}
                      >
                        Issue Book</button>
                </td>
                </tr>
                );
            })}
        </tbody>
        </table>
        </section>
    );
}

export default BookScreen;