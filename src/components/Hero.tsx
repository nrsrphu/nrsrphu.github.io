import * as React from 'react';

type HeroProps = {
  image: string;
};

export default function Hero(props: HeroProps) {
    return (
      <div id="splash-img" style={{
        backgroundImage: `url(${props.image})`,
      }} className="hero fullscreen hero-img parallax-img">
        <div className="hero-body">
          <div className="content u-text-center">
            <h1 style={{
              fontSize: '42pt',
            }} className="uppercase text-indigo-900 title">New Rebel System Roleplay</h1>
            <h3 className="uppercase sub-title faded">
              <span className="text-primary">HU</span>
              <span className="white">NGA</span>
              <span className="text-success">RY</span>
            </h3>
          </div>
        </div>
      </div>
    );
}