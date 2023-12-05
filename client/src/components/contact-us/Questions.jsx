import { useEffect, useState } from "react";

export default function Questions() {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/questions')
            .then((res) => res.json())
            .then((data) => setQuestions(Object.values(data)))
            .catch((error) => console.log(error))

    }, [])

    return (
        <>
            <div className="questions">

                <h3>Common medical concerns and frequently asked questions.</h3>

                {questions.map((question) => (
                    <div className="currentQuestion">
                        <h5>{question.name}</h5>
                        <p>{question.answer}</p>
                    </div>
                ))}

            </div>
        </>
    )
}