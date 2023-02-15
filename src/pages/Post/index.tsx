import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { PostArticleSkeleton } from './components/PostArticleSkeleton';
import { PostHeader } from './components/PostHeader';
import { PostHeaderSkeleton } from './components/PostHeaderSkeleton';
import { fetchIssue } from './utils';

export function Post() {
  const { number } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['issue'],
    queryFn: () => fetchIssue({ number }),
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  });

  if (isLoading) {
    return (
      <>
        <PostHeaderSkeleton />
        <PostArticleSkeleton />
      </>
    );
  }

  if (isError || !data) {
    return <p>404</p>;
  }

  const { comments, formattedUpdatedAt, html_url, name, title, body } = data;

  return (
    <>
      <PostHeader
        data={{ comments, formattedUpdatedAt, html_url, name, title }}
      />
      <article
        className="
        py-5 
        px-4 
        md:py-10 

        prose 
        max-w-none 
        prose-a:text-primary-blue 
        prose-headings:text-primary-base-title
        prose-p:text-primary-base-text
        prose-strong:text-primary-base-subtitle
        prose-li:text-primary-base-span"
      >
        <ReactMarkdown children={body} />
      </article>
    </>
  );
}
