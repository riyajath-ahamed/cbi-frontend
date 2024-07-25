import { gql } from '@apollo/client';

// Recently published posts 3
export const GET_RECENT_POST = gql`
  query Publication($host: String) {
    publication(host: $host) {
      id
      url
      posts(first: 3) {
        edges {
          node {
            id
            title
            slug
            brief
            publishedAt
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

export const GET_ALL_POST = gql`
  query Publication(
  $host: String
) {
  publication(
    host: $host
  ) {
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
    posts(first:0) {
      edges {
        node {
          id
          title
          slug
          url
          brief 
          publishedAt
          coverImage{
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

export const GET_SINGLE_POST = gql`
query Publication($host: String, $slug: String!) {
  publication(host: $host) {
    isTeam
    title
    post(slug: $slug) {
      title
      id
      publishedAt
      coverImage{
            url
            attribution
          }
      content {
        html
        markdown
      }
    }
  }
}
`;