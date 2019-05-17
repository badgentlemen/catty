import React, { Component } from 'react';
import classNames from 'classnames';
import IProduct from '../../types/IProduct';
import './ProductCard.css';

interface IProductCardProps {
    product: IProduct;
    onClick?: () => void
}

interface IProductCardState {
    product: IProduct;
    disabled: boolean;
    hovered: boolean;
}

export default class ProductCard extends React.Component<IProductCardProps, IProductCardState> {
    constructor(props: IProductCardProps) {
        super(props);
        this.state = {
            product: props.product,
            disabled: !props.product.enabled || false,
            hovered: false
        };
    }
    render() {
        const { product, disabled } = this.state;
        const isDefault = !disabled && !product.checked;
        const classes = classNames('product', { 'product-default': isDefault, 'product__is-disabled': disabled, 'product__is-selected': product.checked });
        return (
            <div className={classes} onClick={event => {
                if (!this.state.disabled) {
                    this.props.onClick && this.props.onClick();
                }
            }}>
                <div className="product-inner">
                    <div className="product-header">
                        <div className="product-header__text">
                            Сказочное заморское яство
                        </div>
                        <h1 className="product-header__title">
                            Нямушка
                        </h1>
                        <h3 className="product-header__subtitle">
                            {product.subttitle}
                        </h3>
                        {
                            product.complect &&
                            <div className="product-header__infowrapper">
                                {product.complect.map((complectItem, index) => (
                                    <div className="card-header__infowrapper-item" key={index}>
                                        {complectItem}
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
                <div className="product-buble">
                    <div className="product-buble__title">
                        {product.size.toLocaleString()}
                    </div>
                    <div className="product-buble__subtitle">
                        кг
                    </div>
                </div>
            </div>
        )
    }
}