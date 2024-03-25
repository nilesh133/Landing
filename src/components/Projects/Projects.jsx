import React from 'react'
import './projects.css';

// images import
import project1 from '../../assets/images/projects/project_1.png';
import project2 from '../../assets/images/projects/project_2.png';
import project3 from '../../assets/images/projects/project_3.png';
import project4 from '../../assets/images/projects/project_4.png';
import project5 from '../../assets/images/projects/project_5.png';
import project6 from '../../assets/images/projects/project_6.png';


const Projects = () => {

    const projectsData = [
        {
            subName: 'Illustration',
            name: 'Work Name',
            img: project1
        },
        {
            subName: 'Illustration',
            name: 'Work Name',
            img: project2
        },
        {
            subName: 'Illustration',
            name: 'Work Name',
            img: project3
        },
        {
            subName: 'Illustration',
            name: 'Work Name',
            img: project4
        },
        {
            subName: 'Illustration',
            name: 'Work Name',
            img: project5
        },
        {
            subName: 'Illustration',
            name: 'Work Name',
            img: project6
        },
    ]

  return (
    <div className='projects'>
        <div className='main_container_fluid'>
            <div className='main_row'>
                {
                    projectsData?.map((pr) => {
                        return (
                            <div className='column-4 projects_wrapper'>
                                <div className='projects_box'>
                                    <div className='projects_image' style={{backgroundImage: `url(${pr.img})`}}>
                                    </div>
                                    <div className='projects_desc'>
                                        <p>{pr.subName}</p>
                                        <h3>{pr.name}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Projects