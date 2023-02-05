import { Card } from '@components/Card';
import { Profile } from '@components/Profile';
import { InputSearch, PostsContainer, PostsHeader, PostsList } from './styles';

export function Home() {
  return (
    <>
      <Profile />

      <PostsContainer>
        <PostsHeader>
          <div>
            <h2>Posts</h2>
            <span>6 posts</span>
          </div>
          <InputSearch type="text" placeholder="Buscar conteúdo" />
        </PostsHeader>

        <PostsList>
          <Card />
          <Card />
          <Card />
          <Card />
        </PostsList>
      </PostsContainer>
    </>
  );
}
