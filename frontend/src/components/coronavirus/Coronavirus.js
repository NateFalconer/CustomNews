import React, { Component } from 'react';


class Coronavirus extends Component {
    render() {
        return (
            <div>
                <div className="coronaMap"><iframe title='map'src="https://hgis.uw.edu/virus/" width="1250" height="900"></iframe></div>
            </div>
        );
    }
}

export default Coronavirus;