import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import auth from '../utils/auth';
import Swal from 'sweetalert2';

export default class CustomAppBar extends Component{
  signOut = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you need to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm'
    }).then((result) => {
      console.log(result)
      if (result.value) {
        auth.logout(() => {
          this.props.history.push('/signin');
        });
      }
    })
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{
              marginRight:"82vw"
            }}>
              My Dashboard
            </Typography>
            <Button color="inherit" onClick={(e) => { this.signOut(e) }} style={{
              textAlign:"right"
            }}>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}