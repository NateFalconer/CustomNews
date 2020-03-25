import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className="aboutTop">
                    <h2>COVID-19 Tracker is designed to give you the latest news about COVID-19 based on your location.</h2>
                    <p>This project is developed by Nate Falconer, Alex Costan, and Igor Zelenov.</p>
                </div>
                <div className="aboutLinks">
                    <a href="https://github.com/Team-IAN/Health-Disaster-Awareness" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <br />
                    <a href="https://www.linkedin.com/in/nathanfalconer/" target="_blank" rel="noopener noreferrer">Nate's LinkedIn</a>
                    <br />
                    <a href="https://www.linkedin.com/in/alex-costan/" target="_blank" rel="noopener noreferrer">Alex's LinkedIn</a>
                    <br />
                    <a href="https://www.linkedin.com/in/igorzelenov/" target="_blank" rel="noopener noreferrer">Igor's LinkedIn</a>
                </div>
                <img className="worldHealth" src={process.env.PUBLIC_URL + '/wh.jpg'} alt='world health' />
            </div>
        );
    }
}

export default About;