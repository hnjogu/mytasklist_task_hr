import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Route, Router, Link } from "react-router-dom";
import "./styles.css";

// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
//import  styledComponents from "styled-components";

// Could not find a declaration file for module 'styled-components'. '/var/www/html/public_html/react_js/myapp_task/node_modules/styled-components/dist/styled-components.cjs.js' implicitly has an 'any' type.
//   Try `npm i --save-dev @types/styled-components` if it exists or add a new declaration (.d.ts) file containing `declare module 'styled-components';`

import backgroundImage from "./background.png";

const Home = () => {
  const [users, setUsers] = useState<YourUserType[]>([]);
  //const [users, setUsers] = useState("");

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    const fetchData = async () => {
      try {
        // const response = await fetch(url);
        // const json = await response.json();
        // console.log(json.slip.users);
        // setUsers(json.slip.users);
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(JSON.stringify(data));
            setUsers(data);
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
//type Users = typeof users
      //type Users = typeof users {
        type YourUserType = {
          id: string;
          name: string;
          username: string;
          email: string;
          address: string;
          phone: string;
          website: string;
          company: string;
        };

    //const Table = ({ users }: { users: YourUserType[] }) => {

        return ( 
              <div className="padding">
                <div className="row d-flex justify-content-center">
                  <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">User Data</h4>
                        <div className="table-responsive">
                          <table className="table table-bordered">
                            <thead className="thead-light">
                              <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Company</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {users.length > 0 ? (
                                users.map((user, idx) => {
                                  return (
                                    <tr key={idx}>
                                      <td>{user.id}</td>
                                      <td>{user.name}</td>
                                      <td>{user.username}</td>
                                      <td>{user.email}</td>
                                      <td>{JSON.stringify(user.address)}</td>
                                      <td>{user.phone}</td>
                                      <td>{user.website}</td>
                                      <td>{JSON.stringify(user.company)}</td>
                                      <td>
                                          <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group" style={{ marginBottom: "20px" }}>
                                           {/*<Link to={`/TasksList/${user.id}`} 
                                                      className="btn btn-sm btn-outline-secondary">Tasks List</Link>*/}
                                        {/*      <Link className="btn btn-sm btn-outline-secondary"
                                                style={{ display: "block", margin: "1rem 0" }}
                                                  to={`/TasksList/${user.id}`}key={user.id}>
                                                   Tasks List
                                              </Link>*/}
                                              <Link className="btn btn-sm btn-outline-secondary"
                                                style={{ display: "block", margin: "1rem 0" }}
                                                to={`/TasksList/${user.id}`}
                                                key={user.id}>
                                                Tasks List
                                              </Link>
                                            </div>
                                          </div>
                                      </td>

                                    </tr>
                                  );
                                })
                              ) : (
                                <tr>
                                  <td>Loading...</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
        );
    //}
}
export default Home;

const Wrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Description = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;