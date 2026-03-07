import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    works: [],
  };
  getWorks = async () => {
    const {
      data: {
        data: { works },
      }
    } = await axios.get('https://api.annict.com/v1/works?access_token=hA3yuS3pvqgq5zH9KNXtscyBPBVEf-jd9Ag72SVZqPA');
    this.setState({ works, isLoading: false })
  }
  componentDidMount() {
    this.getWorks();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready!'}</div>;
  }
}
export default App;