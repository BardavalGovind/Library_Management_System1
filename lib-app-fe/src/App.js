
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import BookForm from './screens/AddBookScreen';
import BookScreen from './screens/BookScreen';

const router = createBrowserRouter([
    { path: "/login", element: <LoginScreen /> },
    { path: "/signup", element: <SignUpScreen /> },
    { path: "/", element: <HomeScreen />  },
    { path: "/add-book", element: <BookForm />},
    { path: "/books", element: <BookScreen />},
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
