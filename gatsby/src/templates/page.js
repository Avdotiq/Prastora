import * as React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { renderBlock } from '../helpers/renderBlock'
import Layout from '../components/layout'
import Seo from '../components/seo'

const page = ({ data }) => {
  console.log(data);
  const Components = data.allWpPage.nodes[0].components.components;
  console.log(Components.map(item => item.fieldGroupName));

  return (
    <Layout>
      <h1>
        Hello from a <b>DSG Page</b>
      </h1>
      {Components &&
        Components.map(item => (
          <React.Fragment key={item.fieldGroupName}>
            {renderBlock(item)}
          </React.Fragment>
        ))}
      <Link to='/'>Go back to the homepage</Link>
    </Layout>
  )
}

export const Head = () => <Seo title='Using DSG' />

export default page

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    allWpPage(filter: { id: { eq: $id } }) {
      nodes {
        id
        databaseId
        uri
        title
        isFrontPage
        components {
          components {
            ... on WpPage_Components_Components_PopularPost {
              fieldGroupName
              ...PopularPost
            }
            ... on WpPage_Components_Components_AdvertisementPost {
              fieldGroupName
              ...AdvertisementPost
            }
          }
        }
      }
    }
  }
`;
