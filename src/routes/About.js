import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
    <div className="about__container">
        <span>
            "はじめまして。ヴィーグルンのアニメ紹介ページへようこそ！"
        </span>
        <div>
            <p className="developer_name">Developer: ヴィーグルン</p>
            <p className="developer_email">Contact Me: v.tang3203@gmail.com</p>
            <p className="used_technologies">Used Technologies: React, JS, HTML, CSS, VScode, Git, GitHub
                (まずは、JS,HTML,CSSの知識はほとんどないまま、Reactを活用し模写コーディングしてみました)
            </p>
            <p className="used_api">Used Api: https://api.annict.com (REST API)</p>
            <p className="page_introduction">普段アニメ鑑賞が好きな者として、自分のアニメ紹介ページをずっと作ってみたいと思いました。
                その中で、ちょうどウェブ開発に興味を持つことになり、「足りなくてもまずは自分でページをつくってみよう！」と考え、披露しています！
            </p>
        </div>
    </div>
    )
}


export default About;