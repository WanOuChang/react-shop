import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

export default class RouterView extends Component {
    render() {
        let { routes } = this.props;
        let RouteArr = routes.filter(item => !item.redirect);
        let RedirectArr = routes.filter(item => item.redirect);
        return (
            <div>
                <Switch>
                    {RouteArr.map(item => <Route path={item.path} key={item.path} render={(props)=>{
                        return <item.component routes={item.children} {...props}></item.component>
                    }}></Route>)}
                    {RedirectArr.map(item => <Redirect form={item.path} to={item.redirect} key={item.path}></Redirect>)}
                </Switch>
            </div>
        )
    }
}
