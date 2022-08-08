import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton} from '@mui/material'
import BungalowIcon from '@mui/icons-material/Bungalow';

export class StickyNavBar extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <AppBar position = "fixed">
            <Toolbar>
                <IconButton>
                    <BungalowIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
        
      </div>
    )
  }
}

export default StickyNavBar