# README.md

# Grading System on Flare Network

## Contract Address  
**0x130d8899d37053a566c974c8138A64e24648a07D**  
View on Coston2 Explorer:  
https://coston2-explorer.flare.network/address/0x130d8899d37053a566c974c8138A64e24648a07D

---

## Description  
The **Grading System Smart Contract** is a simple, decentralized grade-recording solution deployed on the **Flare Network (Coston2 Testnet)**.  
It allows a teacher (the contract deployer) to assign grades to students securely and transparently.  
Anyone can query a student's grade, ensuring complete visibility without compromising integrity or ownership.

This project also includes a frontend UI built with React + Wagmi + Viem to interact with the smart contract, enabling assigning and fetching grades directly through a connected wallet.

---

## Features  

### 🎓 Smart Contract Features
- **Teacher-only grade assignment**  
  Only the deployer can assign or update grades.
- **Secure grade storage**  
  Grades are stored on-chain and cannot be tampered with.
- **Public grade querying**  
  Anyone can fetch the grade for any student address.
- **Event emission**  
  The contract emits a `GradeAssigned` event each time a grade is updated.

### 🖥 Frontend Features
- Wallet connection required (wallet-gated UI)
- Assign grades through the interface
- Fetch and display grades for any address
- Transaction status feedback (pending, confirming, confirmed)
- Error handling for invalid inputs and failed transactions

---

## How It Solves the Problem  

Traditional grading systems rely heavily on centralized databases that can be manipulated, lost, or made inaccessible.  
This decentralized grading system provides:

### ✔ Security  
Grades are stored on-chain, making them immutable and verifiable.

### ✔ Transparency  
Students can independently verify their grades without relying on institutions.

### ✔ Trust  
Using blockchain ensures fairness and prevents unauthorized modifications.

### ✔ Decentralization  
No single entity (beyond the teacher role) controls access or visibility.

### ✔ Educational Value  
Provides a beginner-friendly example of smart contract development and integration with a real blockchain frontend.

---

## Use Cases  
- University or school digital grade records  
- Decentralized education platforms  
- Developer demonstration of blockchain interaction  
- Transparent certification or scoring systems  

---

This project demonstrates a clean and simple implementation of a grading system using Solidity, Flare Network, and a modern Web3 frontend stack.
