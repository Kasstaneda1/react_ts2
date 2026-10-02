// import Button from "components/Button/Button";

import { ContentInfo, ContentTitle, ContentWrapper } from "./styles";

function Content() {
  return (
    <ContentWrapper>
      <ContentTitle>Content Component</ContentTitle>

      <ContentInfo>Fullname:</ContentInfo>
      <ContentInfo>Age:</ContentInfo>
      <ContentInfo>Job: </ContentInfo>
      {/* <Button isRed name="Delete user" /> */}
    </ContentWrapper>
  );
}

export default Content;
