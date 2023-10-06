import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';
import Footer from './footer';

const tourDataUrl = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tourData, setTourData] = useState([{
    id: "",
    name: "",
    info: "",
    image: "",
    price: ""
  }]);


  const fetchTours = async () => {
    try {
      var tours = await fetch(tourDataUrl);
      var jsonTours = await tours.json();
      setTourData(jsonTours);
    } catch (error) {
      console.log(error);
      return <h1>Oops! Something went wrong. Please refresh the page.</h1>
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchTours();
  }, [])

  const removeTour = (id: string) => {
    var newTours = tourData.filter(t => t.id !== id);
    setTourData(newTours);
  }

  if (loading) return <Loading />;

  return (
    <>
      <div className='title'>
        <h3>Summer Tours</h3>
        <div className="title-underline"></div>
        {tourData.length === 0 &&
          <button className="btn" style={{ marginTop: '1rem' }} onClick={fetchTours}>Refresh</button>
        }
      </div>
      <main>
        <Tours tours={tourData} removeTour={removeTour} />
      </main>
      <Footer />
    </>
  );
}

export default App;
