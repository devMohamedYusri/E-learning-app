import PropTypes from 'prop-types';
import "../App.css";

const CourseCard = ({ course, onDelete, onEdit }) => {
  return (
    <div className="card">
      <img src={course.image} alt={course.title} />
      <h2>{course.title}</h2>
      <div className="buttons">
        <button onClick={() => onDelete(course.id)} className="deleteButton">
          Delete
        </button>
        <button onClick={() => onEdit(course.id)} className="editButton">
          Edit
        </button>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default CourseCard;
