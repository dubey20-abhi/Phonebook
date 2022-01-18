import './App.css';
import { useState } from 'react';
import { Box } from '@mui/system';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Recent from './Component/Recent';
import Contacts from './Component/Contacts';
import Favorites from './Component/Favorites';
import AddContact from './Component/AddContact';
import { createStore } from 'redux';
import allReducer from './Reducer';
import { Provider } from 'react-redux';
import AppBar from './Component/AppBar';

const store = createStore(allReducer);
const styles = {
  navigationButton : {
    fontSize : "2rem",
    // marginTop:"1.25rem"
  },
  addButton : {
    fontSize : "3rem",
    position : "relative",
    bottom : 10,
    right: 10,
    backgroundColor : "rgb(1, 49, 98)",
    color : "white",
    borderRadius: "10px"

  },
  box : {
    backgroundColor : "rgb(184, 215, 237)",
    width : "100%",
    position: "absolute",
    top: "65px",
    padding: "0px",
    margineRight: "20px",
    borderTopLeftRadius : "20px",
    borderTopRightRadius : "20px",
    zIndex: "10",
  },
};

function App() {
  const[value, setValue] = useState(0);
  const[filteredList,setFilteredList] = useState([]);

  return (
    <Provider store={store}>
      <div className="App">
        <div className='phone_book'>
          <div style={{position:"sticky", top:"0px", zIndex:"20px"}}>
          <AppBar value={value} setFilteredList={setFilteredList}/>
          </div>
          <div>
          <Box sx={styles.box}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              style={{backgroundColor: "rgb(228, 232, 248)"}} 
            >
              <BottomNavigationAction label="Recents" icon={<AccessTimeFilledIcon style={styles.navigationButton}  />} />
              <BottomNavigationAction label="Favorites" icon={<StarOutlineIcon style={styles.navigationButton} />} />
              <BottomNavigationAction label="Contacts" icon={<SupervisorAccountIcon style={styles.navigationButton} />} />
            </BottomNavigation>
          </Box>
          </div>
          <div className='navigationToggle'>
            {value == 0 && <Recent/>}
            {value == 1 && <Favorites/>}
            {value == 2 && <Contacts filteredList={filteredList}/>}
          </div>
        </div>  
      </div>
    </Provider>
  );
}

export default App;
