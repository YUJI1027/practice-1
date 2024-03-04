import logo from './logo.svg';
import './App.css';
import ImageGrallery from './ImageGrallery';
import { useState, useRef } from 'react';


function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    //APIURL
    const endpointURL =
     `https://pixabay.com/api/?key=42270420-13883627d9cd44993c233b1b0&q=${ref.current.value}&image_type=photo`;

    //APIを叩く（データフェッチング)
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      });

  };

  return (<div className="container">
    <h2>My Search</h2>
    <form onSubmit={(e) => handleSubmit(e)}> 
      <input type="text" placeholder="画像を検索する" ref={ref}/>
    </form>
    <ImageGrallery fetchData={fetchData} />
  </div>
  );
}

export default App;
