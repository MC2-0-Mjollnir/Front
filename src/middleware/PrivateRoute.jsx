import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import isValidAuth from "../utils/isValidAuth";

const PrivateRoute = ({ element }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isValidAuth()) {
            navigate('/auth/login');
        }
    }, [isValidAuth]);

    return isValidAuth ? element : null;
};

export default PrivateRoute;
