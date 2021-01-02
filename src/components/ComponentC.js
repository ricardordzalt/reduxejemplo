import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../actions/auth";

const ComponentC = () => {
    const auth = useSelector(store => store);
    const dispatch = useDispatch();
    const handleSession = () => {
        dispatch(startLogin('Ricardo', 'ricardo123'));
    };
    return (
        <div>
            ComponentC Component. {auth.isLogged ? `${auth.userName} inició sesión` : "No has iniciado sesión"}
            <button onClick={handleSession}>Iniciar sesión</button>
        </div>
    );
};

export default ComponentC;