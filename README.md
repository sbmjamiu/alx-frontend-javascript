## 📌 Project Overview

This project introduces **TypeScript** in a frontend JavaScript development environment. You'll learn and apply fundamental and advanced TypeScript features including types, interfaces, classes, generics, namespaces, and declaration merging, using modern tooling such as **Webpack**, **Jest**, and **ESLint**.

## 🎯 Learning Objectives

By completing this project, you should be able to explain and demonstrate:

- Basic types in TypeScript
- Interfaces and Classes
- Working with the DOM using TypeScript
- Generic types and type predicates
- Namespaces and declaration merging
- Importing external libraries using ambient namespaces
- Nominal typing with TypeScript

---

## 🧰 Tools & Technologies

- **Language:** TypeScript (`.ts`)
- **Build Tool:** Webpack
- **Test Framework:** Jest `v24.9.*`
- **Linting:** ESLint with `@typescript-eslint`
- **Transpilation Target:** ES5 using `tsc`
- **Environment:** Ubuntu 18.04

---

## 📁 Project Structure

Each task is organized by folder:

```

0x04-TypeScript/
├── task\_0/
├── task\_1/
├── task\_2/
├── task\_3/
├── task\_4/
└── task\_5/

```

Each folder includes configuration files (`package.json`, `tsconfig.json`, `webpack.config.js`) and source code inside `js/`.

---

## ⚙️ Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

````

2. **Run Webpack Dev Server**

   ```bash
   npm run start-dev
   ```

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Run tests (where applicable)**

   ```bash
   npm run test
   ```

---

## 🧪 Tasks Overview

### ✅ Task 0: Interface for a Student

* Create a `Student` interface
* Render a table of student data in the DOM using TypeScript

### ✅ Task 1: Teacher Interface & Inheritance

* Define `Teacher` and `Directors` interfaces
* Demonstrate interface extension and optional/readonly properties
* Print teacher information with a formatted name function
* Create `StudentClass` with methods and interfaces

### ✅ Task 2: Advanced Types

* Implement `TeacherInterface` and `DirectorInterface`
* Use type guards to distinguish employees
* Apply string literal types for subjects (Math, History)

### ✅ Task 3: Ambient Namespace

* Use TypeScript declarations (`.d.ts`) for external JS library (`crud.js`)
* Demonstrate importing and typing third-party functions

### ✅ Task 4: Namespaces & Declaration Merging

* Implement `Subjects` namespace
* Use declaration merging to extend interfaces
* Create specialized subject classes with conditional logic

### ✅ Task 5: Nominal Typing

* Introduce branding with `MajorCredits` and `MinorCredits`
* Implement credit-summing functions that respect type distinctions

---

## ✅ Requirements Checklist

* [x] All files end with a newline
* [x] No TypeScript compilation errors or warnings
* [x] TypeScript used wherever possible
* [x] Follows project specifications and directory structure
* [x] Manual QA review requested upon completion
````
