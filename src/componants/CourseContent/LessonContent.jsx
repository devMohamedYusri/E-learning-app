
function LessonContent({ lesson }) {
    const lessonContent = {
        'Lesson 1: Introduction': 'This is an introduction to the course.',
        'Lesson 2: Basics': 'In this lesson, we cover the basics.',
        'Lesson 3: Advanced Concepts': 'Now, we dive into advanced concepts.',
        'Lesson 4: Practical Applications': 'Here are some practical applications.',
    };

    return (
        <div className="bg-white shadow-md p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">{lesson}</h1>
            <p>{lessonContent[lesson]}</p>
        </div>
    );
}

export default LessonContent;
