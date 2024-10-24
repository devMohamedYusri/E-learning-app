
function Sidebar({ lessons, setSelectedLesson }) {
    return (
        <div className="w-1/4 bg-blue-600 text-white p-6">
            <h2 className="text-xl font-semibold mb-4">Lessons</h2>
            <ul>
                {lessons.map((lesson, index) => (
                    <li
                        key={index}
                        className="cursor-pointer mb-2 p-2 hover:bg-blue-500 rounded"
                        onClick={() => setSelectedLesson(lesson)}
                    >
                        {lesson}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
