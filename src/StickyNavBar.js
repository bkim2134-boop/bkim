import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton } from '@mui/material'
import { Bungalow, Boy } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

//have to decide to either use hamburger or more dots vertical for menu button
export class StickyNavBar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={() => {
              alert('Navigate to the home content');
            }}>
              <Bungalow />
            </IconButton >
            <IconButton onClick={() => {
              alert('Navigate to About Me');
            }}>
              <Boy />
            </IconButton>
            <IconButton onClick={() => {
              alert('Navigate to Contact Me');
            }}>
              <AlternateEmailIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

      </div>
    )
  }
}

export default StickyNavBar