# Travelopia Coding Task
This app is about the task that was assigned me by travelopia as part of the hiring process.

# Deployment
[FrontEnd Deployed Link](https://car-rental-tawny-three.vercel.app/)

# TechStack

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css3" /> 
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="reactjs" />

# AboutTask

 I started by making three different components, Header,Home and Footer. I did it beacuse it is a standard practice to have components for reusable code. On Header I Provided some dummy links. I used buttons instead of a tag because it is advised to not use a elemnt when there are no actual link url given to them. I used display:flex and justify-content:space-around properties to get all the button spread in single line with equal gap between them the height of the header is 100px as it was asked in assignment document. I chose dark blue color because its seemed soothing to eyes and goes along with the background image and the whole theme of the page.To make the header responsive i used meedia query of css. On Screen size less than equal to 400px the Link will be hidden and the hamburgur icon will be visible on the header.I also added some transition to the header such as when page loads for the first time the links will float from top ro bottom and settel in middle of the header.I used Chakra UI icons for the hamburger Icon.

 The middle Section has a container with overflow:hidden to make sure that when the dimensions are changed it does not affect the display of background image. I used img tag to set the background image and used position:absolute property to fix its position and the z-index. I set the dimension of image to 100% the image cover the entire container.I used background-color: rgba(0, 0, 0, 0.45) to get the overlay and gave it z-index value greater than the image so that it sits on top and covers the image completely.The div with .title classname is used to display the title and click here button it has z-index greater than overlay. When Click here button is is clicked the alert opens with a transition.I used a flag boolean variable to dynamically change the display properties of both alert and title.I have some tansition effects like change of padding and color on hover of the click here button and ok button to make the page look responsive to the actions of user.

Finally the footer, It has same bg color and height as the header. I used Copyright © 2024 Travelopia. All rights reserved. as a filler text.

## Project Screenshots

<img src="https://i.ibb.co/q9vJJVc/Screenshot-2024-02-03-142205.png"  width="600" >

## Contributor
- [Avishkar kamble](https://github.com/aavishkark)


