import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function List() {
  let navigate = useNavigate();
  const [candidate, setCandidate] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  console.log(candidate);
  const handleDelete = (id) => {
    setCandidate((prev) => [prev.splice(id, 1)]);
    localStorage.setItem("data", JSON.stringify(candidate));
  };
  useEffect(() => {}, [candidate]);
  return (
    <>
      <div class="py-5">
        <h2>
          Candidates List
          <button
            class="btn btn-primary float-end"
            onClick={() => navigate("/")}
          >
            Add Candidate
          </button>
        </h2>
      </div>

      <div class="row">
        <div class="col-12 ms-auto me-auto">
          <div class="card">
            <div class="card-body">
              <table class="table">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Number of Skills</th>
                  <th>Total Work Experience (in months)</th>
                  <th>Actions</th>
                </tr>
                {candidate?.map((item, id) => {
                  let count = 0;
                  item.experience.map((obj, ind) => {
                    count += Number(obj.Duration);
                  });

                  return (
                    <tr>
                      <td>{id + 1}</td>
                      <td>{item.firstname + "" + item.lastname}</td>
                      <td>{item.email}</td>
                      <td>{item.skill.length}</td>
                      <td>{count}</td>
                      <td>
                        <a
                          onClick={() => {
                            navigate("/edit", {
                              state: { item, id },
                            });
                          }}
                        >
                          Edit
                        </a>
                        <a
                          class="text-danger ms-2"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
