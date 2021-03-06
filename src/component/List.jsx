import React from "react";

import "./form.css"

const List = (props) => {

    const {employees, goBack} = props;

    return (
        <div className="Heading">
            <h1>EMPLOYEE FEEDBACK DATA</h1>
            <div className="Data">
            {
                employees.map((employee, index) => {
                    return (
                        <div className="employee" key={index}>
                            <h3>
                                Name : {employee.name} |
                                Department : {employee.department} |
                                Rating : {employee.rating}
                            </h3>
                        </div>
                    )
                })
            }
            </div>
            <div>
                <button onClick={() => goBack()} className='btn'>Go Back</button>
            </div>
        </div>
    );
}

export default List;