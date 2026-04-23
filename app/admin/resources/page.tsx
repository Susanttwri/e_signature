import PostsManagementTable from '../articles/PostsManagementTable';

export default function ResourcesManagementPage() {
  return (
    <PostsManagementTable
      heading="Resources Management"
      addLabel="Add Resource"
      addHref="/admin/articles/new?type=Resources"
      typeFilter="Resources"
    />
  );
}
