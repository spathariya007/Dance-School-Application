import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../Helpers/AxiosInstance';
import './ViewManager.css';

const ViewManager = () => {
  const token = window.localStorage.getItem('token');
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get('/academymanagers/getall', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const fetchedData = data.data;
        setUserdata(fetchedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='view-manager-div'>
      <h2>View Academy Manager</h2>
      <table className="manager-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone no</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((x) => (
            <tr key={x.id}>
              <td>
                <img src="" alt="" className="img" />
              </td>
              <td>{x.userName}</td>
              <td>{x.email}</td>
              <td>{x.phone}</td>
              <td>{x.gender}</td>
              <td>{x.dob}</td>
              <td>
                <Link to={`/admindashboard/ManagerDetails/${x.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewManager;
