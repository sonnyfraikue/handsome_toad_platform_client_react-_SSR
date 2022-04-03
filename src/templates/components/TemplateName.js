// templates/components/TemplateName.js

import React from 'react';

class TemplateName extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return
        (
            <div className={styles.TemplateName} data-testid="TemplateName">
                <h1>TemplateName component</h1>
            </div>
        )
    }
};

export default TemplateName;