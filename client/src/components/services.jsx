import Service from './service'

const Services = (props) => {
    return (
        <section className="third-section" id='service'>
            <h3>Услуги</h3>
            <div className="services">
                {props.services.services.map(item=><Service key={item.id} service = {item}/>)}
            </div>
        </section>
    );
}

export default Services;