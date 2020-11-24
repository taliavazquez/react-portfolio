import React from 'react';


function contact() {
    return (
        <div className="container">
            <main className="col-md-8 col-sm-12 mt-5 p-3 mb-2 bg-light text-dark card rounded border border-grey"
            >
                <section>
                    <h2><strong>Contact Me</strong></h2>
                </section>

                {/*contact me form snippet*/}
                 <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input
                            type="name"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="your name here"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="@aol.com @hotmail.com @gmail.com @outlook.com"
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="6"
                        ></textarea>
                    </div>
                </form>
            </main>
         </div>        
    );
}

export default contact;
