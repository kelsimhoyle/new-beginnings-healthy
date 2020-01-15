import React from 'react'
import { Parallax } from 'react-parallax';

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={require("../../img/blog.jpg")}
          bgImageAlt="Blog Header"
          strength={200}
        >
          <div
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              minHeight: '20vh',
            }}>
            <h2 style={{
              textAlign: 'center',
              padding: '10% 0 1% 0',
              color: 'white',

            }}>Blog</h2>
            <h3
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              textAlign: 'center',
              color: 'white',
              paddingBottom: '10%'
            }}
            >
              Helpful tips to get you heading in the right direction.
            </h3>
          </div>
        </Parallax>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
