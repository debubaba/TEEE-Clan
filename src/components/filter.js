import React from 'react'
import {
  Box,
  Typography,
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
   FormGroup,
   Checkbox,
   FormHelperText
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: "#ffffff",
    borderRadius: "3%",
    height: "90%",
    width: "90%",
    overflowY: "scroll",
    '&::-webkit-scrollbar': {
      display: "none!important"
    },
    overflow: "-moz-scrollbar-none",
    '-ms-overflow-style': "none"
  },
  stuff: {
    width: "80%",
    margin: "1rem 0 0 10%"
  }
});

const marks = [
  {
    value: 0,
    label: '₹0',
  },
  {
    value: 1000,
    label: '₹1000',
  },
];

function valuetext(value) {
  return `₹${value}`;
}

export default function Filters(){

  const [value, setValue] = React.useState('S');

  const [state, setState] = React.useState({
    red: true,
    blue: false,
    green: false,
  });

  const { red, blue, green } = state;
 const error = [red, blue, green].filter((v) => v).length !== 2;

  const handleChanges = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  return(
    <Box className={classes.root}>
      <Typography variant="h4" align="center" style={{color: "black", padding: "2rem 0 0 0"}}>
        Filter Items
      </Typography>
      <Box className={classes.stuff}>
        <Typography variant="h6" style={{color: "black", padding: "0 0 2rem 0"}}>
          Price range
        </Typography>
        <Slider
          defaultValue={80}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-always"
          step={1}
          marks={marks}
          min={0}
          max={1000}
          valueLabelDisplay="on"
        />
      </Box>
      <Divider />
      <Box className={classes.stuff} style={{color: "black"}}>
        <Typography variant="h6">
          Size
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup aria-label="size" name="size1" value={value} onChange={handleChange}>
            <FormControlLabel value="S" control={<Radio />} label="S" />
            <FormControlLabel value="M" control={<Radio />} label="M" />
            <FormControlLabel value="L" control={<Radio />} label="L" />
            <FormControlLabel value="XL" control={<Radio />} label="XL" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Divider />
      <Box className={classes.stuff} style={{color: "black"}}>
        <Typography variant="h6">
          Color
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={red} onChange={handleChanges} name="red" />}
            label="red"
          />
          <FormControlLabel
            control={<Checkbox checked={blue} onChange={handleChanges} name="blue" />}
            label="blue"
          />
          <FormControlLabel
            control={<Checkbox checked={green} onChange={handleChanges} name="green" />}
            label="green"
          />

        </FormGroup>

      </FormControl>

      </Box>
    </Box>
  )
}
