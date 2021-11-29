import React, { useEffect, useState } from 'react';
import Singlepro from '../Singlepro/Singlepro';
import './Projects.css'
const Projects = () => {
    const [assaingments, setAssaingments] = useState([]);
    useEffect(() => {
        fetch('./assaingments.json')
            .then(res => res.json())
            .then(data => setAssaingments(data))
    }, []);
    return (
        <div id="projects">
            <h1>My Projects</h1>

            <div className="projects-container">

                {
                    assaingments.map(pro => <Singlepro
                        key={pro.name}
                        pro={pro}>

                    </Singlepro>)
                }

            </div>
            <hr />
        </div>
    );
};

export default Projects;