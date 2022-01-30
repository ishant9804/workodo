import AccountCircle from '@mui/icons-material/AccountCircle';
import { OutlinedInput } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
// import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Component, React } from 'react';

class CustomInput extends Component {
    render () {
        return (
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">{this.props.labelled}</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        startAdornment={<InputAdornment position="start">
                            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                        </InputAdornment>}
                        label={this.props.labelled}
                    />
                </FormControl>
            </Box>
        )
    }
}

export default CustomInput;