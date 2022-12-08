export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  pImage: string;
  password: any;
  employeeDetail: EmployeeDetail;
}

export interface EmployeeDetail {
  position: string;
  department: string;
  team_leader: string;
  gender: string;
  date_of_birth: string;
  employee_status: string;
  date_of_joining: string;
  office_location: string;
    birthday_Event: string;
    anniversary: string;
    celebration: string;
    month: string;
}
