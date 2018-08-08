import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'


export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <img src="https://www.otssolutions.com/blog/wp-content/uploads/Mobile-App-Development-e1473317596452.jpg" />
          <div
            data-aos="fade-up"
            data-aos-offest="-1000"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
            className="content"
          >
            <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
          </div>
          {posts
            .map(({ node: post }) => (
              <div
                data-aos="fade-up"
                data-aos-offest="-1000"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
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
