import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portal from './apps/Portal';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Axios from "axios";
import Cookies from 'universal-cookie';
import * as svc from "./components/protocol/ServiceHelper";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const cookies = new Cookies();
const id = urlParams.get("id");

if (id != null) {
    cookies.set('.cbt.devncore.org.authentication.session', id);
}

const token = cookies.get('.cbt.devncore.org.authentication.session');

if(token !== "" && token !== undefined) {
  console.log('exists login token: ', token);
  const data = { "token": token };
  Axios.post(svc.find("/api/Account/Get/User/Login"), data, svc.options)
      .then(function (response) {
          const data = response.data;
          if (data.isError === false) {
              const result = data.result;

              const userInfo = {
                      id: result.id,
                      userName: result.userName,
                      userId: result.UserId,
                      email: result.email,
                      phone: result.phone,
                      name: result.name,
                      school: result.school,
                      gitHubId: result.gitHubId,
                      blog: result.blog,
                      aboutMe: result.aboutMe
              };
              renderDom(userInfo, token);
          }
          else {
            renderDom(null, token);
          }
      })
      .catch(function (error) {
          console.log("why: ", error);
      }
  );
}
else {
    renderDom(null, token);
}


function renderDom(userInfo, token) {
  ReactDOM.render(
    <BrowserRouter>
      <Portal token={token} userInfo={userInfo}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
