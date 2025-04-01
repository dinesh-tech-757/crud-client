import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const getUrl = import.meta.env.VITE_GETUSER;
const updateUrl = import.meta.env.VITE_UPDATE;

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${getUrl}/${id}`)
      .then((res) => {
        setName(res.data.name || "");
        setEmail(res.data.email || "");
        setAge(res.data.age || "");
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`${updateUrl}/${id}`, { name, email, age })
      .then(() => {
        toast.success("Data Updated Successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section className="flex justify-center items-center mt-[100px]">
        <div className="bg-white px-4 py-2 rounded">
          <h1 className="text-center text-2xl font-semibold mb-4">Update List</h1>

          <form
            onSubmit={Update}
            className="border-l-4 border-blue-500 px-4 py-2 flex flex-col gap-2"
          >
            <div className="flex">
              <label className="w-[60px] flex">Name:</label>
              <input
                value={name}
                type="text"
                required
                className="border-b-2 outline-none text-[10px] w-[200px]"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex">
              <label className="w-[60px] flex">Email:</label>
              <input
                value={email}
                type="email"
                required
                className="border-b-2 outline-none text-[10px] w-[200px]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex">
              <label className="w-[60px] flex">Age:</label>
              <input
                value={age}
                type="number"
                required
                className="border-b-2 outline-none text-[10px] w-[200px]"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <button className="inline-block w-max mt-2 bg-green-500 px-2 text-white font-semibold tracking-wider">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateUser;
