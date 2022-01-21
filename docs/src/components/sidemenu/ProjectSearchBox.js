import React from "react";
import { styled, TextField } from '@mui/material';

const SearchField = styled(TextField)({
    margin: '0px 0px 0px 0px',
    backgroundColor: "#ffffff",
    inputProps: { 
    },
    '& .MuiInputBase-root': {
        padding: '0px',
        '& .MuiInputBase-input': {
            padding: '8px 15px 8px 15px',
            fontSize: '12px'
        }
    },
    '& .MuiInputBase-input-MuiOutlinedInput-input': {
        display: 'none'
    }
});

export default function ProjectSearchBox(props)
{
    return (
        <div style={{
            padding: "5px", 
            backgroundColor: "#fafafa",
            borderTop: "1px solid rgb(191, 121, 113, 0.2)",
            borderBottom: "1px solid rgb(191, 121, 113, 0.2)"}}>
            <SearchField
                fullWidth
                placeholder="Search Projects..."/>
        </div>
    )
}