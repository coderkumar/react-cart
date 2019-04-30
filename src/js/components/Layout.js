import React from "react";
export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <div class="container-fluid appOuter">
                    <div class="row headerMyApp">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <h3>MY AWESOME SHOP</h3>
                        </div>
                        <div class="col-md-4">
                            <nav class="navbar navbar-static-top navApp" role="navigation">
                                <div class="collapse navbar-collapse container-fluid" id="bs-example-navbar-collapse-1">
                                    <ul class="nav navbar-nav">
                                        <li class="col-md-3"><a href="#">Home</a></li>
                                        <li class="col-md-3"><a href="#" class="dropdown-toggle" data-toggle="dropdown">About</a></li>
                                        <li class="col-md-3"><a href="#">Contact</a></li>
                                        <li class="col-md-3"><a href="#">Bag</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
                <div class="appBody">
                    {this.props.children}
                </div>
                 <footer class="footer">
                        <div class="col-md-2"></div>
                        <div class="col-md-10">
                            <ul id="footerLinks">
                                <li>About<span>|</span></li>
                                 <li>Contact<span>|</span></li>
                                  <li>Privacy Policy<span>|</span></li>
                                   <li>Return Policy<span>|</span></li>
                            </ul>
                        </div>
                </footer> 
            </div>
        );
    }
}
