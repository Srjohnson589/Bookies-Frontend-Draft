import './Home.css'
import { useState } from 'react';
import SignUp from '/src/views/Signup/Signup.tsx'
import Login from '/src/views/Login/Login.tsx'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';

const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openL, setOpenL] = useState(false);
    const handleOpenL = () => setOpenL(true);
    const handleCloseL = () => setOpenL(false);

    const color = blue[500];

  return (
    <div className="myhomediv">
        <img className="bookies-logo" src="/src/assets/images/Bookieslogo.png" alt="" />
        <div className="signupbuttons">
            <Stack direction="row" spacing={2}>
                <Button onClick={handleOpen} variant="contained">Sign Up
                </Button>
                <SignUp open={open} handleOpen={handleOpen} handleClose={handleClose}/>
                <Button onClick={handleOpenL} variant="contained" color="success">
                    Login
                </Button>
                <Login openL={openL} handleOpenL={handleOpenL} handleCloseL={handleCloseL}/>
            </Stack>
        </div>
    </div>
  )
}
export default Home