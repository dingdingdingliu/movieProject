import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useCallback, useEffect } from "react";
import { styled } from '@mui/material/styles';

const MovieSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette.primary.dark,
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 10,
    width: 10,
    backgroundColor: theme.palette.primary.colorPink,
    border: '1px solid currentColor',
    '& sliderBar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

type InputEvent = React.ChangeEvent<HTMLInputElement>

interface Props {
  value: number;
	setValue: React.Dispatch<React.SetStateAction<number>>
}

export default function ColorSlider ({value, setValue} : Props) {
	
	const handleOnChange = useCallback((event: InputEvent | any) : void => {
		setValue(Number(event.target.value))
	}, [])
	
	return (
		<Box width={300} m={4}>
			<MovieSlider  aria-label="Temperature" size="medium" step={1} min={0} max={10} value={value} onChange={handleOnChange}  valueLabelDisplay="auto"/>
		</Box>
	)
}