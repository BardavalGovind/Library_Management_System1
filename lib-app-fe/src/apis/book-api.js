import LibraryApplicationBackend from "./LibraryApplicationBackend";
import axios from 'axios';
/*  export const addBook = async (book)=>{
    try{
        const { data } = await LibraryApplicationBackend.post("/book/add", {...book});
        return data;
    }
    catch (error) {
        console.error("Error adding book:", error.response ? error.response.data.message : error.message);
        throw error; // Re-throw to handle it in the component
    }
}  */
const addBook = async (bookData, yourToken) => {
        console.log('Token:', yourToken); // Log the token here
        try {
            const response = await axios.post('http://localhost:8080/book/add', bookData, {
                headers: {
                    'Authorization': `Bearer ${yourToken}`
                }
            });
            return response.data;
        } catch (error) {
            console.error("Error adding book: ", error);
            throw new Error(error.response.data.message);
        }
};


const getAllBooks = async () => {
    try {
        const { data } = await LibraryApplicationBackend.get("/book/all");
        return data;
    } catch (error) {
        console.error("Error fetching books:", error.response ? error.response.data.message : error.message);
        throw error;
    }
};
export { addBook, getAllBooks};



