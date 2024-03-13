import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Signup.css'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IProps {
    open: boolean,
    handleOpen: () => boolean;
    handleClose: () => boolean;
}

function SignUp({open, handleOpen, handleClose}:IProps) {
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="signupform">
            <h2>Sign Up</h2>
            <TextField
            id="outlined-helperText"
            label="Username"
            defaultValue=""
                />
            <br></br>
            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            />
            <Button onClick={handleClose} variant="contained">Sign Up</Button>
        </Box>
      </Modal>
  );
}

export default SignUp