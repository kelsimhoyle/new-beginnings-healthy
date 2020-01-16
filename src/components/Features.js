import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import { Parallax } from 'react-parallax';

const FeatureGrid = ({ gridItems }) => (
  <div>
    <div className="parallax-container">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require("../img/rearview.jpg")}
        bgImageAlt="Content Woman"
        strength={200}
      >
        <div style={{
          minHeight: '20vh',
        }}>
          <h2 style={{
            textAlign: 'center',
            padding: '5% 0 15% 0',
            color: 'white',
            textShadow: '2px 2px #9a9a9a'
          }}>Services For Your New Beginning</h2>
        </div>
      </Parallax>
    </div>
    <div className="columns is-multiline">
      {gridItems.map(item => (
        <div key={item.text} className="column is-6">
          <section className="section">
            <div className="has-text-centered">
              <div
                style={{
                  width: '240px',
                  display: 'inline-block',
                }}
              >
                <PreviewCompatibleImage imageInfo={item} />
              </div>
            </div>
            <p>{item.text}</p>
          </section>
        </div>
      ))}
    </div>

  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
