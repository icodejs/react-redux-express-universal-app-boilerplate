import React from 'react';

export default class Layout extends React.Component {
    render() {
        return (
            <html>
                <body>
                    <div>{this.props.children}</div>
                    <script src="/dist/bundle.js"></script>
                </body>
            </html>
        );
    }
}