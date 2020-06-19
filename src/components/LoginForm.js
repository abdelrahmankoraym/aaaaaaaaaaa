import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, LoginUser} from '../Actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password } = this.props;

        this.props.LoginUser({ email, password});
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={{errorTextStyle}}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="اسم المستخدم"
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email}

                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        placeholder="كلمة السر"
                        label="كلمة السر"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        تسجيل الدخول
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    };
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, LoginUser} )(LoginForm);



























//old without redux
/*
import React,{Component} from 'react';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component{
    state = { email: '', password: '', error: '', loading: false };

    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        placeholder="user@gmail.com"
                        label="اسم المستخدم"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                    
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="كلمة السر"
                        label="كلمة السر"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                
                <CardSection>
                    <Button>
                        تسجيل الدخول
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
*/