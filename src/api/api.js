import axios from "axios";

export const youtube = () =>
  axios.get(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC_cLZrmA_z6cht512hSmoKw&maxResults=15&key=AIzaSyAzX706XELP0UlAHlm-0HDPSEpRQwtJMX4"
  );
