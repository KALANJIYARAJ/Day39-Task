import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
import { config } from "./config";

function App() {
  const [data, setData] = useState("");
  const createFolder = async () => {
    try {
      const folder = await axios.get(`https://day39taskserver.herokuapp.com/filecreate`);
      setData(folder.data.message);
    } catch (error) {
      alert("something Went wrong");
    }
  };

  return (
    <div className="container-lg">
      <div className="row m-5">
        <div className="col-6">
          <button onClick={createFolder} className="btn btn-primary btn-sm">
            Create Folder
          </button>
        </div>
        <div className="col-6">
          <h5>{data}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
