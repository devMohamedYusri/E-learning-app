import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addCourse, getCourseById, updateCourse } from "../services/api/InstructorCourses";
import "../App.css";

const AddEditCourse = () => {
    const [courseData, setCourseData] = useState({
        name: "",
        description: "",
        rate: 0,
        price: 0,
        category: "",
        thumbnail: null,
        lessons: [{ title: "", video: null }]
    });

    const navigate = useNavigate();
    const { courseId } = useParams();

    useEffect(() => {
        if (courseId) {
            const fetchCourse = async () => {
                try {
                    const course = await getCourseById(courseId);
                    setCourseData(course);
                } catch (error) {
                    console.error("Error fetching course:", error);
                }
            };
            fetchCourse();
        }
    }, [courseId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourseData({ ...courseData, [name]: value });
    };

    // Upload Course Img
    const handleImageUpload = (e) => {
        setCourseData({ ...courseData, thumbnail: e.target.files[0] });
    };

    // Edit Lesson
    const handleLessonChange = (index, field, value) => {
        const updatedLessons = [...courseData.lessons];
        updatedLessons[index][field] = value;
        setCourseData({ ...courseData, lessons: updatedLessons });
    };

    // Add Lesson
    const handleAddLesson = () => {
        setCourseData({
            ...courseData,
            lessons: [...courseData.lessons, { title: "", video: null }]
        });
    };

    // Upload Video
    const handleVideoUpload = (index, e) => {
        const updatedLessons = [...courseData.lessons];
        updatedLessons[index].video = e.target.files[0];
        setCourseData({ ...courseData, lessons: updatedLessons });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", courseData.name);
        formData.append("description", courseData.description);
        formData.append("rate", courseData.rate);
        formData.append("price", courseData.price);
        formData.append("category", courseData.category);

        if (courseData.thumbnail) {
            formData.append("thumbnail", courseData.thumbnail);
        }

        courseData.lessons.forEach((lesson, index) => {
            formData.append(`lessons[${index}][title]`, lesson.title);
            if (lesson.video) {
                formData.append(`lessons[${index}][video]`, lesson.video);
            }
        });

        try {
            if (courseId) {
                await updateCourse(courseId, formData);
                alert("Course updated successfully!");
            } else {
                await addCourse(formData);
                alert("Course added successfully!");
            }
            navigate("/instructor-dashboard");
        } catch (error) {
            console.error("Error saving course:", error);
        }
    };

    return (
        <div className="form-container">
            <h1 className="subtitle-share">{courseId ? "Edit Course" : "Add New Course"}</h1>
            <form onSubmit={handleSubmit} className="course-form">
                <div className="form-group">
                    <label>Course Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={courseData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={courseData.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Rate:</label>
                    <input
                        type="number"
                        name="rate"
                        value={courseData.rate}
                        onChange={handleInputChange}
                        min="0"
                        max="5"
                        step="0.1"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={courseData.price}
                        onChange={handleInputChange}
                        min="0"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Category:</label>
                    <input
                        type="text"
                        name="category"
                        value={courseData.category}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Upload Image:</label>
                    <input type="file" onChange={handleImageUpload} required />
                </div>
                <div className="form-group">
                    <h3>Lessons</h3>
                    {courseData.lessons.map((lesson, index) => (
                        <div key={index} className="lesson-group">
                            <div>
                                <label>Lesson Title:</label>
                                <input
                                    type="text"
                                    value={lesson.title}
                                    onChange={(e) =>
                                        handleLessonChange(index, "title", e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div>
                                <label>Upload Video:</label>
                                <input
                                    type="file"
                                    onChange={(e) => handleVideoUpload(index, e)}
                                    required
                                />
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddLesson}>
                        Add Another Lesson
                    </button>
                </div>
                <button type="submit">{courseId ? "Update Course" : "Add Course"}</button>
            </form>
        </div>
    );
};

export default AddEditCourse;
