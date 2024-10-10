import { useEffect, useState } from "react";
import { getLocalStorageUser, getUserToken, logoutUser } from "../utils/AuthUtil";
import LibrarianHomeScreen from "./LibrarianHomeScreen";
import StudentHomeScreen from "./StudentHomeScreen";
import { useNavigate} from "react-router-dom";

const HomeScreen = () => {
    const [userType, setuserType] = useState("");

    useEffect(()=>{
        const user = getLocalStorageUser();
        if(user){
            setuserType(user.type);
        }
    }, [])
    const navigate = useNavigate();
    if(!userType.length){
        return <p>Loading...</p>
    }

    const getHomeScreen = () => {
        return userType === "LIBRARIAN" ? (<LibrarianHomeScreen />) : (<StudentHomeScreen />);
    };
    return(
        <section className="app-section">
            <button className="ui secondary button"
             onClick={async ()=>{
                const token = getUserToken();
                console.log("Token before logout: ", token);
               await logoutUser();
                navigate("/login");
            }}>Logout</button>
            {getHomeScreen()}
        </section>
    );

}
export default HomeScreen;


