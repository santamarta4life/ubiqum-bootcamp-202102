import React, { useState, useEffect, Component } from 'react';
import { NavLink } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Home from './images/homeIcon.png'
import { connect } from 'react-redux';
import { retrieveActivities } from '../store/actions/activitiesActions'
import { withStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addToFavorites } from '../store/actions/itinerariesActions'
import FavoriteIcon from '@material-ui/icons/Favorite';
import isUserLoggedIn from '../logic/is-user-logged-in';



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
    itineraries: {
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



const mapStateToProps = (state) => ({
    itineraries: state.itineraries.itineraries,
    error: state.itineraries.error
})

const mapDispatchToProps = (dispatch) => {
    return {
        retrieveActivities: itinerary => dispatch(retrieveActivities(itinerary)),
        addToFavorites: itinerary => dispatch(addToFavorites(itinerary))
    }
}

class Itineraries extends Component {
    constructor() {
        super()
        this.state = {
            clicked: false,
        }
    }

    componentDidMount(){
        if (isUserLoggedIn){
            
        }
    }

    handleClickFavorites = (event) => {

        const itinerary = event.currentTarget.value

        addToFavorites(itinerary)

        this.setState(({ clicked }) => ({ clicked: !clicked }));
    }

    handleClickActivities = (event) => {

        const itinerary = event.target.value

        retrieveActivities(itinerary)
    }

    render() {

        const { state: { clicked, setClicked } } = this

        const { classes } = this.props

        const itinerariesRender = this.props.itineraries.map((itinerary, index) => <TableRow key={index}><TableCell key={index} align="center" className={classes.tablecell}><div><h2>{itinerary.title}</h2></div><div>Duration:{itinerary.duration}</div><div>Rating:{itinerary.rating}</div></TableCell><TableCell align="center" className={classes.tablecell} ><img style={{ width: 200, height: 100 }} alt="city itineraries" src={itinerary.profilePicture} /></TableCell><TableCell align="center" className={classes.tablecell}><NavLink to='/Activities' ><button onClick={this.handleClickActivities} value={itinerary.title}>Activities </button></NavLink> {isUserLoggedIn() && <IconButton key={index} onClick={this.handleClickFavorites} value={itinerary._id}>{clicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}</IconButton>}</TableCell></TableRow>)

        return <Box display="flex" className={classes.itineraries}>
            <Box bgcolor="success.main" borderRadius={40} className={classes.bigbox}>
                <Box className={classes.box} bgcolor="error.main" borderRadius={40}>
                    <div>
                        <h1 className={classes.applogo}>Itineraries in </h1>
                    </div>
                    <div>
                        <TableContainer>
                            <Table size="small">
                                <TableBody>
                                    {itinerariesRender}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Box>
                <footer className={classes.footer}>
                    <NavLink to='/' ><Button><img className={classes.logo} src={Home} alt="return home" /> </Button></NavLink>
                </footer>
            </Box>
        </Box >
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Itineraries))