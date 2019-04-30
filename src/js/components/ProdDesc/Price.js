import React from "react";

export default class Price extends React.Component {
    constructor(props) {
        super(props);
        this.formatPrice = this.formatPrice.bind(this);
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
        const { variant } = this.props;
        return (
            <div class="prodPrice">
                <span class="mainPrice">{this.formatPrice(variant.sale_price)}</span>
                <span class="strikedOutPrice">{variant.mark_price}</span>
                <p class="savedText">You save <span class="savedPercent">{parseInt(variant.mark_price - variant.sale_price)} [{variant.sale_msg.substring(0,3)}]</span></p>
                <p class="productDescription">Local taxes included (where applicable)</p>
            </div>
        );
    }
}