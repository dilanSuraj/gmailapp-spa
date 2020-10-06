import { Avatar, Card, Container, Grid } from '@material-ui/core';
import Axios from 'axios';
import { MDBContainer, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import mailsBgImg from '../assets/images/bg.jpg';
import CustomAppBar from '../shared/appbar';
import common from '../utils/common';
import notificationAlertUtil from '../utils/notificationManager';
export default class Mails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mails: []
        }

    }
    loadMails = async () => {
        await Axios.get(`${common.BACKEND_API}${common.MAIL_ENDPOINT}/`,
            {
                headers: common.API_HEADER_INFO
            }).then(res => {
                this.setState({
                    mails: res.data
                })
                console.log(res.data)
            }).catch(error => {
                notificationAlertUtil.customErrorAlert("Please login again, Session timedout")
            });
    }

    async componentDidMount() {
        await this.loadMails();
    }

    render() {
        return (
            <React.Fragment>
               <CustomAppBar />
               <div style={{
                    backgroundImage: `url(${mailsBgImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: "100vh"
                }}>
                <MDBContainer>
                    <MDBRow center>
                        {
                            this.state.mails && this.state.mails.map((mail, index) => {
                                return (<Grid item key={index} xs={4}>

                                    {
                                        <div class="ui raised link card">
                                            <div class="content" style={{
                                                    backgroundColor: "grey"
                                                }}>
                                                <div class="meta" style={{
                                                    color: "white"
                                                }}>
                                                    <span class="category" style={{
                                                        fontFamily: "emoji"
                                                    }}>{mail.snippet}</span>
                                                </div>
                                                <div class="description">
                                                    <p></p>
                                                </div>
                                            </div>
                                            <div class="extra content" >
                                                <div class="right floated author" >
                                                    <div class="ui horizontal list">
                                                        {
                                                            mail.labelIds && mail.labelIds.map((val, key) => {
                                                                return (
                                                                   
                                                                    <div class="item" style={{
                                                                        backgroundColor: "ButtonFace"
                                                                    }}>
                                                                        <div class="content">
                                                                          
                                                                            <div class="ui sub header" style={{
                                                                                fontFamily: "cursive"
                                                                            }}>
                                                                                {val}
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    

                                                                )

                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }




                                </Grid>)
                            })
                        }
                    </MDBRow>
                </MDBContainer >
                </div>
            </React.Fragment>

        );
    }
}
