import React from "react";
import moment from "moment/moment";

function NameListItem(props) {
    return (
        <React.Fragment>
            <li className="list-group-item shadow-sm">
                <div className="row align-items-center">
                    <div className="col-2">
                    <img src={props.avatar} alt={props.name} className="border border-dark rounded-circle shadow-sm"/>
                    </div>
                    <div className="col-10">
                    <h4>Name - {props.name}</h4>
                <p>City - {props.city} | {props.email}</p> 
                <small>{moment(props.birthday).format('DD-MM-YYYY')}</small>
                    </div>
                </div>
            </li>
        </React.Fragment>
    )
}

export default NameListItem;