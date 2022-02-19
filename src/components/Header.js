import AccountCircle from '@mui/icons-material/AccountCircle'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import DashboardIcon from '@mui/icons-material/Dashboard'
import GroupIcon from '@mui/icons-material/Group'
import MenuIcon from '@mui/icons-material/Menu'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import PersonIcon from '@mui/icons-material/Person'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { graphql, useFragment } from 'react-relay'
import { useHistory } from 'react-router-dom'

function Header (props) {
  const history = useHistory()

  const data = useFragment(
    graphql`
      fragment HeaderQuery on Query {
        user {
          name
        }
      }
    `,
    props.queryRef,
  )

  const user = { data }

  const [isOpen, setIsOpen] = useState(false)

  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null)

  const handleAccountMenu = (event) => {
    setAccountAnchorEl(event.currentTarget)
  }

  const handleAccountClose = () => {
    setAccountAnchorEl(null)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setIsOpen(true)}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setIsOpen(false)}
            onKeyDown={() => setIsOpen(false)}
          >
            <List>
              <ListItem button onClick={() => history.push('/namespaces')}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Namespaces" />
              </ListItem>
              <ListItem button onClick={() => history.push('/modules')}>
                <ListItemIcon>
                  <ArchitectureIcon />
                </ListItemIcon>
                <ListItemText primary="Modules" />
              </ListItem>
              <ListItem button onClick={() => history.push('/installations')}>
                <ListItemIcon>
                  <NoteAddIcon />
                </ListItemIcon>
                <ListItemText primary="Installations" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button onClick={() => history.push('/users')}>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
              <ListItem button onClick={() => history.push('/groups')}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Groups" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          onClick={() => history.push('/')}
          style={{cursor: 'pointer'}}
        >
          SelfServe
        </Typography>
        {user && (
          <>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleAccountMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={accountAnchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(accountAnchorEl)}
              onClose={handleAccountClose}
            >
              <MenuItem
                onClick={() => {
                  history.push('/profile')
                  handleAccountClose()
                }}
              >Profile</MenuItem>
              <MenuItem
                onClick={handleAccountClose}
              >Logout</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  queryRef: PropTypes.object.isRequired,
}

export default Header
