import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

import logo from '../assets/react.svg';  // Path to your logo

const Navbar: React.FC = () => {
    const pages = ["Impressum"];
    const links = ["/impressum"];
    const settings = ["Profil","Ausloggen"];
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (link: string) => {
        navigate(link);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" sx={{ height: '80px', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', px: 4 }}>
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

                    {/* Logo on the left side */}
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 4 }}>
                        <img src={logo} alt="Logo" style={{ height: '50px', width: '50px', marginRight: '15px' }} />
                    </Box>

                    {/* Navigation links in the center */}
                    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                        {pages.map((page, index) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(links[index])}
                                sx={{ mx: 2, color: '#000', fontWeight: 'bold', textTransform: 'none', fontSize: '18px',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#504278',
                                    },
                                    textDecoration: 'none',
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* User avatar and settings menu on the right */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
                        <Box sx={{ flexGrow: 0, ml: 2 }}>
                            <Tooltip title="Settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
};

export default Navbar;
