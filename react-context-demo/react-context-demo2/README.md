### Introduction

This example will demonstrate how to provide different implementation of an interface as react context and provide them to different parts of the application.

### Implementation

Let there be a interface MyRandom having following field

- name of implemenation
- getRandomNumber() method
- getRandomColor() method

This app will provide three different and one default implemenation of this interface.

App will have two common reusable component that will display these random number and random color values.
The app will have three diffrent container components will be contain the reusable components.
All the container components will receive different implemenation of MyRandom interface and render values using previously implemented reusable components.
