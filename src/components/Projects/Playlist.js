import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from './data';
import Spinner from 'react-bootstrap/Spinner';
import './Playlist.css'; // Custom CSS for padding

const Playlist = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 350);
  }, []);

  return (
    <>
      {spin ? (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
          <Spinner animation='border' variant='info' /> &nbsp;&nbsp; Loading ...
        </div>
      ) : (
        <div className='cont playlist-container pd-tp'>
          <h2 className='text-center text-blue down'><u>Projects I have build</u></h2>
          <div className='card_div'>
            <div className='row d-flex justify-content-center align-items-center wd'>
              {projectData.map((el, index) => (
                <Card
                  key={index}
                  className='project-card mt-4 mb-4'
                >
                  <Card.Img variant='top' className='card-image' src={el.imgsrc} />
                  <Card.Body className='d-flex justify-content-center flex-column'>
                    <Card.Title className='text-center text-blue'>{el.projectName}</Card.Title>
                    <div className='des'>
                      <p>{el.desc}</p>
                    </div>
                    <div className='proj-buttons d-flex justify-content-between'>
                      <Button variant='info'>
                        <a href={el.demo} target='_blank' rel='noopener noreferrer' className='text-decoration-none text-blue hovr'>
                          View Project
                        </a>
                      </Button>
                      <Button variant='info'>
                        <a href={el.code} target='_blank' rel='noopener noreferrer' className='text-decoration-none text-blue hovr'>
                          Code
                        </a>
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Playlist;
