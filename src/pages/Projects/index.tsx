import styled from "@emotion/styled";
import useProjectItems from "../../hooks/useProjectsItems";

const Container = styled.div`
  background-color: red;
  display: flex;
`;

const ProjectList = styled.div`
  flex: 1;
`;

const ProjectItem = styled.div`
  padding: 5px;
  border-width: 1px;
  border-color: black;
  border-style: solid;
  margin: 5px;
`;

const ProjectScroll = styled.div`
  width: 100px;
`;

function ProjectPage() {
  const { projectItems } = useProjectItems();
  return (
    <Container>
      <ProjectList>
        {projectItems.map((item) => (
          <ProjectItem>{item.name}</ProjectItem>
        ))}
      </ProjectList>
      <ProjectScroll />
    </Container>
  );
}

export default ProjectPage;
