import Map from './components/Map.js';
import { useState, useEffect } from 'react';

function App() {
  const [evntData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const response = await fetch(
        'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
