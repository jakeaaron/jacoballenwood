import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props


    return (
      <section className="section">
        <div className="container">
          <div
            data-aos="fade-up"
            data-aos-offest="-1000"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="content"
          >
            <h1 className="has-text-weight-bold is-size-1">Hi, there!</h1>
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
