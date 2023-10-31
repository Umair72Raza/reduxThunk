import axios from 'axios';
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')
//backend is from mrzreactcrud in react folder
export const fetchData = createAsyncThunk('api/fetchData',async(_,{rejectWithValue}) => {
    try {
        const data = await axios.get('http://localhost:8000/visitor/getvisitors')
        console.log("Data ",data);
        return data;
        //console.log()
    } catch (error) {
        return rejectWithValue(error) //pass error to the reject of promise
    }
});

// Define the async action using createAsyncThunk
export const fetchUserByID = createAsyncThunk('api/fetchUserByID', async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:8000/visitor/getByID/${userId}`);
    const user = response.data;
    return user;
  } catch (error) {
    // Use rejectWithValue to pass the error to the promise's rejection
    return rejectWithValue(error);
  }
});

//http://localhost:8000/visitor/getByID/652c4c5a73895e67191e73ba



const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [], //it is a state
        status: 'Initial state', //Empty State
        error: null
    },
    reducers:{},
    extraReducers: (response)=> //response is a prop
    {
        response
        .addCase(fetchData.pending,(state)=>{
        
          state.status = 'loading'              
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.status = "data loaded successfully"
            state.data = action.payload
        })
        .addCase(fetchData.rejected,(state,action)=>{
        
            state.status = "Data rendering rejected"
            state.error = action.payload
        }).addCase(fetchUserByID.pending,(state)=>{
        
            state.status = 'loading'              
          })
          .addCase(fetchUserByID.fulfilled,(state,action)=>{
              state.status = "data loaded successfully"
              state.data = action.payload
          })
          .addCase(fetchUserByID.rejected,(state,action)=>{
          
              state.status = "Data rendering rejected"
              state.error = action.payload
          })
        
    },
});

export default apiSlice.reducer