import { useContext } from "react";

import Button from "components/Button/Button";

import { EmployeesContext } from "../../context";

import { CardWrapper, EmployeeInfo, InfoLabel, InfoValue } from "./styles";
import { type EmployeeCardProps } from "./types";

function EmployeeCard({ employee }: EmployeeCardProps) {
  const { deleteEmployee } = useContext(EmployeesContext);

  return (
    <CardWrapper>
      <EmployeeInfo>
        <InfoLabel>Name</InfoLabel>
        <InfoValue>{employee.name}</InfoValue>
      </EmployeeInfo>
      <EmployeeInfo>
        <InfoLabel>Surname</InfoLabel>
        <InfoValue>{employee.surname}</InfoValue>
      </EmployeeInfo>
      <EmployeeInfo>
        <InfoLabel>Age</InfoLabel>
        <InfoValue>{employee.age}</InfoValue>
      </EmployeeInfo>
      <EmployeeInfo>
        <InfoLabel>Job Position</InfoLabel>
        <InfoValue>{employee.jobPosition || "—"}</InfoValue>
      </EmployeeInfo>
      <Button
        name="Delete"
        isRed
        onClick={() => deleteEmployee(employee.id)}
      />
    </CardWrapper>
  );
}

export default EmployeeCard;
