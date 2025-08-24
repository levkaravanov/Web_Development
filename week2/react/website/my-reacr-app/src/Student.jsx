import PropTypes from 'prop-types';

function Student({ name = "Guest", age = 18, isStudent = true, city = "Unknown" }) {
    return (
        <div className="student">
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
            <p>City: {city}</p>
        </div>
    )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
    city: PropTypes.string,
}
export default Student;