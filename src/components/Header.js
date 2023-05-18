 import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack,TextField,InputAdornment } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";
import {Search} from "@mui/icons-material"



const Header = ({ children, hasHiddenAuthButtons ,debounceSearch}) => {
  const history = useHistory();



  const handleLogout = () => {
    history.push("/");
    localStorage.clear();
    window.location.reload();
  };
    return (
      <Box className="header">
        <Box className="header-title">
          <Button onClick={()=>{history.push("/")}}><img src="logo_light.svg" alt="QKart-icon"></img></Button>
        </Box>
        {  children ? (<Box >
          <TextField 
          className="search-desktop" 
          placeholder="Search for items/categories" 
          size="small"
          name="search"
          onChange={(event)=>{debounceSearch(event,500)}}

          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search color="primary" />
              </InputAdornment>
            ),
          }}
          />
        </Box>): null }
        {hasHiddenAuthButtons ?
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => {
            // if (location.pathname === "/") return;
            history.push("/");
          }}
        >
          Back to explore
        </Button> : 
        localStorage.username === undefined ? (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Button variant="contained" onClick={()=>history.push("/login")}>
              
              Login
            </Button>
            <Button variant="contained" onClick={()=>history.push("/register")}>
              
              Register
            </Button>
          </Stack>
        ) : (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Avatar src="avatar.png" alt={`${localStorage.username}`} />
            <Box>{localStorage.username}</Box>
            <Button onClick={handleLogout}>Logout</Button>
          </Stack>
        )}
        
      </Box>
    );
  }


export default Header;
