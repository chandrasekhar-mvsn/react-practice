import React, { Component } from 'react';
import UserContext from '../../utils/UserContext';

class About extends Component {
  constructor(props) {
    // Calling the parent constructor
    super(props);
    // Initializing state
    this.state = {
      teamMembers: [
        { name: 'Alice', role: 'Developer' },
        { name: 'Bob', role: 'Designer' },
        { name: 'Charlie', role: 'Project Manager' }
      ]
    };
  }
  componentDidMount() {
    // This method is called after the component is mounted
    console.log('About component mounted');
  }
  componentWillUnmount() {
    // This method is called before the component is unmounted
    console.log('About component will unmount');
  }
  componentDidUpdate(prevProps, prevState) {
    // This method is called after the component is updated
    console.log('About component updated');
  }
  componentDidCatch(error, info) {
    // This method is called when an error occurs in the component
    console.error('Error in About component:', error, info);
  }
  render() {
    return (
    <><UserContext.Consumer>
        {({ loggedInUser }) => (
          <div className="about-header">
            <p>Welcome, {loggedInUser ? loggedInUser : 'Guest'}!</p>
          </div>
        )}
      </UserContext.Consumer>
        {/* // The above code uses UserContext to display the logged-in user's name
        // and provides a fallback for guests.
        // The following code is the main content of the About page
        // It includes a brief description of the team and its mission. */}
        <div className="about">
          <h1>About Us</h1>
          <p>
            We are a team of passionate developers dedicated to building amazing web
            applications. Our mission is to create user-friendly and efficient
            software solutions that meet the needs of our clients.
          </p>
          <p>
            Our team has a diverse set of skills and experiences, allowing us to
            tackle a wide range of projects. We believe in continuous learning and
            staying up-to-date with the latest technologies to deliver the best
            results.
          </p>
        </div></>
    );
  }
}

export default About;