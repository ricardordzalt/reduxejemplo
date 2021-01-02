import { connect } from "react-redux";

const Component3 = ({ auth }) => {
    const { userName, isLogged } = auth;
    return (
        <div>
            Component3 Component { isLogged && (<p>{userName}</p>)}
        </div>
    );
};

const mapStateToProps = store => ({
    auth: store
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Component3);