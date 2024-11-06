//src/components/Layout/Layout.jsx

import { useState } from 'react'; 
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai"; 
import Menus from '../Menus/Menus'; 
import Home from '../../Pages/Home/Home'; 
import './Layout.css'; 

const Layout = () => {
    const [toggle, setToggle] = useState(false); 
    const handleToggle = () => {
        setToggle(!toggle); 
    }

    return (
        <div className="sidebar-section">
            <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
                <div className="sidebar-toggle-icons">
                    <p onClick={handleToggle}>
                        {toggle ? (
                            <AiOutlineDoubleLeft size={30} />
                        ) : (
                            <AiOutlineDoubleRight size={30} />
                        )}
                    </p>
                </div>
                <Menus toggle={toggle} />
            </div>
            <div className='container'>
                <Home /> 
            </div>
        </div>
    );
}

export default Layout;


