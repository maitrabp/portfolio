import React from 'react';
import Slider from "react-slick";
import Project from "./Project"
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Projects extends React.Component {
    render(){
        var settings = {
            dots: true,
            autoplay: true,
            autoplaySpeed: 10000,
            infinite: true,
            speed: 1000,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 4, 
            responsive: [
                {
                  breakpoint: 1700,
                  settings: {
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 10000,
                    infinite: true,
                    speed: 1000,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 3, 
                  }
                },
                {
                  breakpoint: 1250,
                  settings: {
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 10000,
                    infinite: true,
                    speed: 1000,
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2, 
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 10000,
                    infinite: true,
                    speed: 1000,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1, 
                  }
                }
              ]
          };
        return (
            <div id="Projects">
                <div className = "mainTitle">
                   SOME OF MY RECENT WORK
                </div>
                <div className = "container-fluid" style={{backgroundColor:"white", borderTop:"8px solid black", borderBottom:"8px solid black", textAlign: "center"}}>
                  <div className = "innerSliderContainer">
                      <Slider {...settings}>
                        {/*Page 1*/}
                        <Project projImg = "ecommerce.jpg" demo={true} demolink = "https://m18e-commerce.000webhostapp.com/ecommerce" codelink = "https://github.com/maitrabp/E-commerce" projName="Ecommerce" projDesc="Here I've made an ecommerce website from scratch using HTML, CSS, Javascript and Server-Side PHP. It offers features like login authentication, add/remove items to cart (CRUD), adding/removing items for sale, order confirmation, and checkout."></Project>
                        <Project projImg = "bankacccount.jpg" demo={true} demolink = "https://m18e-commerce.000webhostapp.com/bankaccount" codelink = "https://github.com/maitrabp/BankAccountWebsite" projName="Bank Account Dashboard" projDesc="Here I've made a bank account management website from scratch using HTML, CSS, JS, and Server-Side PHP. It offers features like login authentication, deposit, withdraw, loan application, credit card application, and a universal transaction log."></Project>
                        <Project projImg = "presentationregistration.jpg" demo={true} demolink = "https://m18e-commerce.000webhostapp.com/p_registration/" codelink = "https://github.com/maitrabp/UMD_presentation_registration" projName="Presentation Room Registration" projDesc="Here I've made a presentation room registration application specifically intended for University of Michigan, Dearborn. It was made using simple HTML, CSS, Jquery and Server-Side PHP. One is able to lock their slot for a specific time offered, and view all reserved slots in the log page. "></Project>
                        <Project projImg = "fifteenpuzzle.jpg" demo={true} demolink = "https://m18e-commerce.000webhostapp.com/fifteenpuzzlegame/"  codelink = "https://github.com/maitrabp/The-Fifteen-Puzzle" projName="Fifteen Puzzle" projDesc="Here I've made a fifteen puzzle game using HTML, CSS, and Javascript (w/ Jquery). Let's see if you could solve this. Try to give it a shot using the demo link down below."></Project>
                        {/*Page 2*/}
                        <Project projImg = "tictactoe.jpg" demo={true} demolink = "https://maitrabp.github.io/Tic-Tac-Toe/" codelink = "https://github.com/maitrabp/Tic-Tac-Toe" projName="Tic Tac Toe" projDesc="Here's my first mini project with React.js. I've made a Tic-Tac-Toe game which keeps track of each player move using State Management, and Time Travel."></Project>
                        <Project projImg = "weatherapp.jpg" demo={false} codelink = "https://github.com/maitrabp/TheWeatherApp" projName="Weather App" projDesc="This is a mobile application made using Android Studio. The app shows a five day forecast of selected city. The app fetches data from a weather API. I used Java to code the back end."></Project>
                        <Project projImg = "cardealership.jpg" demo={false} codelink = "https://github.com/maitrabp/Dealership_Inventory" projName="Car Inventory App" projDesc="This is a mobile application made using Android Studio. The app keeps track of cars available for retail. The tool can be used by dealerships and customers. Dealers can update, add, and remove cars from the inventory. Customers can browse through the inventory. Java and Firebase were used for back-end."></Project>
                        <Project projImg = "twodicepig.jpg" demo={false} codelink = "https://github.com/maitrabp/TwoDicePig" projName="Two Dice Pig Game" projDesc="This is a mobile application made using Android Studio. It's a turn based dice game for two players. A player gets to roll the dice to increase their score. Different rules have been allocated for dice rolls. For ex. rolling two ones will skip this player's turn. For back-end I used Java. For more details, click on Code button below."></Project>
                        {/*Page 3*/}
                        <Project projImg = "unitconversion.jpg" demo={false} codelink = "https://github.com/maitrabp/Unit_Conversion" projName="Unit Conversion App" projDesc="This is a mobile application made using Android Studio. It's a simple unit conversion app which saves state of user's data. The app offers temperature conversion (F to C and vice versa) and distance conversion (KM to MI and vice versa). The app will keep the old data even if you close out of it. It was made using Java for back-end. "></Project>
                        <Project projImg = "pathfinding.jpg" demo={false} codelink = "https://github.com/maitrabp/DFSandAstar_AI" projName="Pathfinding Algorithms" projDesc="I've implemented A-star and Depth First Search algorithms in this project. It could search through any 2D map to find an optimal path from the beginning point to the target."></Project>
                        <Project projImg = "hmm.jpg" demo={false} codelink = "https://github.com/maitrabp/HiddenMarkovModel_AI" projName="Robot Localization Problem" projDesc="Here I've implementated Hidden Markov Model for a Robot Localization Problem. Using Sensing and Motion update, the robot locates itself on the grid. The project is coded in Java."></Project>
                        <Project projImg = "reinforcementlearning.jpg" demo={false} codelink = "https://github.com/maitrabp/Reinforcement_Learning_AI" projName="Reinforcement Learning" projDesc="Here I've implementated Reinforcement Learning for a optimal pathfinding. The agent runs 20,000 trials to  find an optimal path(less costly) to reach the target. The agent learns from each trial it goes through to strengthen it's prediction.  The project is coded in Java."></Project>
                      </Slider>
                      <div className = "githubPlug"><a  target="_blank" rel="noopener noreferrer" href = "https://github.com/maitrabp"> Explore my Github {'>>'}</a></div>
                  </div>
                </div>
            </div>
        );
    }
}
export default Projects;