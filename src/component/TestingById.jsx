import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserByID } from '../redux/slice';

const TestingById = () => {
  const [results, setResults] = useState(null);
  const dispatch = useDispatch();


  const apiData = useSelector((state) => state.api.data);
  const apiStatus = useSelector((state) => state.api.status);
  const apiError = useSelector((state) => state.api.error);
  const { id } = useParams();
  console.log("api Data ",apiData);
  console.log("Status", apiStatus)
  useEffect(() => {
    // Use the effect to fetch data when `id` changes.
    if (id) {
      dispatch(fetchUserByID(id))
        .then((result) => {
          console.log('results payload', result.payload);
          setResults(result.payload);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id, dispatch]);

  return (
    <div>
      {results ? <div>{results.visitorName}</div> : <div>Nothing Found</div>}
    </div>
  );
};

export default TestingById;
