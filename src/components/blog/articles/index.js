import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_POST, GET_RECENT_POST, GET_SINGLE_POST } from '../../../api/queries';
import moment from 'moment/moment';
import { NavLink } from 'react-router-dom';
import { BlogWait, CardWait } from '../../common';

export const RecentPublication = ({ host , slug }) => {
  const { loading, error, data } = useQuery(GET_RECENT_POST({slug}), {
    variables: { host },
  });

  if (loading) return (<CardWait/>);
  if (error) return <p>Error: {error.message}</p>;


  const { publication } = data;

  return (
    <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-6xl">
      <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3 lg:gap-y-24">
        {publication.series.posts.edges.map(({ node }) => (
          <div
            className="max-w-lg mx-auto bg-white border-2 border-slate-100 rounded-lg overflow-hidden"
            id={node.id}
          >
            {node.coverImage && (
              <img
                className="w-full h-48 object-cover"
                src={node.coverImage.url}
                alt={`BCI ${node.title}`}
              />
            )}
            <div className="p-4">
              <div className="text-gray-600 text-sm">{moment(node.publishedAt).format('L')}</div>
              <h2 className="text-xl font-semibold mt-2">{node.title}</h2>
              <p className="text-gray-500 font-light text-  mt-2">{node.brief}</p>
              <NavLink to={`/articles/${node.slug}` }>
              <p className="block mt-4 text-green-500 hover:text-green-700 font-medium cursor-pointer hover:bg-gray-200 py-2 px-1 rounded-md hover:cursor-pointer  transition-all duration-400">
                Read Article
              </p>
              </NavLink>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};


export const AllPublication = ({ host , setArticlesCount, slug , panel }) => {
  const { loading, error, data } = useQuery(GET_ALL_POST({slug}), {
    variables: { host },
  });

  useEffect(() => {
    if (data) {
      const { publication } = data;
      setArticlesCount(publication.series.posts.totalDocuments);
    }
  }, [data, setArticlesCount]);

  if (loading) return (<CardWait/>);
  if (error) return <p>Error: {error.message}</p>;

  const { publication } = data;

  return (
    <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:mt-16 lg:max-w-6xl">
      <dl className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3 lg:gap-y-24">
        {publication.series.posts.edges.map(({ node }) => (
          <div
            className="max-w-lg lg:min-w-80 mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
            id={node.id}
          >
            {node.coverImage && (
              <img
                className="w-full h-48 object-cover"
                src={node.coverImage.url}
                alt={`BCI ${node.title}`}
              />
            )}
            <div className="p-4">
              <div className="text-gray-600 text-sm">{moment(node.publishedAt).format('L')}</div>
              <h2 className="text-xl font-bold mt-2">{node.title}</h2>
              <p className="text-gray-700 text-base mt-2">{node.brief}</p>
              <div className="mt-4">
                <div className="text-gray-500 text-sm flex flex-row justify-between ">
                  <div>By</div>
                  <div className="font-medium">WDoo</div>
                </div>
                <div className="text-gray-500 text-sm flex flex-row justify-between">
                  <div>Language</div>
                  <div className="font-medium">English</div>
                </div>
              </div>
              <NavLink to={`/${panel}/${node.slug}` }>
              <p className="block mt-4 text-green-500 hover:text-green-700 font-medium cursor-pointer">
                Read Article
              </p>
              </NavLink>
            </div>
          </div>
        ))}
      </dl>
    </div>
  );
};


export const SinglePost = ({ host , slug , panel }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_POST, {
    variables: { host, slug },
  });

  if (loading) return (<BlogWait/>);
  if (error) return <p>Error: {error.message}</p>;

  // https://www.npmjs.com/package/html-react-parser  - Using this package to parse the html content  
  // 
  //handle the syling of the html content 

  const { publication } = data;

  return (
    <div>
      <p className="text-sm">{moment(publication.post.publishedAt).format('L')}</p>
      <h1 className="text-3xl font-bold mt-2">{publication.post.title}</h1>
      {publication.post.coverImage && (
        <img
          className="w-full h-48 object-cover"
          src={publication.post.coverImage.url}
          alt={`BCI ${publication.post.title}`}
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: publication.post.content.html }} />

    </div>
  );
};