import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to Recruitment App</h1>
            <Link to="/resumes">View All Resumes</Link>
        </div>
    );
}

export default HomePage;