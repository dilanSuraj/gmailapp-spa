import { Mail } from '@material-ui/icons';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React from 'react';
import CustomAppBar from './appbar';
import imagefile from '../assets/images/imgBg.jpg';
import fileBgImg from '../assets/images/fileBgImg.jpg';
import BgImg from '../assets/images/bg.jpg';
import { Grid } from '@material-ui/core';
export default function DefaultLayout() {

    return (
        <React.Fragment >
            <CustomAppBar />
            <div style={{
                backgroundImage: `url(${BgImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "100vh"
            }}>
                <MDBContainer style={{
                    paddingTop: "24vh"
                }}>
                    <MDBRow center>
                        <Grid item xs={4}>

                            <MDBCard style={{
                                margin: "29px"
                            }}>
                                <MDBCardImage className="img-fluid" src={fileBgImg} style={{
                                    height: "22rem"
                                }} />
                                <MDBCardBody>
                                    <MDBCardTitle>My Files</MDBCardTitle>
                                    <MDBBtn href="files">Navigate Files</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Grid>
                        <Grid item xs={4}>
                            <MDBCard style={{
                                margin: "29px"
                            }}>
                                <MDBCardImage className="img-fluid" src={imagefile}  style={{
                                    height: "22rem"
                                }} />
                                <MDBCardBody>
                                    <MDBCardTitle>My Mails</MDBCardTitle>
                                    <MDBBtn href="mails">Navigate Mails</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </Grid>
                    </MDBRow>
                </MDBContainer >
            </div>
        </React.Fragment>
    );
}