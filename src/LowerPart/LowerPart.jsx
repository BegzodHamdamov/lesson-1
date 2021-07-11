import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';

class LowerPart extends React.Component {
    render() {
        return <section >
            <div className="container3">
                <div className="title">
                    <h1 className="fw-bold">What Clients Say</h1>
                    <br />
                    <p>Problems trying to resolve the conflict between the two major <br /> realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
            </div>
            <div className="container4 mx-5">
                <div className="row m-0 p-0">
                    <div className="col-lg-6 mb-4">
                        <div className="clientCard bg-white h-100">
                            <div className="row m-0 p-0">
                                <div className="col-sm-4 p-0">
                                    <img src="https://tender-hugle-4d0b27.netlify.app/user1.png" alt="" />
                                </div>
                                <div className="col-sm-8 text-dark py-3">
                                    <h5>Regina Migles</h5>
                                    <p>Designer</p>
                                    <div>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="clientCard bg-white h-100">
                            <div className="row m-0 p-0">
                                <div className="col-sm-4 p-0">
                                    <img src="https://tender-hugle-4d0b27.netlify.app/user2.png" alt="" />
                                </div>
                                <div className="col-sm-8 text-dark py-3">
                                    <h5>Regina Migles</h5>
                                    <p>Designer</p>
                                    <div>
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <p>Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    }
}

export default LowerPart;