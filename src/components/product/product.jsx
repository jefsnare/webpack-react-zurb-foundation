import React from 'react';
import ReactDOM from 'react-dom';
import styles from './scss/styles.scss';

class Product extends React.Component {
    render() {
        return <article className={styles.product}>
            <h1>Product title</h1>
            <p>Description</p>
        </article>
    }
}

ReactDOM.render(<Product />, document.getElementById('product'));
