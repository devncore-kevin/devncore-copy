import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const menus = [
    { index: 0, name: "Home", id: "" },
    { index: 1, name: "Apps", id: "opensource" },
    { index: 2, name: "Article", id: "article" }
];

let _value = 0;

export default function TabMenu(props) {
    const [value, setValue] = React.useState(_value);

    React.useEffect(() => { 
        try {
            _value = menus.filter(x => x.id === props.menu)[0].index;
            setValue(_value); 
        }
        catch (ex)
        {
            console.log("what menu: ", props.menu);
            console.log("tabEx", ex);
        }
    }, [props.menu]);

    const menuClick = (menu) => {
        props.menuChanged(menu);
    }
    
    return (
        <Stack
            spacing={1} 
            direction="row"
            value={value}>
            {menus.map(menu => {
                return (
                    <Button 
                        sx={{ color: '#333333' }}
                        variant="text"
                        key={menu.index}
                        children={menu.name} 
                        style={{ fontSize: 14}} 
                        onClick={() => menuClick(menu.id)}/>
                );
            })}
        </Stack>
    );
}