import PostsManagementTable from './PostsManagementTable';

export default function ArticlesPage() {
  return <PostsManagementTable heading="All Articles" addLabel="Add Article" addHref="/admin/articles/new" />;
}
