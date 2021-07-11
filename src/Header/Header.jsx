import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    state = { hideHeader: true }
    toggleHeader = () => {
        this.setState((state) => {
            console.log(state);
            return { hideHeader: !state.hideHeader }
        })
    }

    render() {
        return <header >
            <div className="container py-3 d-flex flex-wrap align-item-center justify-content-between">
                <div className="d-flex align-item-center">
                    <h3 className="logo"><i>Logo</i></h3>
                    {/* <img src="{https://cdn1.vectorstock.com/i/1000x1000/52/35/uzbekistan-welcome-to-word-text-with-handwritten-vector-21235235.jpg}" alt="" /> */}
                    <ul className="d-none d-lg-flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact</a></li>
                        <li></li>
                    </ul>
                </div>
                <div className="d-none d-lg-flex align-item-center">
                    <a href="#" className="btn text=primary fw-bold">Login</a>
                    <a href="#" className="btn btn-primary fw-bold">Become and member</a>
                </div>
                <div className="d-block d-lg-none">
                    <button className="btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button className="btn">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    <button className="btn" onClick={this.toggleHeader}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className={`w-100 ${this.state.hideHeader && "hide-header" || ""}`} >
                    <ul className="text-center">
                        <li className="my-4"><a href="#">Home</a></li>
                        <li className="my-4"><a href="#">Product</a></li>
                        <li className="my-4"><a href="#">Pricing</a></li>
                        <li className="my-4"><a href="#">Contact</a></li>

                    </ul>
                </div>
            </div>

        </header >
    }
}
export default Header;