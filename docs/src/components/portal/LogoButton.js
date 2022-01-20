import * as React from 'react';
import MenuOpenIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import IconButton from '@mui/material/IconButton';

export default function LogoButton(props) {
    function click1() {
        props.isOpenChanged();
    }

    return (
        <IconButton variant="outlined" onClick={click1}> 
            { props.isOpen === true ? 
                <ChevronLeftIcon /> :
                <MenuOpenIcon/>
            }
        </IconButton>
    );
}