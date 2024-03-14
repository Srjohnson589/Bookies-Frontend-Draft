import './Home.css'
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignUp from '/src/components/Signup/Signup.tsx'
import Login from '/src/components/Login/Login.tsx'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';

const Home = () => {
    const auth = getAuth();

    const color = blue[500];

    // Open Modals
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openL, setOpenL] = useState(false);
    const handleOpenL = () => setOpenL(true);
    const handleCloseL = () => setOpenL(false);
    
    const logout = () => {

    }


  return (
    <> 
    
    <div className="myhomediv">
        <img className="bookies-logo" src="/src/assets/images/Bookieslogo.png" alt="" />
        <div className="signupbuttons">
            <Stack direction="row" spacing={2}>
                <Button onClick={handleOpen} variant="contained">Sign Up
                </Button>
                <SignUp open={open} handleClose={handleClose}/>
                <Button onClick={handleOpenL} variant="contained" color="success">
                    Login
                </Button>
                <Login openL={openL} handleOpenL={handleOpenL} handleCloseL={handleCloseL}/>
            </Stack>
        </div>
    </div>
    <Button onClick={handleOpen} variant="contained">Log Out
    </Button>
    </>
  )
}
export default Home