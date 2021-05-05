import React from 'react'

export default function Certificate(props) {
    return (
        <div className="certificate-card">
            <img src={`../Certifications/${props.certificate}`} alt={`${props.certificate + 'img'}`}/>
        </div>
    )
}
