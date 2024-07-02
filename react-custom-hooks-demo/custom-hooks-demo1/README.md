## Introduction
This project demonstrates
- How to create custom hooks
- How a hook can be reused in a different components as per their own logic needs

## List of custom hooks implemented
- **Local Storage Hook**: A generic hook to facilitate local storage by some key value pair mandated by a component. Component will use this hook to persist data in browser localStore and display data according to its own logic.
- **OnLine Hook**: A hook to use browser feature to check if an application is online or not. Two different component use this hook to render this info differently.
- **File API Hook**: A hook to load CSV file of numbers. This hook is used by one component that calculates average of these numbers and other calculate mean and standard deviation.
- **Weather data Hook**: A Weather data hook, which periodically (configurable) provides data to component and components render them accordingly to its own logic.