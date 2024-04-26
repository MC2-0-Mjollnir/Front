import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const PrivateRoute = ({ element }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!Cookies.get("connect.sid")) {
            navigate('/auth/login');
        }
    }, []);

    return !!Cookies.get("coonect.sid") ? element : null;
};

export default PrivateRoute;
