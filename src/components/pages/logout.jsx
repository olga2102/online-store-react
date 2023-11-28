import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { changeAuth } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        dispatch(changeAuth(false));
        navigate('/login');
    }, [])
}

export default Logout;