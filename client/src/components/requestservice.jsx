const RequestService = (props) => {
    return (
        <div className="request-item d-flex">
            {
                props.services.map(item=>(
                    <div key={item.id} onClick={()=>props.setActive(item.id)} className={props.active===item.id ? "request-active" : ""}>{item.service}</div>)
                )
            }
        </div>
    );
}

export default RequestService;