import React from "react";
import '../design/portal.css';
import { Box } from "@mui/material"
import TopMenu from "../components/portal/TopMenu"
import { useNavigate, Route, Switch } from "react-router-dom";

export default function Portal(props) {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = React.useState(false);
    const [menu, setMenu] = React.useState("");

    const isOpenChanged = (changedValue) => {
        setIsOpen(changedValue);
    }

    const menuChanged = (_menu, search) => {
        search = search === undefined ? "" : search;
        navigate(`/${_menu}${search}`);
        setMenu(_menu);
        console.log("menu change:", _menu);
    }

    return (
        <>
            <Box className="root">
                <TopMenu
                    isOpen={isOpen} 
                    menuChanged={(menu) => menuChanged(menu)}
                    isOpenChanged={isOpenChanged}
                    menu={menu}/>
            </Box>
        </>
    );
}