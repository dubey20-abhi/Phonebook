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

const store = createStore(allReducer);

function App() {
  const[value, setValue] = useState(0);

  const styles = {
    navigationButton : {
      fontSize : "2rem",
      // marginTop:"1.25rem"
    },
    addButton : {
      fontSize : "3rem",
      position : "absolute",
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
      top: "0px",
      padding: "0px",
      margineRight: "20px",
      borderTopLeftRadius : "20px",
      borderTopRightRadius : "20px",
      zIndex: "10",
    },
  };

  return (
    <Provider store={store}>
      <div className="App">
        <div className='phone_book'>
          <Box sx={styles.box}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              style={{borderTopLeftRadius : "20px",borderTopRightRadius : "20px", backgroundColor: "rgb(228, 232, 248)"}} 
            >
              <BottomNavigationAction label="Recents" icon={<AccessTimeFilledIcon style={styles.navigationButton}  />} />
              <BottomNavigationAction label="Favorites" icon={<StarOutlineIcon style={styles.navigationButton} />} />
              <BottomNavigationAction label="Contacts" icon={<SupervisorAccountIcon style={styles.navigationButton} />} />
            </BottomNavigation>
          </Box>
          <div className='navigationToggle'>
            {value == 0 && <Recent/>}
            {value == 1 && <Favorites/>}
            {value == 2 && <Contacts/>}
          </div>
          {/* {value == 0 && <Recent style={{padding:"20px"}} />}
          {value == 1 && <Favorites style={{padding:"20px"}}/>}
          {value == 2 && <Contacts style={{padding:"20px"}}/>} */}
          <AddContact/>
        </div>  
      </div>
    </Provider>
  );
}

export default App;
