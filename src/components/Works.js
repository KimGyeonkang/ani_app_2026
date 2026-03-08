import React from 'react';
import PropTypes from 'prop-types';
import './Works.css';
import { Link } from 'react-router-dom';

function Works({ title, title_kana, title_en, images, season, season_en }) {
    return (
        <div className="works">
            <Link
                to={{
                    pathname: '/work-detail',
                    state: { title, title_kana, title_en, images, season, season_en }
                }}>
                <img src={images} alt={title} title={title} />
                <div className="works_data">
                    <h3 className="works_title">{title}</h3>
                        <ul>
                            <h5 className="works_title_kana">タイトル（カナ）：{title_kana}</h5>
                            <h5 className="works_title_en">タイトル（英）：{title_en}</h5>
                            <h5 className="works_season">シーズン：{season} ({season_en})</h5>
                        </ul>
                </div>
            </Link>
        </div>
    );
}

Works.propTypes = { 
    title: PropTypes.string.isRequired,
    title_kana: PropTypes.string,
    title_en: PropTypes.string,
    images: PropTypes.string.isRequired,
    season: PropTypes.string.isRequired,
    season_en: PropTypes.string.isRequired,
};

export default Works;