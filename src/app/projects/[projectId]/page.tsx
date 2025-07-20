interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { projectId } = await params;

  return (
    <div>
      <h1>{projectId}</h1>
    </div>
  );
};

export default ProjectPage;
