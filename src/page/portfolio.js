import React from 'react';

function portfolio() {
    return (
        <div className="container">
            <main className="row bg-white border border-grey col-md-12 col-sm-12 col-lg-8 card rounded">
                <div className="card">
                    <h2><strong>Portfolio</strong></h2>
                    <hr />
                    <section className="row justify-content-around">
                        <div className="card" style="width: 18rem;">
                            <div className="card-body">
                                <img className="card-img-top" src="./src/computerscreen1.png" alt="" />
                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                    <a href="#" className="stretched-link text-white">Slide Deck Live Site</a>
                                </div>

                            </div>
                        </div>

                        <div className="card" style="width: 18rem;">
                            <div className="card-body">
                                <img className="card-img-top" src="./src/computerscreen2.png" alt="" />
                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                    <a href="#" className="stretched-link text-white">Portland May Day</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="row justify-content-around">
                        <div className="card" style="width: 18rem;">
                            <div className="card-body">
                                <img className="card-img-top" src="./src/computerscreen3.png" alt="" />
                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                    <a href="#" className="stretched-link text-white">Lab Tools Banner</a>
                                </div>
                            </div>

                        </div>


                        <div className="card" style="width: 18rem;">
                            <div className="card-body">
                                <img className="card-img-top" src="./src/burger.png" alt="" />
                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                    <a href="https://github.com/taliavazquez/burger" className="stretched-link text-white">Burger Ordering App</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="row justify-content-around" id="row-bottom">
                        <div className="card" style="width: 18rem;">
                            <div className="card-body">
                                <img className="card-img-top" src="./src/logos.png" alt="" />
                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                    <a href="#" className="stretched-link text-white">Logos</a>
                                </div>
                            </div>
                        </div>

                        <div className="card invisible" style="width: 18rem;">
                            <div className="card-body">
                                <img className="card-img-top" src="" alt="" />
                                <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                    <a href="#" className="stretched-link text-white">Word Guess</a>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </main>
        </div>
    );
}

export default portfolio;
