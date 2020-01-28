import React, { useState, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';

const Sidebar = () => {


    const [navStatus, setNavStatus] = useState(false);


    const handleNavShow = () => {
        setNavStatus(!navStatus);
    }





    return (
        //Need fragment in order to return two parent elements
        <Fragment>
            <input type="submit" value="Settings" style = {{position: 'absolute', left: 10, top: 10}} onClick={handleNavShow} />

            <CSSTransition>
                <div
                className = {navStatus ? 'sidenav' : 'sidenav-hidden'}
                >  


                <input type="submit" value="Close" style = {{position: 'absolute', left: 10, top: 10}} onClick={handleNavShow} />
                </div>
            </CSSTransition>
            
        </Fragment>
        
    );
}

export default Sidebar;