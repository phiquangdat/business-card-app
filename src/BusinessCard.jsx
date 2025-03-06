import './App.css';

export default function BusinessCard(props) {
    return (
        <div className="businessCard">
            <img src="logo-iso-768x428.webp" alt="Business Logo"></img>
            <h2 className='bc'>{props.name}</h2>
            <p className='bc'>{props.education}</p>
            <p className='job-title'>{props.jobTitle}</p>
            <p className='bc'>{props.company}</p>
            <p>{props.email}</p>
        </div>
    );
}
