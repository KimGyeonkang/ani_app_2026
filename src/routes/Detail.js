import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state == undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;
        if (location.state) {
            return <div className="work_detail">
                <img src={location.state.images} border="0" width="300" height="300" alt={location.state.title} title={location.state.title}/>
                <h3>{location.state.title}</h3>
                <h5>{location.state.title_kana} ({location.state.title_en})</h5>
                <p>{location.state.season} ({location.state.season_en})</p>
                </div>
        } else {
            return null;
        }
    }
}

export default Detail;