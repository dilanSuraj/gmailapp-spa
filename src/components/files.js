import { Grid } from '@material-ui/core';
import Axios from 'axios';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from 'mdbreact';
import React, { Component } from 'react';
import common from '../utils/common';
import notificationAlertUtil from '../utils/notificationManager';
import imagefile from '../assets/images/imagefile.png';
import fileImg from '../assets/images/fileImg.png';
import CustomAppBar from '../shared/appbar';
import filesBgImg from '../assets/images/bg.jpg';
export default class Files extends Component {

    constructor(props) {
        super(props);

        this.state = {
            files: []
        }

    }

    loadFiles = async () => {
        await Axios.get(`${common.BACKEND_API}${common.FILE_ENDPOINT}/`,
            {
                headers: common.API_HEADER_INFO
            }).then(res => {
                this.setState({
                    files: res.data
                })
            }).catch(error => {
                notificationAlertUtil.customErrorAlert("Please login again, Session timedout")
            });
    }

    async componentDidMount() {
        await this.loadFiles();
    }



    render() {
        return (
            <React.Fragment >
                <CustomAppBar />
                <div style={{
                    backgroundImage: `url(${filesBgImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <MDBContainer>
                        <MDBRow center>
                            {
                                this.state.files && this.state.files.map((file, index) => {
                                    return (<Grid item key={index} xs={4}>
                                        <MDBCard border={"1px"}>
                                            {
                                                file.mimeType == "image/png" ?
                                                    <MDBCardImage className="img-fluid" src={imagefile} A />
                                                    :
                                                    <MDBCardImage className="img-fluid" src={fileImg} />

                                            }
                                            <MDBCardBody>
                                                <MDBCardFooter>{file.name}</MDBCardFooter>
                                            </MDBCardBody>
                                        </MDBCard>
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