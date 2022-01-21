import React from "react";
import {Box, IconButton, Stack, styled} from "@mui/material";
import PermDeviceInformationIcon from '@mui/icons-material/Info';
import ListIcon from '@mui/icons-material/ListAlt';
import NewReleasesIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProjectSearchBox from './ProjectSearchBox';

const NavBorder = styled(Box)(() => ({
    borderRadius: "4px",
    border: "1px solid #cccccc",
  }));

export default function NavMenu(props) {
    return (
        <NavBorder sx={{
            margin: { xs: "10px", lg: "10px" }
        }}>
            <Stack 
                direction="row"
                height={30}
                padding={1}
                style={{backgroundColor:"#fafafa"}}>
                <IconButton
                    style={{ backgroundColor: 'transparent', color: "#2e85de"}}>
                    <PermDeviceInformationIcon fontSize="small"/>
                </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                <IconButton 
                    style={{ backgroundColor: 'transparent', color: "#2e85de"}}>
                    <DashboardIcon fontSize="small"/>
                </IconButton>
                <IconButton
                    style={{ backgroundColor: 'transparent', color: "#2e85de"}}>
                    <ListIcon fontSize="small"/>
                </IconButton>
                <IconButton
                    style={{ backgroundColor: 'transparent', color: "#2e85de"}}>
                    <NewReleasesIcon fontSize="small"/>
                </IconButton>
            </Stack>
            <ProjectSearchBox/>
            <Box 
                style={{
                    padding: '0px 0px 0px 0px'}}>
                    {/* <TreeNodes
                        menu={props.menu}/> */}
            </Box>
      </NavBorder>
    );
}