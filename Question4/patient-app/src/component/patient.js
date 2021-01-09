import React from 'react';
const Patient = (props) => {
    return (
        <div>
            <p>
                <label>Name of patient : </label>
                <input type="text" readOnly={true} value={props.name} />
            </p>
            <p>
                <label>Organization name : </label>
                <input type="text" readOnly={true} value={props.org} />
            </p>
            <p>
                <label>Gender : </label>
                <input type="text" readOnly={true} value={props.gender} />
            </p>
            <p>
                <label>Number of conditions : </label>
                <input type="text" readOnly={true} value={props.conditions.length} />
            </p>
            <p>
                <label>List of all conditions : </label>
            </p>
            <ul>
                {props.conditions.map((c, i) => <li key={i}>{c}</li>)}
            </ul>

        </div>
    );
}

export default Patient;