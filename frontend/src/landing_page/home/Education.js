import React from 'react';

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                   <img src="media/images/education.svg" alt="Market education" style={{width:"70%"}} />
                </div>
                <div className="col-6">
                   <h1 className="mb-3 fs-2">Free and open market education</h1>
                   <p>Varsity, the largest online stock market education book in the world covering everything from basics to advance trading</p>
                   <button  style={{textDecoration:"none"}}>Varsity <i class="fas fa-long-arrow-alt-right"></i> </button>
                   <p className="mt-5">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                   <button  style={{textDecoration:"none"}}>TradingQ&A <i class="fas fa-long-arrow-alt-right"></i> </button>
                </div>
            </div>
        </div>
         
                
         
     );
}

export default Education;