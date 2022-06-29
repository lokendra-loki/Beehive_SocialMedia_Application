import axios from "axios";

//UserDetails
export const userDetail = async () => {
  try {
    await axios.get("/userDetails/get/all");
  } catch (error) {
    console.log(error);
  }
};
