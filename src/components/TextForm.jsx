import React from 'react'

export default function TextForm(props) {
    return (
        <div className='container'>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className='btn btn-outline-primary mx-1'>Upper Case</button>
            <button className='btn btn-outline-primary mx-1'>Lower Case</button>
            <button className='btn btn-outline-primary mx-1'>Clear</button>
            <button className='btn btn-outline-primary mx-1'>Speak</button>
            <button className='btn btn-outline-primary mx-1'>Remove Extra Space</button>
            <button className='btn btn-outline-primary mx-1'>Copy Text</button>
        </div>
    )
}
