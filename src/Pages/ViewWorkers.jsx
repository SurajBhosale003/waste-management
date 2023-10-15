import DataTable from "./DataTable";
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom'; 
import "../App.css";

function ViewWorkers() {
  const [data, setData] = useState([]);
  const empCollectionRef = collection(db, "workerss");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const info = await getDocs(empCollectionRef);
      setData(info.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log('Data after fetching:', data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // console.log('Data when rendering:', data);

  return (
    <div>
      <div className="Data-Display">
        <center>
          <h1>List of Workers</h1>
          <Link to="/admin-page">
          <Button variant="contained" color="primary">
              Go to Admin Panel
            </Button>
          </Link>
        </center>
        <DataTable data={data} />
      </div>
    </div>
  );
}

export default ViewWorkers;
