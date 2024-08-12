import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ResumeListPage() {
    const [resumes, setResumes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/resumes')
            .then((res) => res.json())
            .then((data) => setResumes(data));
    }, []);

    return (
        <div>
            <h1>Resume Liste</h1>
            <ul>
                {resumes.map((resumeId) => (
                    <li key={resumeId}>
                        <Link to={`/resumes/${resumeId}`}>Resume {resumeId}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResumeListPage;