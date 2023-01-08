import ServiceArrow from '../assets/images/ServiceArrow.svg'

import { useState } from "react";
const Service = (props) => {
    const [webhover, setWebHover] = useState(false)
        const hover = (e) => {
            e.stopPropagation();
            setWebHover(true);
        }
        const unhover = (e) => {
            setWebHover(false);
        }
    return (
        <div className='service' onMouseOver={(e) => hover(e)} onMouseOut={(e) => unhover(e)}>
            {console.log(props)}
            <h5>{props.service.title}</h5>
            <p>{props.service.subtitle}</p>
            <div className="d-flex justify-content-between">
                <img src={webhover ? props.service.hoverImg : props.service.img} alt="ServiceWebComputer" />
            </div>
            <span style={{ display: webhover ? "block" : "none" }}>
                <img src={ServiceArrow} alt="" />
            </span>
        </div>
    );
}

export default Service;