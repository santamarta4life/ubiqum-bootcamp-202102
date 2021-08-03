import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Home from './images/homeIcon.png';

const useStyles = theme => ({
    applogo: {
        fontFamily: '"Helvetica Neue"',
        fontDisplay: 'swap',
        margin: 'auto',
        color: 'white',
        fontWeight: 10000,
        fontSize: 50,
        padding: 20

    },
    logo: {
        width: 80
    },
    createaccount: {
        minWidth: 800
    },
    bigbox: {
        width: 800,
        margin: 'auto'
    },
    box: {
        width: 650,
        margin: 'auto'
    },
    footer: {
        margin: 'auto'
    },
    tablecell: {
        borderBottom: 'none'
    }

});


class CreateAccount extends Component {
    constructor() {
        super()
        this.state = {
            username: [],
            email: [],
            password: [],
            image: []
        }


    }

    handleSubmit(event) {


    }

    render() {

        const { classes } = this.props

        return <Box display="flex" className={classes.createaccount}>
            <Box bgcolor="success.main" borderRadius={40} className={classes.bigbox}>
                <Box className={classes.box} bgcolor="error.main" borderRadius={40}>
                    <h1 className={classes.applogo}>Log In</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <div>
                                <p>Username:</p>
                                <input type="text" name="username"></input>
                            </div>
                        </label>
                        <label>
                            <div>
                                <p>E-mail:</p>
                                <input type="text" name="email"></input>
                            </div>
                        </label>
                        <label>
                            <div>
                                <p>Password:</p>
                                <input type="password" name="password"></input>
                            </div>
                        </label>
                        <label>
                            <div>
                                <p>Foto:</p>
                                <input type="text" name="foto"></input>
                            </div>
                        </label>
                        <label>
                            <div>
                                <input type="submit" value="Sign in" />
                            </div>
                        </label>
                    </form>
                </Box>
                <footer className={classes.footer}>
                    <NavLink to='/' ><Button><img className={classes.logo} src={Home} alt="return home" /> </Button></NavLink>
                </footer>
            </Box>
        </Box>
    }
}

export default withStyles(useStyles)(CreateAccount)