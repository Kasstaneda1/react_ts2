import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { v4 } from "uuid"

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import {
  SEARCH_FORM_VALUES,
  type University,
  type UniversityInList,
} from "./types";
import {
  PageWrapper,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  SearchPanel,
  ButtonControl,
  CardsGrid,
  UniversityCard,
  CardTitle,
  CardRow,
  CardLabel,
  CardText,
  CardLink,
  Message,
  ErrorText,
  LoaderWrapper,
  Loader,
  LoaderText,
} from "./styles";

const UNIVERSITIES_URL: string = "http://universities.hipolabs.com/search"
const MAX_UNIVERSITIES: number = 15;

const validationSchema = Yup.object().shape({
  [SEARCH_FORM_VALUES.COUNTRY]: Yup.string()
  .required("Country field is required")
  .min(4, "Country field should contain min 4 characters")
  .max(60, "Country field should contain max 60 characters")
});


function Lesson_11() {
  const [universities, setUniversities] = useState<UniversityInList[]>([]);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSearched, setIsSearched] = useState<boolean>(false);
  
  const getUniversities = async (country: string) => {
  try {
    setIsLoading(true);
    const response = await axios.get<University[]>(UNIVERSITIES_URL, {
      params: { country: country },
    });
    setUniversities(
      response.data
      .slice(0, MAX_UNIVERSITIES)
      .map((university: University): UniversityInList => {
        return {...university, uid: v4() };
      }),
    );
    setError(undefined);
  } catch {
    setUniversities([]);
    setError("Network Error");
  } finally {
    setIsLoading(false);
    setIsSearched(true);
  }
};

const formik = useFormik({
  initialValues: {
    [SEARCH_FORM_VALUES.COUNTRY]: "",
  },
  validationSchema: validationSchema,
  validateOnMount: false,
  validateOnChange: false,
  onSubmit: (values) => {
    getUniversities(values[SEARCH_FORM_VALUES.COUNTRY]);
  },
})


  return <PageWrapper>
    <Header>
      <HeaderTitle>University Finder</HeaderTitle>
      <HeaderSubtitle>Search universities around the world by country</HeaderSubtitle>
    </Header>
    <SearchPanel onSubmit={formik.handleSubmit}>
      <Input
      id="country-id"
      name={SEARCH_FORM_VALUES.COUNTRY}
      label="Country"
      placeholder="Enter Country"
      onChange={formik.handleChange}
      value={formik.values[SEARCH_FORM_VALUES.COUNTRY]}
      error={formik.errors[SEARCH_FORM_VALUES.COUNTRY]}
      />
      {isLoading && (
        <LoaderWrapper>
          <Loader />
          <LoaderText>Searching universities...</LoaderText>
        </LoaderWrapper>
      )}

      {!isLoading && !!error && <ErrorText>{error}</ErrorText>}
      {!isLoading && !error && isSearched &&  universities.length === 0 && (
        <Message>No Universities by your request</Message>
      )}

      {!isLoading && !error && universities.length > 0 && (
        <CardsGrid>
          {universities.map((university: UniversityInList) => {
            return (
              <UniversityCard key={university.uid}>
                <CardRow>
                  <CardLabel>University</CardLabel>
                  <CardTitle>{university.name}</CardTitle>
                </CardRow>
                <CardRow>
                  <CardLabel>Country</CardLabel>
                  <CardText>
                    {university.country} ({university.alpha_two_code})
                  </CardText>
                </CardRow>
                <CardRow>
                  <CardLabel>Web pages</CardLabel>
                  {university.web_pages.map((page: string) => {
                    return (
                      <CardLink
                        key={page}
                        href={page}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {page}
                      </CardLink>
                    );
                  })}
                </CardRow>
              </UniversityCard>
            );
          })}
        </CardsGrid>
      )}
      <ButtonControl>
        <Button name="Get Universities" type="submit" disabled={isLoading} />
      </ButtonControl>
    </SearchPanel>
  </PageWrapper>;
}



export default Lesson_11;
