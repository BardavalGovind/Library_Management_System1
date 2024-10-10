const express = require("express")
const router = express.Router();
const bookController = require("../controllers/book-controller")
const { authMiddleware }= require("../middleware/auth-middleware")
const { librarianMiddleware } = require("../middleware/librarian-middleware")

router.post("/add", bookController.addBook);
router.get("/all",  bookController.getAllBooks);

module.exports = router;