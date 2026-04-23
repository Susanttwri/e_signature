import PostsManagementTable from '../articles/PostsManagementTable';

export default function BlogsPage() {
  return (
    <PostsManagementTable
      heading="Blog Management"
      addLabel="Add Blog"
      addHref="/admin/articles/new?type=Blog"
      typeFilter="Blog"
    />
  );
}
