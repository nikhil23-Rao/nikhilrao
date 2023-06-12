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

  const tokenAlreadyInUse = localStorage.getItem("@spotifytoken");
  console.log("AYYYYY", tokenAlreadyInUse);

  if (tokenAlreadyInUse && JSON.parse(tokenAlreadyInUse!)) {
    const time = JSON.parse(tokenAlreadyInUse).time;
    if ((new Date().getTime() - new Date(time).getTime()) / 60000 <= 59) {
      return JSON.parse(tokenAlreadyInUse).token;
    }
  }

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      qs.stringify(data),
      headers
    );
    console.log("DATA", response.data);
    let date = new Date();
    await localStorage.setItem(
      "@spotifytoken",
      JSON.stringify({ token: response.data.access_token, time: date })
    );
    return response.data.access_token;
  } catch (error) {
    console.log("ERROR", error);
  }
};

async function fetchWebApi() {
  const token = await getAuth();
  const headers: any = { Authorization: "Bearer " + token };

  const { data } = await axios.get(
    `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3`,
    { headers: headers }
  );

  console.log("DATA", data);
  return data;
}

export async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return await fetchWebApi();
}
