function UserGreatings(props) {
    return (props.isLoggedIn ? <h2>Welcome {props.userName}</h2> : <h2>Please login</h2>);
}

export default UserGreatings;
