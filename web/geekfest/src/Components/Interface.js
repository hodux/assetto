import React, { useState } from 'react';
import swal from 'sweetalert';

export const Interface = () => {

  const [user, modifyUser] = useState("INPUTNAME");
  const [valid, setValid] = useState(false);

  const handleUserChange = (e) => {
    swal("Personal Question: What's the name of your cat?", {
      content: "input",
    })
      .then((value) => {

        if (value === "Iggy") {
          setValid(true);
          swal(`Success! You typed: ${value}`, {
            icon: "success"
          })
            .then(swal("What name do you want ?", {
              content: "input",
            })
              .then((value => {
                if (valid) {
                  modifyUser(value);
                }
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
    <div class="container m-5">
      <div class="display-1">
        <p>Settings</p>
      </div>
      <div class="p-3 border double border-dark rounded">

        <div>
          <button class="btn btn-primary float-end" onClick={handleUserChange}>Change</button>
          <h5 class="">Username : {user}</h5>
        </div>
        <div class="pt-3">
          <button class="btn btn-primary float-end">Change</button>
          <h5 class="">Password : *****</h5>
        </div>

      </div>
    </div>
  );
};
