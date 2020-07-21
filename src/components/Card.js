import React from 'react';

const Card = props => (
    <div className="col-md-3 card-root">
      <p><strong>Accoount ID: </strong>{props.item.accountId}</p>
      <p><strong>Age: </strong>{props.item.age}</p>
      <p><strong>First Name: </strong>{props.item.firstName}</p>
      <p><strong>Last Name: </strong>{props.item.lastName}</p>
    </div>
)

export default Card;
