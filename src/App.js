import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  let empty = {
    login: "Default",
    name: "Default Name",
    avatar_url:
      "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2020/3/16/panda2_getty.jpg.rend.hgtvcom.616.770.suffix/1584396583246.jpeg",
  };

  let [name, setName] = useState("");
  let [user, setUser] = useState(empty);
  return (
    <div className="App">
      <input
        style={{
          marginTop: "16px",
        }}
        value={name}
        onChange={function (event) {
          setName(event.target.value);
        }}
      />
      <h1>My Github username is {name}</h1>
      <button
        style={{
          marginBottom: "16px",
        }}
        disabled={!name}
        onClick={function () {
          axios
            .get(`https://api.github.com/users/${name}`)
            .then(function (response) {
              setUser(response.data);
              console.log(response.data);
            })
            .catch(function (error) {
              setUser(empty);
            });
        }}
      >
        Submit
      </button>
      <br />

      <img src={user.avatar_url} width="200px" height="200px" />
      <h3>{user.name}</h3>
    </div>
  );
}

export default App;
