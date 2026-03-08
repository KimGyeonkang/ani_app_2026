import React from 'react';
import axios from 'axios';
import Works from '../components/Works';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    works: [],
  };
  getWorks = async () => {
    const {
      data: { works },
      } = await axios.get('https://api.annict.com/v1/works?filter_season=2026-winter&sort_id=asc&access_token=hA3yuS3pvqgq5zH9KNXtscyBPBVEf-jd9Ag72SVZqPA');
    console.log(works);
    this.setState({ works, isLoading: false })
  }
  componentDidMount() {
    this.getWorks();
  }

  render() {
    const { isLoading, works } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="works">
            {works.map((work) => (
              <Works
                key={work.id}
                id={work.id}
                title={work.title}
                title_kana={work.title_kana}
                title_en={work.title_en}
                images={work.images.facebook.og_image_url}
                season={work.season_name_text}
                season_en={work.season_name}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;