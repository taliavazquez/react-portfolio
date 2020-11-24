import React from 'react';

function header() {
    return (
        <header>
        <div className="container-fluid">
            <div className="navbar navbar-default">
                <h1 className="display-6 navbar-brand col-xs-12 col-sm-3 col-xl-2">
                    <strong> Talia Vazquez</strong>
                </h1>
                <nav>
                    <ul className="nav text-center justify-content-end align-items-center">
                        <li className="nav-item border-right">
                            <a href="index.html" className="nav-link">About</a>
                        </li>
                        <li className="nav-item border-right">
                            <a href="portfolio.html" className="nav-link">Portfolio</a>
                        </li>
                        <li className="nav-item border-right">
                            <a href="contact.html" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </header>
    
    );
}

export default header;
