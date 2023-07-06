import { Post } from 'contentlayer/generated';

interface Props {
  post: Post;
}

const PostTime = ({ post }: Props) => {
  return (
    <time>
      {new Date(post.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
  );
};
export default PostTime;
