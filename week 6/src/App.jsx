import React, {useState, useEffect} from "react";

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Effect will run after the component is mounted
    const fetchData = async() => {
      try{
      const response = await fetch('<https://api.example.com/data>')
      const result = await response.json();
      setData(result);
    }catch(error) {
      console.error('Error fetching data:', error);
    } 
  };
  fetchData();

  //Effect cleanup (will run before unmounting)
  return() => {
    console.log('Component will unmount. Cleanup here.');
  };

  }, []); //Empty dependency array means the effect runs once after mount
  
  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ): (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataFetcher;


