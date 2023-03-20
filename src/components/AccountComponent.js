import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Project from './Projects'
import Proposal from './Proposals'
import Navbar from './Navbar'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { DataGrid } from '@mui/x-data-grid';


import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import Customers from './Customers'
import Settings from './Settings'
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';




const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function AccountComponent() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'fergal', firstName: 'oconnor', age: null },
        { id: 2, lastName: 'emily', firstName: 'emily', age: null },
        { id: 3, lastName: 'dylan', firstName: 'dylan', age: null },
        { id: 4, lastName: 'ciran', firstName: 'ciaran', age: null },
        { id: 5, lastName: 'ovi', firstName: 'ovi', age: null },

    ];

    return ( <
        Box sx = { { display: 'flex' } } >
        <CssBaseline /> <
        AppBar position = "fixed"
        open = { open } >
        <Toolbar sx={{ bgcolor: '#8c94bc', justifyContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{padding:'20px', bgcolor: '#a10165', justifyContent: 'space-between'}}>
           <AccountCircleIcon/> Account
          </Typography>
        </Toolbar> <
        /AppBar> <
        Drawer sx = {
            {
                width: drawerWidth,


                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }
        }
        variant = "persistent"
        anchor = "left"
        open = { open } >
        <DrawerHeader    sx={{    bgcolor: '#4b5b8b'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader> <
        Divider / >
        <List sx={{   color: '#4b5b8b'}}>
        
            <ListItem  disablePadding>
              <ListItemButton>
              <Project/>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
              <Proposal/>
              </ListItemButton>
            </ListItem>
                <ListItem  disablePadding>
              <ListItemButton>
              <CreateNewFolderIcon/>
              <p>More features...</p>
              </ListItemButton>
            </ListItem>
         
        </List> <
        Divider / >
        <List sx={{    color: '#68769c'}}>
          <ListItem  disablePadding>
              <ListItemButton>
              <Customers/>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
              <Settings/>
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton>
              <CreateNewFolderIcon/>
              <p>More features...</p>
              </ListItemButton>
            </ListItem>

         
        </List> <
        /Drawer> <
        Main open = { open } >
        <DrawerHeader />

        <
        Typography paragraph >
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Invoices" value="1" />
            <Tab label="Proposals" value="2" />
            <Tab label="Drafts" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Invoices list...
        <
        Box sx = { { height: 400, width: '100%' } } >
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      /> <
        /Box>
        .</TabPanel>
        <TabPanel value="2">Proposals ...list</TabPanel>
        <TabPanel value="3">Drafts...list</TabPanel>
      </TabContext>
    </Box> <
        /Typography>  

        <
        /
        Main > <
        /Box>
    );
}