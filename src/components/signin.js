import React from "react";
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from "semantic-ui-react";
import Axios from "axios";
import common from "../utils/common";
import notificationAlertUtil from '../utils/notificationManager'
class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: ''
        }
    }
    async componentDidMount() {
        await Axios.get(`${common.BACKEND_API}${common.URL_ENDPOINT}/`,
            {
                headers: common.DEFAULT_HEADER_INFO
            }).then(res => {
                console.log(res)
                this.setState({
                    url: res.data
                })
            }).catch(error => {
                notificationAlertUtil.customErrorAlert("Error occurred")
            });
    }
    render() {

        return (
            <div className="login-form loginbg">
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                <Grid
                    textAlign="center"
                    style={{
                        height: "100%"
                    }}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color="teal" textAlign="center">
                            Log-in to your account
            </Header>
                        <Form size="large">
                            <Segment stacked>

                                <Button
                                    color="teal"
                                    fluid
                                    size="large"
                                    href={this.state.url}
                                >
                                    Login to your google account
                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default LoginForm;
