
import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

export default function TreeMinusIcon(props) {
    return (
      <SvgIcon
        fontSize="inherit"
        style={{ width: 14, height: 14, color: '#34568B' }}
        {...props}
      >
        <path d="M20 5L20 19L4 19L4 5H20M20 3H4C2.89 3 2 3.89 2 5V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V5C22 3.89 21.11 3 20 3M18 15H6V17H18V15M10 7H6V13H10V7M12 9H18V7H12V9M18 11H12V13H18V11Z" />
      </SvgIcon>
    );
}