import { gql } from '@apollo/client';

// Recently published posts 3
export const GET_RECENT_POST = gql`
  query Publication($host: String) {
    publication(host: $host) {
      id
      title
      displayTitle
      about {
        text
      }
      url
      author {
        id
        username
        name
      }
      posts(first: 3) {
        edges {
          node {
            id
            title
            slug
            url
            brief
            publishedAt
            content {
              html
            }
            coverImage {
              url
              attribution
            }
          }
        }
        totalDocuments
      }
    }
  }
`;
