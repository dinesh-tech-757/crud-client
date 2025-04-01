import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
const createUrl = import.meta.env.VITE_CREATE

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post(createUrl, { name, email, age })
      .then((result) => {
        toast.success("added successfully", result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="flex justify-center items-center mt-[100px]">
      <div className="bg-white px-4 py-2 rounded">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Create New List
        </h1>

        <form
          className="border-l-4 border-blue-500 px-4 py-2 flex flex-col gap-2"
          onSubmit={Submit}
        >
          <div className="flex">
            <label htmlFor="" className="w-[60px] flex">
              Name :{" "}
            </label>
            <input
              type="text"
              required
              className="border-b-2 outline-none text-[10px] w-[200px]"
              placeholder="Enter the name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex">
            <label htmlFor="" className="w-[60px] flex">
              Email :{" "}
            </label>
            <input
              type="email"
              required
              className="border-b-2 outline-none text-[10px] w-[200px]"
              placeholder="Enter the name"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex">
            <label htmlFor="" className="w-[60px] flex">
              Age :{" "}
            </label>
            <input
              type="number"
              required
              className="border-b-2 outline-none text-[10px] w-[200px]"
              placeholder="Enter the name"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button className="inline-block w-max mt-2 bg-green-500 px-2 text-white font-semibold tracking-wider">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateUser;
