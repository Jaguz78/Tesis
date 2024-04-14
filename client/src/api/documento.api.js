import axios from "axios";

const getSections = async (_) =>
  await axios.get("http://localhost:4000/documento");

const createSection = async (section) => {
  return await axios.post("http://localhost:4000/documento", section);
};

export { getSections, createSection };
