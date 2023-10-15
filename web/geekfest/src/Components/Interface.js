import React, { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate, useLocation } from "react-router-dom";

export function Interface() {
  const location = useLocation();
  const navigate = useNavigate();
  function handleClick(){
    navigate("/")
  }

  const Questions = {
    0: "Personal Question: What's the name of your cat?",
    1: "Personal Question: What's the name of your dog?",
    2: "Personal Question: What's the name of your turtle?",
    3: "Personal Question: What's the name of your dolphin?",
  } 
  const [user, modifyUser] = useState(location.state.user);
  const [password, modifyPasswd] = useState(location.state.password);
  const randomQuestion = Questions[Math.floor(Math.random()*4)];

  const handleUserChange = (e) => {
    swal(randomQuestion, {
      content: "input",
    })
      .then((value) => {
        if (randomQuestion === Questions[0] && value === "Iggy") {
          swal(`Success! You typed: ${value}`, {
            icon: "success"
          })
            .then(swal("What name do you want ?", {
              content: "input",
            })
              .then((value => {
                  modifyUser(value);
                  swal({
                    text: "Name changed successfully!",
                    icon: "success"
                  })
              })));
        } else if (randomQuestion === Questions[1] && value === "John") {
          swal(`Success! You typed: ${value}`, {
            icon: "success"
          })
            .then(swal("What name do you want ?", {
              content: "input",
            })
              .then((value => {
                  modifyUser(value);
                  swal({
                    text: "Name changed successfully!",
                    icon: "success"
                  })
              })));
        } else if (randomQuestion === Questions[2] && value === "Johnny") {
          swal(`Success! You typed: ${value}`, {
            icon: "success"
          })
            .then(swal("What name do you want ?", {
              content: "input",
            })
              .then((value => {
                  modifyUser(value);
                  swal({
                    text: "Name changed successfully!",
                    icon: "success"
                  })
              })));
        } else if (randomQuestion === Questions[3] && value === "Joe") {
          swal(`Success! You typed: ${value}`, {
            icon: "success"
          })
            .then(swal("What name do you want ?", {
              content: "input",
            })
              .then((value => {
                  modifyUser(value);
                  swal({
                    text: "Name changed successfully!",
                    icon: "success"
                  })
              })));
        } else {
          swal({
            text: "Incorrect!",
            icon: "warning",
          });
        }

      });
  };

  const handlePassChange = (e) => {
    swal("Personal Question: What's the name of your cat?", {
      content: "input",
    })
      .then((value) => {

        if (value === "Iggy") {
          swal(`Success! You typed: ${value}`, {
            icon: "success"
          })
            .then(swal("What password do you want ?", {
              content: "input",
            })
              .then((value => {
                  modifyPasswd(value);
                  swal({
                    text: "Password changed successfully!",
                    icon: "success"
                  })
              })));
        } else {
          swal({
            text: "Incorrect!",
            icon: "warning",
          });
        }

      });
  };

  const devFunction = (e) => {
    console.log(password)
  };

  return (
    <div className="Container">
    <div class="container m-5">
      <div class="display-1">
        <p>DashBoard</p>
      </div>

      <button class="btn btn-primary float-end" onClick={devFunction}>DevButton (showpasswd)</button>

      <div class="p-3 border double border-dark rounded">

        <div>
          <h5 className="">Username: {user}</h5>
          <button class="btn btn-primary float-end" onClick={handleUserChange}>Change</button>

        </div>
        <div class="pt-3">
          <h5 class="">Password:<input class="border-0 text-white bg-transparent" value={location.state.password} type="password" name="password"/></h5>
          <button class="btn btn-primary float-end" onClick={handlePassChange}>Change</button>

        </div>
      </div>
      <button className="btn btn-primary float-end" onClick={handleClick}>Logout</button>
    </div>
    </div>
  );
};
