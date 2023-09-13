import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
const navigate = useNavigate();

useEffect(() => {
    setTimeout(() => {
    navigate("/");
    }, 3000);
}, [navigate]);

return (
    <div>
        <h1>Error 404</h1>
        <p>Ud. sera dirigido a la Home en 3 segundos...</p>
    </div>
    );
};

export default Error;