import React from "react";
import '../design/portal.css';
import { Box, Grid } from "@mui/material"
import TopMenu from "../components/portal/TopMenu"
import { useNavigate, Route, Switch } from "react-router-dom";
import NavMenu from "../components/sidemenu/NavMenu";

export default function Portal(props) {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = React.useState(false);
    const [menu, setMenu] = React.useState("");
    const [userInfo, setUserInfo] = React.useState(props.userInfo);

    React.useEffect(() => {
        setUserInfo(props.userInfo);
        console.log("sadsadsadasdasdas",props.userInfo);
    }, [props.userInfo]);

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
                    <Box>
                    <Grid container justifyContent="center" sx={{ overflowY: "auto", height: "calc(100vh - 48px)" }} >
                        <Grid item sx={{ width: { xs: "100%", sm: "auto", md: "auto", lg: "auto" } }}>
                            <NavMenu 
                                menu={menu}/>
                        </Grid>
                        <Grid item xs style={{ minWidth: "300px", width: "auto", maxWidth: "900px"}}>
                            {/* <Switch>
                                <Route exact path="/article" render={props => <ArticleDashboard {...props} showProgress={showProgress}/>}/>
                                <Route exact path="/article/:page" render={props => <ArticleContent {...props} showProgress={showProgress}/>}/>
                            </Switch> */}
                        </Grid>
                    </Grid>
                    </Box>
            </Box>
       
        </>
    );
}