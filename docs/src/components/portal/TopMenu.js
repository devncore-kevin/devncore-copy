import React from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import LogoButton from "./LogoButton";
import { styled } from '@mui/material/styles';
import TabMenu from "./TabMenu";


const menuBox = {
    marginLeft: '0px',
    bgcolor: 'transparent'
}

const TopToolbar = styled(Toolbar)({
    marginTop: 0,
    padding: '0px',
});

const TopBox = styled(Box)({
    borderBottom: '1px solid #cccccc',
    backgroundColor: '#fafafa',
});

export default function TopMenu(props) {
    const { isOpen } = props;

    function isOpenChanged() {
        props.isOpenChanged(!isOpen);
    }


    return (
        <TopBox sx={{ width: '100%' }}>
            <TopToolbar variant={'dense'} style={{ paddingLeft: '16px'}}>
                <Box sx={{ display: 'flex', marginLeft: '0px', marginRight: '14px' }}>
                    <LogoButton isOpen={props.isOpen} isOpenChanged={isOpenChanged}/>
                </Box>
                <Box sx={menuBox}>
                    <TabMenu 
                        menu={props.menu} 
                        menuChanged={(menu) => props.menuChanged(menu)}/>
                </Box>
                <Box sx={{ flexGrow: 1 }} />             
            </TopToolbar>
        </TopBox>
    );
}