import { useCallback, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)`
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`


export default function Footer () {
	return (
    <StyledBox sx={{ color: 'primary.light' }}>挖影 © Code: Kristy, Janet, v61265 /  Design: K.T</StyledBox>
	)
}