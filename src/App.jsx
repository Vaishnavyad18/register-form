
import { MenuItem, TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Stack, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    course: '',
    dob: '',
    gender: ''
  });

  const [error, setError] = useState({});
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsAlertVisible(true);
    }
  };

  
  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      course: '',
      dob: '',
      gender: ''
    });
    setError({});
    setIsAlertVisible(false); 
  };

  const validate = () => {
    let tempErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const addressRegex = /^[A-Za-z0-9\s,.-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    const yearRegex = /^(200[2-9])-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;

     if (!formData.name || !nameRegex.test(formData.name)) {
       tempErrors.name = '*please enter your name';
     }

    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      tempErrors.mobile = '*enter valid mobile number';
    }

     if (!formData.address || !addressRegex.test(formData.address)) {
       tempErrors.address = '*enter your address';
     }

    if (!formData.email || !emailRegex.test(formData.email)) {
      tempErrors.email = '*enter your email';
    }
    

    setError(tempErrors); 

    
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <>
      <div className='container' style={{ display: 'flex',flexWrap:'wrap', paddingTop: '0px' }}>
        <div className='form' style={{ border: 'solid black' }}>
          <h1 style={{ textAlign: 'center', marginTop: '10px', fontSize: '30px',color:'red ' }}>Student Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: '30px', marginLeft: '23px'}} className='mb-5'>
              <TextField error={!!error.name} helperText={error.name} name="name" value={formData.name} onChange={handleChange} label="Name" variant="outlined" style={{ width: '500px' }} slotProps={{
                    inputLabel: {
                        style: { color: 'black' } 
                    }
                }}  />
            </div>
            <div style={{ marginTop: '30px', marginLeft: '23px' }} className='mb-5'>
              <TextField error={!!error.address} helperText={error.address} name="address" value={formData.address} onChange={handleChange} label="Address" variant="outlined" style={{ width: '500px' }} slotProps={{
                    inputLabel: {
                        style: { color: 'black' } 
                    }
                }}  />
            </div>
            <div className='GENDER'>
            <div style={{ marginTop: '30px', marginLeft: '23px' }} className='mb-5'>
              <TextField error={!!error.mobile} helperText={error.mobile} name="mobile" value={formData.mobile} onChange={handleChange} label="Mobile" variant="outlined" style={{ width: '240px' }} slotProps={{
                    inputLabel: {
                        style: { color: 'black' }  
                    }
                }} />
            </div>
            <div style={{ marginTop: '30px', marginLeft: '21px' }} className='mb-5 '>
              <TextField error={!!error.email} helperText={error.email} name="email" value={formData.email} onChange={handleChange} type='email' label="Email" variant="outlined" style={{ width: '240px' }} slotProps={{
                    inputLabel: {
                        style: { color: 'black' } 
                    }
                }} />
            </div>
            </div>
            <div style={{ marginTop: '30px', marginLeft: '23px' }} className='mb-5'>
              <TextField name="course" value={formData.course} onChange={handleChange} select label="Course" variant="outlined" style={{ width: '500px' }}slotProps={{
                    inputLabel: {
                        style: { color: 'black' } 
                    }
                }}  >
                <MenuItem value="biology">Biology</MenuItem>
                <MenuItem value="computer science">Computer Science</MenuItem>
                <MenuItem value="commerce">Commerce</MenuItem>
                <MenuItem value="humanities">Humanities</MenuItem>
              </TextField>
            </div>

            <div className='GENDER'>
              { <div style={{ marginTop: '30px', marginLeft: '23px' }} className='mb-5'>
                <TextField name="dob" error={!!error.dob} helperText={error.dob} value={formData.dob} onChange={handleChange} label="Date of Birth" variant="outlined" type='date' style={{ width: '220px' }} slotProps={{ inputLabel:{shrink: true,style: { color: 'black' } } }} />
              </div> }

             
              { <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend"></FormLabel>
                      <RadioGroup
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        row>
                        <FormControlLabel style={{ marginTop: '40px', marginLeft: '20px' }} value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel style={{ marginTop: '40px' }} value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel style={{ marginTop: '40px' }} value="Other" control={<Radio />} label="Other" />
                      </RadioGroup>
                   </FormControl>
                </Grid>
              </Grid> }

            </div>

            <Stack direction="row" spacing={2}>
              <Button type='submit' variant="contained" className='bg-dark' style={{ width: '30%', height: '30px', marginLeft: '70px', marginTop: '20px', marginBottom: '10px', backgroundColor: 'green', borderRadius: '0px' }}>Submit</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: '30%', height: '30px', marginLeft: '80px', marginTop: '20px', marginBottom: '10px', backgroundColor: 'red', color: 'white', borderRadius: '0px' }}>Clear</Button>
            </Stack>

          </form>
        </div>
      </div>

      {isAlertVisible && (
        <div className='container' style={{ display: 'flex',flexWrap:'wrap', backgroundColor: 'bisque', justifyContent: 'center', width: '300px',height:'300px', paddingLeft: '10px', borderRadius: '0px', position: 'fixed', top: '0%', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
          <div style={{ color: 'black' }}>
            <h2 style={{ margin: '1rem 0px', color: 'green' }}>Registration Success!!!</h2>
            <p style={{ marginTop: '0.5rem' }}>Name: {formData.name}</p>
            <p style={{ marginTop: '0.5rem' }}>Address: {formData.address}</p>
            <p style={{ marginTop: '0.5rem' }}>Mobile No: {formData.mobile}</p>
            <p style={{ marginTop: '0.5rem' }}>Email Address: {formData.email}</p>
            <p style={{ marginTop: '0.5rem' }}>Course Selected: {formData.course}</p>
            <p style={{ marginTop: '0.5rem' }}>Date of Birth: {formData.dob}</p>
            <p style={{ margin: '0.5rem 0px' }}>Gender: {formData.gender}</p> 
            <button onClick={() => setIsAlertVisible(false)} style={{
              position:'absolute',
               left: '80%', transform: 'translateX(-50%)',
               bottom:'10px', 
              
              padding: '5px 5px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '0px',
              cursor: 'pointer',
              fontSize:'1rem'
            }}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;