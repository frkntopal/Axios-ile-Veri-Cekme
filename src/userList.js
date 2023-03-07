import React from "react";
import { Card } from "react-bootstrap";

function UsersList({ isLoading, users }) {
  return (
    <div>
      <h1>Users</h1>
      {isLoading ? (
        <div className="loading">
          <i className="fa fa-spinner fa-spin"></i>
          Loading...
        </div>
      ) : (
        <div className="card-container">
          {users.map((user) => (
            <Card key={user.id}>
              <Card.Body className="body">
                <Card.Title className="title">
                  <div>Name : {user.name}</div>
                </Card.Title>
                <Card.Subtitle className="subtitle">
                  Surname : {user.username}
                </Card.Subtitle>
                <div className="information">
                  {" "}
                  <Card.Text>Phone Number : {user.phone}</Card.Text>
                  <Card.Text>
                    Address : {user.address.city}/{user.address.street}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersList;
