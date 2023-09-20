const employee = {
    name: "Isaiah",
    streetAddress: "555 P St"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyOfEmployee = { ...employee };
    copyOfEmployee[key] = value
    return copyOfEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }

function deleteFromEmployeeByKey(employee, key){
    const clone = {...employee};
    delete clone[key]
    return clone
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee

}
    