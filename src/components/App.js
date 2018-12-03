import React from 'react'
import VisibleHistoryList from '../containers/VisibleHistoryList'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const App = () => (
  <div>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Recent Github Issues
          </Typography>
      </Toolbar>
    </AppBar>
    <VisibleHistoryList />
  </div>
)
export default App;
