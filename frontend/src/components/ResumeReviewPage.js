import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

function ResumeReviewPage() {
    const { id } = useParams();
    const [resume, setResume] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/resumes/${id}`)
            .then((res) => res.json())
            .then((data) => setResume(data));
    }, [id]);

    const validateResume = () => {
        fetch(`http://localhost:3000/resumes/${id}/validate`, { method: 'POST' })
            .then(() => alert('Resume Validated'))
            .catch(() => alert('Validation failed'));
    };

    if (!resume) return <div>Loading...</div>;

    const markdownContent = `
### ${resume.name}
#### ${resume.position}
${resume.phoneNumber}   
${resume.address}

**Professional experience:**

${resume.professionalExperiences.map(exp => `
- **${exp.title}** (${exp.date.start} - ${exp.date.end})
  ${exp.tasks.map(task => `
  - ${task}
  `).join('')}
  - **Tools Used:** ${exp.tools.join(', ')}
`).join('\n')}

**Education:**

${resume.education.map(edu => `
- **${edu.title}** (${edu.date.start} - ${edu.date.end}) - ${edu.diploma}
`).join('\n')}

**Status:**

${resume.validated ? '✅ Validated' : '❌ Not Validated'}
`;

    return (
        <div>
            <h1>Resume Review</h1>
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
            <button onClick={validateResume}>Validate Resume</button>
        </div>
    );
}

export default ResumeReviewPage;