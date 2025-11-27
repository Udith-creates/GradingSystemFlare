GradeSystem Smart Contract

A simple on-chain grading system where an admin (owner) can add grades for students.
All grades are stored permanently on the blockchain and can be viewed publicly.

📌 Contract Details
Contract Address
0xE9355ddCe46ffC0901B46FAb01186aa08D27a9cD

Owner Address
0x8C9Dc067eab2f6246b6427b5D5ccb4Bc265F9ce2

Network

Flare Coston2 Testnet

Chain ID: 114

📄 Smart Contract Code
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract GradeSystem is Ownable {

    // student => course => marks
    mapping(address => mapping(string => uint256)) private grades;

    event GradeAdded(address indexed student, string course, uint256 marks);

    constructor() Ownable(msg.sender) {}

    /**
     * @notice Add or update a student's grade for a course
     * @dev Only owner (teacher/admin) can call this
     */
    function addGrade(
        address student, 
        string memory course, 
        uint256 marks
    ) 
        external 
        onlyOwner 
    {
        require(marks <= 100, "Marks must be <= 100");
        grades[student][course] = marks;
        emit GradeAdded(student, course, marks);
    }

    /**
     * @notice Fetch a student's grade for a course
     */
    function getGrade(
        address student, 
        string memory course
    ) 
        external 
        view 
        returns (uint256) 
    {
        return grades[student][course];
    }
}

🧪 Functions
1. addGrade(address student, string course, uint256 marks)

Adds or updates a student's grade.
Only the contract owner can call this.

Example:

addGrade(0x123..., "Maths", 92)

2. getGrade(address student, string course)

Returns the grade for a specific student and course.

Example:

getGrade(0x123..., "Maths")

📜 Events
GradeAdded

Emitted whenever the owner adds or updates a grade.

event GradeAdded(address student, string course, uint256 marks)

🔒 Notes

marks must be 0–100.

Only the owner can add grades.

Anyone can view grades.

Data is stored permanently on-chain.
