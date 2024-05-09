import axios from "axios";

const user = localStorage.getItem("usuario") || null;
const token = user ? `Bearer ${user.token}` : null;

const login = async (user) => {
  return await axios.post("http://localhost:4000/login", user);
};

const changePassword = async () => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  return await axios.get("http://localhost:4000/cambiarContraseña");
};

export { login, changePassword };
