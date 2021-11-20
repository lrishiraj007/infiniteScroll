import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRandomUsers: async function (count) {
    try {
      let url;
      if ((count != null) & (count > 1)) {
        url = "https://randomuser.me/api/?results=" + count;
      } else {
        url = "https://randomuser.me/api/?results=10";
      }
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
