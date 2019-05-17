import IProduct from './types/IProduct';

export const products: IProduct[] = [{
    subttitle: 'c фуа-гра',
    size: 0.5,
    complect: ['10 порций', 'мышь в подарок'],
    enabled: true
}, {
    subttitle: 'c рыбой',
    size: 2,
    complect: ['40 порций', '2 мыши в подарок'],
    enabled: true,
    checked: true
}, {
    subttitle: 'c курой',
    size: 5,
    complect: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    enabled: false
}];


export const isIE11 = (): Boolean => {
    const ua = window.navigator.userAgent;
    const trident = ua.indexOf('Trident/');
    return trident > 0;
}


export const Fuagra = products[0];
export const Fish = products[1];
export const Chicken = products[2];