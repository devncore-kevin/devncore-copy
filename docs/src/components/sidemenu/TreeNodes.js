import React from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import {Collapse} from '@mui/material';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import TreePlusIcon from "./TreePlusIcon";
import TreeMinusIcon from "./TreeMinusIcon";
import TreeDefaultIcon from "./TreeDefaultIcon";
import * as svc from "../../components/protocol/ServiceHelper";
import Axios from "axios";
import { alpha, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

function TransitionComponent(props) {
    const style = useSpring({
      from: {
        opacity: 0,
        transform: 'translate3d(20px,0,0)',
      },
      to: {
        opacity: props.in ? 1 : 0,
        transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
      },
    });
  
    return (
      <animated.div style={style}>
        <Collapse {...props} />
      </animated.div>
    );
  }

  TransitionComponent.propTypes = {
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,
  };

  const StyledTreeItem = styled((props) => (
    <TreeItem {...props} TransitionComponent={TransitionComponent} />))(({ theme }) => ({
        [`& .${treeItemClasses.iconContainer}`]: {
            '& .close': {
                opacity: 0.3,
            },
        },
        [`& .${treeItemClasses.group}`]: {
            marginLeft: 15,
            paddingLeft: 0,
            borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.2)}`,
        }, 
        [`& .${treeItemClasses.content}`]: {
            '& .MuiTreeItem-label': {
                paddingTop: '4px',
                paddingBottom: '4px',
                paddingLeft: '0px',
                fontSize: '12px',
                marginLeft: 0,
                fontFamily: [
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
            },
        },
}));

let _menuName = "";

export default function TreeNodes(props) {
    const navigate = useNavigate();
    const [menus, setMenus] = React.useState(null);
    
  const getArticles = () => {
      Axios.get(svc.find("/api/articlecategories"), svc.options())
          .then(response => {
              setMenus(response.data);
          })
          .catch(function (error) {
              console.log("get article error:", error);
          });
    }
    
    React.useEffect(() => {
        if (props.menu.includes("article")) {
            _menuName = "article";
            getArticles();
        }
    }, [props.menu]);
    
    function menuClick(e, menu) {
        navigate(`/${_menuName}/${menu.id}`);
    }

    const initChildrenItemsTemplate = (child) => {
        return (
            <StyledTreeItem
                key={child.id}
                nodeId={`child_${child.id.toString()}`}
                onClick={(e) => menuClick(e, child)}
                label={child.title}>
            </StyledTreeItem>
          );
    }

    const initCategoryItemsTemplate = (cate) => {
        return (
            <StyledTreeItem 
                key={cate.cateId}
                nodeId={cate.cateId.toString()}
                label={cate.cateName + " (" + cate.childCount + ")"}>
                {
                    cate.children.map(child => {
                        return (
                            initChildrenItemsTemplate(child)
                        );
                    })
                }
            </StyledTreeItem>
          );
      } 

      return (
          <TreeView
              defaultExpanded={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "21", "22"]}
              defaultCollapseIcon={<TreeMinusIcon/>}
              defaultExpandIcon={<TreePlusIcon/>}
              defaultEndIcon={<TreeDefaultIcon/>}
              sx={{ 
                  height: "100%", 
                  flexGrow: 1, 
                  margin: '0px', 
                  overflowY: 'auto', 
                  overflowX: "hidden" }}>
                
              {menus !== null ?
                  menus.map(menu => {
                    return (
                        initCategoryItemsTemplate(menu)
                    );
                })
              : null
              }
          </TreeView>
      );
}
  