import React, { Component } from 'react';
import ProductCard from './components/ProductCard';
import { products, isIE11 } from './utils';
import IProduct from './types/IProduct';
import classNames from 'classnames';

interface IAppState {
    products: IProduct[]
}

class App extends Component<any, IAppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            products
        };
    }
    renderDescription(index: number) {
        let inner: JSX.Element;

        switch (index) {
            case 0:
                inner = <span>Чего сидишь? Порадуй котэ, <span className="card-layout__desc-buy" onClick={event => this.checkProduct(0)}>купи.</span></span>
                break;
            case 1:
                inner = <span>Головы щучьи с чесноком да свежайшая сёмгушка.</span>;
                break;
            default:
                inner = <span style={{color: '#ffff66'}}>Печалька, с курой закончился.</span>
                break;
        }

        return (
            <div className="card-layout__desc">
                {inner}
            </div>
        )
    }

    checkProduct(byIndex: number) {
        let { products } = this.state;
        products[byIndex].checked = !products[byIndex].checked;
        this.setState({
            products
        }); 
    }

    render() {
        const { products } = this.state;
        const classes = classNames('application', {'ie': isIE11()})
        return (
            <div className={classes}>
                <div className="container">
                    <h2 className="main-title">Ты сегодня покормил кота?</h2>
                    <div className="card-layout">
                        {
                            products.map((product, index) => {
                                return (
                                    <div className="card-layout__item" key={index}>
                                        <ProductCard product={product} onClick={() => this.checkProduct(index)}/>
                                        { this.renderDescription(index) }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
