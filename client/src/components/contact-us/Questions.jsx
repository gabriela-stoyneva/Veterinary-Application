import { useEffect, useState } from "react";

import style from './Questions.module.css';

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
            <div className={style.questions}>

                <h3>Common medical concerns and frequently asked questions.</h3>

                <div className={style.questionArea}>
                    {questions.map((question) => (
                        <div key={question._id} className={style.currentQuestion}>
                            <h5>{question.name}</h5>
                            <p>{question.answer}</p>
                        </div>
                    ))}
                </div>


            </div>
        </>
    )
}