"use strict";
import https from "https";

const getUsernameAndOption = async ()=>{
    const args =  process.argv.slice(2);
    if(args.length === 0){
        throw new Error("Please provide a username");
    }
    return {username:args[0],option:args[1]};
}

const {username,option} = await getUsernameAndOption();

const options = {
  hostname: "api.github.com",
  path: `/users/${username}/events/public`,
  method: "GET",
  headers: {
    "User-Agent": "node.js", 
    "Accept": "application/vnd.github.v3+json"
  }
};

https.get(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  let data = "";
  res.on("data", (chunk) => { data += chunk; });
  res.on("end", () => {
    try {
      const eventType = capitalize(option) + "Event";
      data = JSON.parse(data).filter((item) => item.type === eventType);
      console.log(data);
    } catch (err) {
      console.error("Failed to parse JSON:", err.message);
    }
  });
});

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


