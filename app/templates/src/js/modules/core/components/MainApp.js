import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import connect from 'react-redux/lib/connect/connect'

import { refreshWindowDimensions } from './../actions'

const styles =
{
    mainContainer :
    {
        display        : 'flex',
        alignItems     : 'center',
        justifyContent : 'center',
        flex           : '1 0 auto',
        flexDirection  : 'column'
    },
};


class MainApp extends PureComponent
{
    static contextTypes =
    {
        store : PropTypes.object.isRequired,
    };
    onResizeWindow = ()=>
    {
        this.props.onResizeWindow();
    };
    componentDidMount()
    {
        window.addEventListener('resize', this.onResizeWindow);
    }
    componentWillUnmount()
    {
        window.removeEventListener('resize', this.onResizeWindow);
    }
    render ()
    {
        const { classes } = this.props;

        return (
            <div className={classes.mainContainer}>
                Hello new React/Redux App!
            </div>
        );
    }
}

const VisibleMainApp = connect(
    (state, ownProps)=>
    ({
        language       : state.core.language,
        viewportWidth  : state.core.viewportWidth,
        viewportHeight : state.core.viewportHeight
    }),
    (dispatch)=>
    ({
        onResizeWindow : ()=>
        {
            dispatch(refreshWindowDimensions())
        }
    })
)(injectSheet(styles)(MainApp));

export default VisibleMainApp
