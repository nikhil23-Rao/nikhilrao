import axios from "axios";
import dayjs from "dayjs";
import qs from "qs";

// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization

export const getAuth = async () => {
  const clientId = "c3d43ab64c8d4888ae5cb0a9b16a6ab7";
  const clientSecret = "6778a3231f8d40b08da5ab00617988c5";

  const headers: any = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    grant_type: "client_credentials",
  };

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );
    console.log("DATA", response.data);
    // const spotify: any = {
    //   Authorization: "Bearer " + response.data.access_token,
    // };
    // const { data: results } = await axios.get(
    //   `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3`,
    //   { headers: spotify }
    // );

    // console.log("RES", results);
    let date = new Date();

    return response.data.access_token;
  } catch (error) {
    console.log("ERROR", error);
  }
};
