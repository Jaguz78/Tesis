import axios from "axios";

const getSections = async (_) =>
  await axios.get("http://localhost:4000/documento");

const createSection = async (section) => {
  return await axios.post("http://localhost:4000/documento", section);
};

const deleteSection = async (section) =>
  await axios.delete(`http://localhost:4000/documento/${section.id_seccion}`);

const moveUp = async (up, down) =>
  await axios.put("http://localhost:4000/documento/up", [up, down]);

const moveDown = async (down, up) =>
  await axios.put("http://localhost:4000/documento/down", [down, up]);

export { getSections, createSection, deleteSection, moveUp, moveDown };
