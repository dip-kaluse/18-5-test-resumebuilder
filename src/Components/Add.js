import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";

let arr = [];
let temp = [];
function Add() {
  const [navState, setNavState] = useState(false);
  const [message, setMessage] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [count, setCount] = useState(0);
  const [reqState, setReqState] = useState(true);
  const [exp, setExp] = useState([
    { CompanyName: "", Duration: "", responsibilities: "", id: v4() },
    { CompanyName: "", Duration: "", responsibilities: "", id: v4() },
  ]);
  const [candidate, setCandidate] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [skill, setSkill] = useState([
    { Angular: false },
    { React: false },
    { NodeJS: false },
    { JavaScript: false },
    { Flutter: false },
    { Java: false },
  ]);
  const [experience, setExperience] = useState([]);
  let navigate = useNavigate();
  const handleCheckbox = (index, o) => {
    let obj = o[0];
    let skillEdit = skill;
    skillEdit.map((item, ind) => {
      if (ind == index) {
        console.log();
        if (item[obj] == false) {
          item[obj] = true;
          arr.push(obj);
        } else {
          item[obj] = false;
          let tempo;
          tempo = arr.indexOf(obj);
          arr.splice(tempo, 1);
        }
      }
      if (arr.length >= 3) {
        setReqState(false);
      }
    });

    console.log(arr);
  };
  const handleSaveCandidate = (e) => {
    e.preventDefault();
    if (arr.length < 3) {
      alert("min 3 skill required");
      return;
    }
    let messa = "";
    exp.map((obj, index) => {
      if (obj.CompanyName == "") {
        messa = "Company Name is required";
      } else if (obj.Duration == "") {
        messa = "duration is required";
      } else if (obj.responsibilities == "") {
        messa = "responsibilities is required";
      } else {
        messa = "";
      }
    });
    if (messa) {
      alert(messa);
      setMessage(messa);
      return;
    }
    let temp = {
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      email: email,
      add: address,
      count: country,
      stat: state,
      pin: pin,
      skill: arr,
      experience: exp,
    };
    setCandidate((prev) => [...prev, temp]);
    setNavState(true);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(candidate));
    if (navState == true) {
      navigate("/list");
    }
  }, [navState, count, arr]);

  return (
    <form class="was-validated" novalidate>
      <div class="container my-4">
        <main>
          <div class="py-5 text-center">
            <h2>Add Candidate</h2>
          </div>

          <div class="row g-5">
            <div class="col-md-7 col-lg-8 ms-auto me-auto">
              <h4 class="mb-3">Basic Info</h4>
              <div class="row g-3">
                <div class="col-sm-6">
                  <label class="form-label" for="validationCustom01">
                    First name
                  </label>
                  <input
                    type="text"
                    id="validationCustom01"
                    class="form-control "
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div class="col-sm-6">
                  <label class="form-label">Last name</label>
                  <input
                    type="text"
                    class="form-control"
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div class="col-12" onChange={(e) => setGender(e.target.value)}>
                  <label class="form-label">Gender</label>
                  <div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        value="male"
                        name="gender"
                        type="radio"
                        required
                      />
                      <label class="form-check-label">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        value="female"
                        name="gender"
                        type="radio"
                        required
                      />
                      <label class="form-check-label">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        value="other"
                        name="gender"
                        type="radio"
                        required
                      />
                      <label class="form-check-label">Other</label>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <label class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="you@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div class="col-12">
                  <label class="form-label">Address</label>
                  <textarea
                    class="form-control"
                    placeholder="1234 Main St"
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div class="col-md-5">
                  <label class="form-label">Country</label>
                  <select
                    class="form-select"
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="">Choose...</option>
                    <option>India</option>
                    <option>United States</option>
                  </select>
                </div>

                <div class="col-md-4">
                  <label class="form-label">State</label>
                  <select
                    class="form-select"
                    required
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="">Choose...</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </select>
                </div>

                <div class="col-md-3">
                  <label class="form-label">Pin / Zip</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    onChange={(e) => setPin(e.target.value)}
                  />
                </div>
              </div>

              <hr class="my-4" />

              <h4 class="mb-3">Professional Info</h4>

              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label">
                    Choose your skills
                    <span class="small text-muted">(min 3 skills)</span>
                  </label>
                  <div class="mb-3">
                    {skill.map((item, index) => {
                      return (
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input "
                            value="Object.keys(item)"
                            checked={item[index]}
                            onClick={(e) => {
                              handleCheckbox(index, Object.keys(item));
                            }}
                            type="checkbox"
                            required={reqState}
                          />
                          <label class="form-check-label">
                            {Object.keys(item)}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div class="row gy-3">
                <div class="col-12">
                  <label class="form-label">
                    <strong>
                      Experience
                      <span class="small text-muted">(min 2, max 5 items)</span>
                    </strong>
                  </label>
                  {exp.map((obj, index) => {
                    return (
                      <div class="card mx-3 mt-3" key={obj.id}>
                        <div class="card-body">
                          <h6 class="card-title text-muted mb-3">
                            Experience # {index + 1}
                            <a
                              class="float-end text-danger fw-normal"
                              onClick={() => {
                                if (exp.length > 2) {
                                  let exptemp = exp;
                                  exptemp = exptemp.filter(
                                    (obj, ind) => ind != index
                                  );
                                  console.log(exptemp);
                                  setExp(exptemp);
                                  setCount((prev) => prev + 1);
                                }
                              }}
                            >
                              Remove
                            </a>
                          </h6>
                          <div class="row g-3">
                            <div class="col-6">
                              <label class="form-label">Company Name</label>
                              <input
                                type="text"
                                class="form-control"
                                onChange={(e) => {
                                  temp = exp;
                                  temp[index].CompanyName = e.target.value;
                                  setExp(temp);
                                }}
                                required
                              />
                            </div>
                            <div class="col-6">
                              <label class="form-label">
                                Duration{" "}
                                <span class="text-muted">(in months)</span>
                              </label>
                              <input
                                type="number"
                                class="form-control"
                                onChange={(e) => {
                                  temp = exp;
                                  temp[index].Duration = e.target.value;
                                  setExp(temp);
                                }}
                                required
                              />
                            </div>
                            <div class="col-12">
                              <label class="form-label">
                                Describe your responsibilities
                              </label>
                              <textarea
                                class="form-control"
                                onChange={(e) => {
                                  temp = exp;
                                  temp[index].responsibilities = e.target.value;
                                  setExp(temp);
                                  setCount((prev) => prev + 1);
                                }}
                                required
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <a
                    class="d-block mt-3"
                    onClick={() => {
                      if (exp.length < 5) {
                        setExp((prev) => [
                          ...prev,
                          {
                            CompanyName: " ",
                            Duration: "",
                            responsibilities: "",
                            id: v4(),
                          },
                        ]);
                      }
                    }}
                  >
                    Add more experience
                  </a>
                </div>
              </div>

              <hr class="my-4" />

              <button
                class="btn btn-primary"
                type="submit"
                onClick={(e) => handleSaveCandidate(e)}
                disabled={() =>
                  !firstname &&
                  !lastname &&
                  !gender &&
                  !email &&
                  !address &&
                  !country &&
                  !state &&
                  !pin
                }
              >
                Save Candidate
              </button>
            </div>
          </div>
        </main>
      </div>
    </form>
  );
}

export default Add;
