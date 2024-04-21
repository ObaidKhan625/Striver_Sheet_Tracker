import * as React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/icons-material/Link';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { const_Navbar, headers } from '../../constant/constant';
const drawerWidth = 240;
const navItems = [
  { text: 'About Us'},
  { text: 'Feedback'},
  { text: 'Contribute'}
];

function Navbhar(props) {
  const navigate=useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const history = useHistory(); // Get history object from react-router-dom

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };



  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>  
      <a href="/about" target="_blank" rel="noopener noreferrer">
          <ListItem key="About Us" disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>
          </a>
          <a href="/feedback" target="_blank" rel="noopener noreferrer">
          <ListItem key="Feedback" disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Feedback" />
            </ListItemButton>
          </ListItem>
          </a>
          <a href="https://github.com/ObaidKhan625/Striver_Sheet_Tracker" target="_blank" rel="noopener noreferrer">
          <ListItem key="Contribute" disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary="Contribute"/>
            </ListItemButton>
          </ListItem>
         </a>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            DSAndeavour
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          
            
          <a href="/about" target="_blank" rel="noopener noreferrer">
  <Button key="About Us" sx={{ color: '#fff' }}>
    About Us
  </Button>
</a>
<a href={headers.FEEDBACK_LINK} target="_blank" rel="noopener noreferrer">
  <Button key="Feedback" sx={{ color: '#fff' }}>
    Feedback
  </Button>
</a>
<a href="https://github.com/ObaidKhan625/Striver_Sheet_Tracker" target="_blank" rel="noopener noreferrer">
  <Button key="Contribute" sx={{ color: '#fff' }}>
    Contribute
  </Button>
</a>

          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}



export default Navbhar;
