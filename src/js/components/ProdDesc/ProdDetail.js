import React from "react";

export default class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: this.props.description.substring(0, 150) + "..",
            label: "+more"
        }
        this.showCompeleteDesc = this.showCompeleteDesc.bind(this);
    }
    showCompeleteDesc() {
        if (this.state.label.indexOf("Less") > -1) {
            this.setState({
                desc: this.props.description.substring(0, 150) + "..",
                label: "+more"
            });
        } else {
            this.setState({ desc: this.props.description, label: "-Less" });
        }
    }
    render() {
        return (
            <div class="prodDetail">
                <h4 id="prodName">{this.props.name}</h4>
                <div class="greenMainText"></div>
                <p class="prodDesc">{this.state.desc}</p>
                <p class="extend" onClick={this.showCompeleteDesc}>{this.state.label}</p>
            </div>
        );
    }
}