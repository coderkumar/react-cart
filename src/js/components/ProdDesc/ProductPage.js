import React from "react";
import { connect } from "react-redux";

import ProductDetail from "./ProdDetail";
import Price from "./Price";
import { fetchProduct, updateSelection, disposeProduct } from "../../actions/productActions";

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.colorSelected = this.colorSelected.bind(this);
        this.storageSelected = this.storageSelected.bind(this);
    }
    componentWillMount() {
        if (this.props.params && this.props.params.prodId)
            this.props.fetchProduct(this.props.params.prodId);
    }
    colorSelected(e) {
        var storageId = document.getElementsByClassName("selected storage-swatch")[0].attributes[0].value;
        this.props.updateSelection([e.currentTarget.dataset.id, storageId]);
    }
    storageSelected(e) {
        var colorId = document.getElementsByClassName("colorSwatch selectedgrey")[0].attributes[0].value;
        this.props.updateSelection([e.currentTarget.dataset.id, colorId]);
    }
    componentWillUnmount() {
        this.props.disposeProduct();
    }
    render() {
        const { product, fetching, selVariant } = this.props;
        const { primary_product } = product;
        if (primary_product) {
            const colourOpt = product.options.filter((option) =>
                option.attrib_id == product.attributes.filter((attr) =>
                    attr.name == "Colour")[0]._id).map(color => (
                        <a key={color._id} data-id={color._id} href="javascript:void(0);" onClick={this.colorSelected} className={selVariant[0].sign.indexOf(color._id) > -1 ? "colorSwatch selectedgrey" : "colorSwatch"}>{color.name}</a>
                    ))
            const storageOpt = product.options.filter((option) =>
                option.attrib_id == product.attributes.filter((attr) =>
                    attr.name == "Storage")[0]._id).map(storage => (
                        <a key={storage._id} data-id={storage._id} href="javascript:void(0);" onClick={this.storageSelected} className={selVariant[0].sign.indexOf(storage._id) > -1 ? "selected storage-swatch" : "storage-swatch"}>{storage.name}</a>
                    ))
            return (
                <div>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                    <img className="hero_img col-md-12" src={selVariant[0].images[0]} alt="First slide" />
                </div>
                <div className="col-md-4 rightPanel">
                    <ProductDetail name={selVariant[0].name} description={primary_product.desc} />
                    <Price variant={selVariant[0]} />
                    <div className="variants">
                        <div class="pdpOption">
                            <p>{colourOpt.length} colors available</p>
                            {colourOpt}
                        </div>
                        <div class="pdpOption">
                            <p>{storageOpt.length} storage are available</p>
                            {storageOpt}
                        </div>
                        <div>
                            <p class="quantity">Quantity</p>
                            <div class="prodQuant">
                                <div class="quantitychange">-</div>
                                <div class="quantityValue">1</div>
                                <div class="quantitychange">+</div>
                            </div>
                        </div>
                        <div class="pdpAddtoBag">
                            <input type="button" value="Add To Cart" class="addtobag" />
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            );
        }
        return (
            <div><img src="../../image/loader.gif" className="loader"/></div>
        );
    }
}

const mapStateToProps = store => ({
    product: store.product.product,
    fetching: store.product.fetching,
    selVariant: store.product.selVariant,
    selOptions: store.product.selOptions
});
export default connect(mapStateToProps, { fetchProduct, updateSelection, disposeProduct })(ProductPage);