// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract GradingSystem {

    // Address of the teacher (deployer)
    address public teacher;

    // Mapping of student address to grade
    mapping(address => uint256) private grades;

    // Event for logging grade assignment
    event GradeAssigned(address indexed student, uint256 grade);

    constructor() {
        teacher = msg.sender; // whoever deploys the contract becomes the teacher
    }

    // Modifier to restrict access to teacher only
    modifier onlyTeacher() {
        require(msg.sender == teacher, "Only teacher can do this");
        _;
    }

    // Assign grade to a student
    function assignGrade(address student, uint256 grade) public onlyTeacher {
        require(grade <= 100, "Grade must be between 0-100");
        grades[student] = grade;

        emit GradeAssigned(student, grade);
    }

    // Get grade of student
    function getGrade(address student) public view returns (uint256) {
        return grades[student];
    }
}
