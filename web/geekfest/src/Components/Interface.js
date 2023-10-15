import React, { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate, useLocation } from "react-router-dom";

export function Interface() {
  const location = useLocation();
  const navigate = useNavigate();
  function handleClick(){
    navigate("/")
  }

  const [user, modifyUser] = useState(location.state.user);
  const handleUserChange = (e) => {
    swal("Personal Question: What's the name of your cat?", {
      content: "input",
    })
      .then((value) => {

        if (value === "Iggy") {
          swal(`Success! You typed: ${value}`, {
            icon: "success"
          })
            .then(swal("What name do you want ?", {
              content: "input",
            })
              .then((value => {
                  modifyUser(value);
              })));
        } else {
          swal({
            text: "Incorrect!",
            icon: "warning",
          });
        }

      });
  };
  return (
    <div className="Container">
    <div class="container m-5">
      <div class="display-1">
        <p>DashBoard</p>
      </div>
      <div class="p-3 border double border-dark rounded">

        <div>
          <h5 className="">Username: {user}</h5>
          <button class="btn btn-primary float-end" onClick={handleUserChange}>Change</button>

        </div>
        <div class="pt-3">
          <h5 class="">Password:<input class="border-0 text-white bg-transparent" value={location.state.password} type="password" name="password"/></h5>
          <button class="btn btn-primary float-end">Change</button>

        </div>
      </div>
      <button className="btn btn-primary float-end" onClick={handleClick}>Logout</button>
    </div>
    </div>
  );
};
