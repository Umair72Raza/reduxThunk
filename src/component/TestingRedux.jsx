import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice';
import { useNavigate } from 'react-router-dom';

const TestingRedux = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api.data);
  const apiStatus = useSelector((state) => state.api.status);
  const apiError = useSelector((state) => state.api.error);
  

  const [searchId, setSearchId] = useState();
  const [buttonClicked, setButtonClicked] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = (event) => {
    setSearchId(event.target.value);
    
  }

  const navigate = useNavigate();

  const handleSubmit = () => {
    //event.preventDefault();
    if(searchId)
    {
      navigate(`/TestingRedux/${searchId}`);
    }
    };

  useEffect(() => {
    if (buttonClicked) {
      dispatch(fetchData());
      
    }
  }, [buttonClicked, dispatch]);

  const renderData = () => {
    if (apiStatus === 'loading') {
      return <div>loading ...</div>;
    }

    if (apiStatus === 'failed') {
      return <div>{apiError}</div>;
    }

    if (apiData.data) {
      return apiData.data.map((value, key) => (
        <div key={key}>
          Visitor: {value.visitorName}<br/>
         {value._id}
          </div>
      ));
    }
    return null;
  };

  return (
    <div>
      <button onClick={() => setButtonClicked(true)}>Get DATA</button>
      {buttonClicked && renderData()}

      <form onSubmit={handleSubmit}>
        <label>
          Search By Id:
          <input type="text" value={searchId} onChange={(e)=>setSearchId(e.target.value)} />
        </label>
       <div> {
            <input type="submit" value="Submit" /> 
        }</div>
        
      </form>
      
    </div>
  );
};

export default TestingRedux;
