import axios from "axios";

const user = localStorage.getItem("usuario") || null;
const token = user ? `Bearer ${user.token}` : null;

const createStudent = async (student) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  return await axios.post("http://localhost:4000/usuarios/create", student);
};

export { createStudent };
