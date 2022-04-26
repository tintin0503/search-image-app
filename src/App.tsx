import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [keySearch, setKeySearch] = useState("");
  const [resData, setResData] = useState<any>([]);

  const accessKey = '7nAJmjGoiC2mqB6jWun9hEWexTayBpI8syQ5ACOb_c4';

  const submit = () => {
    fetchRequest();
  };

  const fetchRequest = async () => {
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${keySearch}&client_id=${accessKey}`);
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setResData(result);
  }

  useEffect(() => {
    fetchRequest();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ textAlign: 'center', marginTop: '10px' }}>
          <div className="col-12 d-flex justify-content-center align-items-center input">
            <input
              className="col-3 form-control-sm py-1 fs-4 text-capitalize border border-3 border-dark"
              type="text"
              placeholder="Search Anything..."
              value={keySearch}
              onChange={(e) => setKeySearch(e.target.value)}
            />
            <button
              type="submit"
              onClick={submit}
              className="btn bg-dark text-white fs-3 mx-3"
            >
              Search
            </button>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-evenly flex-wrap" style={{ marginTop: '5px'}}>
        {resData.map((val: any) => {
          return (
            <>
              <img
                className="col-3 img-fluid img-thumbnail"
                src={val.urls.small}
                alt="val.alt_description"
              />
            </>
          );
        })}
</div>;
      </div>
    </>
  );
}

export default App;
