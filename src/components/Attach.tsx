import React from 'react';
import click  from '../assets/click.png'
type AttachProps = {
    
};

const Attach:React.FC<AttachProps> = () => {
    
    return <div>
        <div>
            <img src={click} alt="" />
        </div>
    </div>
}
export default Attach;