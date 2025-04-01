import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const getUrl = import.meta.env.VITE_GET;
const deleteUrl = import.meta.env.VITE_DELETE;

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(getUrl)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("Error fetching users:", err));
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${deleteUrl}/${id}`);
      toast.success("Deleted Successfully");

      // Remove the deleted user from the state
      setUsers((prevUsers) => prevUsers.filter(user => user._id !== id));
      
    } catch (err) {
      console.log("Error deleting user:", err);
    }
  };

  return (
    <main className="flex justify-center items-center pt-[100px]">
      <section className="bg-white sm:px-1 px-8 py-4 rounded flex flex-col justify-center">
        <Link
          to="/create"
          className="bg-green-400 flex items-center justify-center w-[70px] mb-2 rounded text-white font-bold px-1"
        >
          Add +
        </Link>
        <table className="w-full table-auto">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Email
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Age
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="mt-2">
            {users?.map((user, index) => (
              <tr key={index}>
                <td className="px-2 py-1 text-sm text-gray-700">{user.name}</td>
                <td className="px-2 py-1 text-sm text-gray-700">{user.email}</td>
                <td className="px-2 py-1 text-sm text-gray-700">{user.age}</td>
                <td className="px-2 py-1 text-sm text-gray-700 flex gap-1">
                  <Link
                    to={`/update/${user._id}`}
                    className="bg-blue-500 px-2 text-sm text-white font-semibold rounded-full"
                  >
                    Edit
                  </Link>
                  <button
                    className="bg-red-500 px-2 text-sm text-white font-semibold rounded-full"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default User;
