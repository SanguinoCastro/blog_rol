import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import PostTime from '@/components/PostTime';
import ButtonBack from '@/components/ButtonBack';
interface Props {
  params: {
    slug: string;
  };
}

export const generateStaticParams = () => {
  // return [
  //   {slug: '01-blog'},
  //   {slug: '02-blog'},
  //   {slug: '03-blog'}
  // ]
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  return {
    title: post?.title,
    description: post?.description,
  };
};

const PostLayout = ({ params }: Props) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

  let MDXContent;

  if (!post) {
    notFound();
  } else {
    MDXContent = useMDXComponent(post.body.code);
  }

  return (
    <>
      <h1 className='text-center text-2xl font-bold uppercase'>{post.title}</h1>
      <div className='mb-8 text-center'>
        <PostTime post={post} />
      </div>

      <MDXContent />

      <div className='mt-8 text-center'>
        <ButtonBack>Volver</ButtonBack>
      </div>
    </>
  );
};

export default PostLayout;
