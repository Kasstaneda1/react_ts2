import { useContext } from "react";

import Button from "components/Button/Button";

import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { EmployeesContext } from "../../context";

import { PageWrapper, CardsContainer, ButtonControl, EmptyText } from "./styles";

function Employees() {
  const { employees, deleteAllEmployees } = useContext(EmployeesContext);

  return (
    <PageWrapper>
      {employees.length > 0 ? (
        <>
          <CardsContainer>
            {employees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </CardsContainer>
          <ButtonControl>
            <Button name="Remove All Employees" isRed onClick={deleteAllEmployees} />
          </ButtonControl>
        </>
      ) : (
        <EmptyText>No employees yet</EmptyText>
      )}
    </PageWrapper>
  );
}

export default Employees;
