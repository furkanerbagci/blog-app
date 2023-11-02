import React from 'react'
import { Route , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import Header from '../components/Header'


const PublicRoute = ({isAuthenticated , component : Component , ...rest}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
        <div>
            <Redirect to="/blogs" />


        </div>
            ) : (
            <Component {...props} />    

        )
    )}/>
)


const mapStateToProps = (state) =>({
    isAuthenticated: !!state.auth.uid
})
export default connect(mapStateToProps)(PublicRoute) 