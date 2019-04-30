import React from "react";
import { connect } from "react-redux";

import { fetchProductList, disposeList } from "../../actions/listAction";

class List extends React.Component {
    componentWillMount() {
        this.state = {
            page: 1
        }
        this.props.fetchProductList(this.state.page);
        this.onScroll = this.onScroll.bind(this);
        this.formatPrice = this.formatPrice.bind(this);
    }
    componentDidMount() {
        if (this.props.callRequire) {
            window.addEventListener('scroll', this.onScroll, false);
        }
    }
    componentWillReceiveProps() {
        if (!this.props.callRequire) {
            window.removeEventListener('scroll', this.onScroll, false);
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
        this.props.disposeList();
    }
    onScroll() {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 700)) {
            this.setState({ page: this.state.page + 1 });
            this.props.fetchProductList(this.state.page);
        }
    }
    formatPrice(price) {
        if (price) {
            var formattedPrice = (Math.round(price * 100) / 100).toString();
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(formattedPrice)) {
                formattedPrice = formattedPrice.replace(rgx, '$1' + ',' + '$2');
            }
            return "₹" + formattedPrice;
        } else {
            return null;
        }
    }
    render() {
        const { prodList } = this.props;
        if (prodList.length) {
            const prodData = prodList.map(prod => (
                <div key={prod._id} data-id={prod._id} class="product">
                    <a href={"#/product/" + prod._id}><img src={prod.images[0]} class="prodImage" /></a><br />
                    {prod.name.substring(0, 18) + ".."}<br />
                    {this.formatPrice(prod.sale_price)}
                </div>
            ));
            return (
                <div class="productMatrix">
                    <div class="col-md-2"></div>
                    <div class="col-md-8">{prodData}</div>
                    <div class="col-md-2"></div>
                </div>
            )
        }
        return (
            <div><img src="../../image/loader.gif" className="loader" /></div>
        );
    }
}

const mapStateToProps = store => ({
    prodList: store.productList.prodList,
    fetching: store.productList.fetching,
    callRequire: store.productList.callRequire
});
export default connect(mapStateToProps, { fetchProductList, disposeList })(List);