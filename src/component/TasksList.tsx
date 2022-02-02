import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Route, Router, Link, useParams } from "react-router-dom";
import "./styles.css";
//import './fontawesome';
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import "bootstrap/dist/css/bootstrap.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
//import  styledComponents from "styled-components";

// Could not find a declaration file for module 'styled-components'. '/var/www/html/public_html/react_js/myapp_task/node_modules/styled-components/dist/styled-components.cjs.js' implicitly has an 'any' type.
//   Try `npm i --save-dev @types/styled-components` if it exists or add a new declaration (.d.ts) file containing `declare module 'styled-components';`

import backgroundImage from "./background.png";

const TasksList = () => {
  const [todos, settodos] = useState<YourTodosType[]>([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    const fetchData = async () => {
      try {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(JSON.stringify(data));
            //settodos(data.filter((todo: YourTodosType) => todo.userId == params.userId));
            settodos(data);
            //settodos(data.filter(todo => todo.userId == params.userId));
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
        type YourTodosType = {
          userId: string;
          id: string;
          title: string;
          completed: string;
        };


        return ( 
              <div className="container">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Task List</h4>
                       <a className="btn btn-primary btn-sm" href={'/'}>Back</a>
                      <div className="row">
                        <table className="table table-bordered">
                          <thead className="thead-light">
                            <tr>
                              <th>User Id</th>
                              <th>Id</th>
                              <th>Title</th>
                              <th>Completed</th>
                            </tr>
                          </thead>
                          <tbody>
                            {todos.length > 0 ? (
                              todos.map((todo, idx) => {
                                return (
                                  <tr key={idx}>
                                    <td>{todo.userId}</td>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    <td>{todo.completed}</td>
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
        );
    //}
}
export default TasksList;

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