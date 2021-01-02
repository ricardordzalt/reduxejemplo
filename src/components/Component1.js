import { useSelector } from 'react-redux';
import Component2 from './Component2';

const Component1 = () => {
    const { loading } = useSelector(store => store);

    return (
        <div>
            Component1 Component { loading && <p>Cargando...</p> }
            <Component2/>
        </div>
    );
};

export default Component1;