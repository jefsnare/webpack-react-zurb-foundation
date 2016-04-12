import React from 'react';
import ReactDOM from 'react-dom';
import styles from './scss/styles.scss';
import '../../../bower_components/foundation-sites/js/foundation.tabs.js';

class Tabs extends React.Component {
    componentDidMount() {
        new Foundation.Tabs(jQuery(this.refs.tabs));
    }
    
    render() {
        return <article className={styles.component}>
            <h1 className={styles.title}>Product title</h1>
            <article className={styles.article}>
                <h1>Tabs</h1>

                <ul className="tabs" ref="tabs" data-tabs id="example-tabs">
                    <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Tab 1</a></li>
                    <li className="tabs-title"><a href="#panel2">Tab 2</a></li>
                </ul>
                <div className="tabs-content" data-tabs-content="example-tabs">
                    <div className="tabs-panel is-active" id="panel1">
                        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
                    </div>
                    <div className="tabs-panel" id="panel2">
                        <p>Suspendisse dictum feugiat nisl ut dapibus.  Vivamus hendrerit arcu sed erat molestie vehicula. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.  Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                    </div>
                </div>
            </article>
        </article>
    }
}

ReactDOM.render(<Tabs />, document.getElementById('tabs'));
