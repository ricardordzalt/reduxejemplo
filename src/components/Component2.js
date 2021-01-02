import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import Component3 from './Component3';

const Component2 = ({ logout }) => {
    const handleLogout = () => {
        logout();
    };
    return (
        <div>
            Component2 Component
            <button onClick={handleLogout}>Cerrar sesión</button>
            <Component3/>
        </div>
    );
};

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Component2);