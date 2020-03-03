import React from 'react';
import NavBar from './navbar'

function SummerOfTech() {
  return (


    <div style={{backgroundColor: '#141414', minHeight: '100vh', paddingBottom: '20px'}}>
      <NavBar/>
      <div className= "article">
        <img src={require('./images/fergus.svg')} style={{backgroundColor:'white'}}/>
        <h1>Summer of Tech and Fergus Software</h1>
        <hr className="line"/>
        <p>During the summer of 18/19 I had the pleasure of working for <a href="https://fergus.com">Fergus Software</a> as an intern. Fergus Software provides a Software as a Service product for job management for trade companies. This software can be used through a desktop browser or from a mobile application. I obtained an internship through the Summer of Tech which is a non-profit programme to connect students and companies together within the IT industry. The programme works by Summer of Tech providing hundreds of jobs from multiple companies on their website. Students can then make a profile that includes their CV, skills, etc., then they can apply for up to 10 jobs. Summer of Tech also provides multiple events to further establish the relationship between students and companies. One of these events is the meet and greet where students go talk to companies in booths for a couple hours. My experience with Summer of Tech was eye opening and compared to the traditional way of job hunting it was much easier. It was nice that you knew where you stood with the likelihood of getting the job and since all the job offers came out on the same day it made it a more pleasant experience because you knew when you would get a job offer. There was also constant support during the job, every so often they would check up on you and see how things were going. Since there are only a couple hundred jobs but thousands of students looking for a job it is really competitive so I would recommend applying to jobs which play to your strengths. I think going to as many events as possible would increase the chances of getting an internship, personally think going to the meet and greet event gave me a huge leg up. I would recommend Summer of Tech to any student out there trying to get their first job within the tech industry.</p>

        <p>During the internship I worked on mostly bug fixing and automated test scripts. The test scripts were made with the framework Selenium. We created hundreds of tests for multiple parts of the website. At first I was mostly fixing bugs, these bug fixing jobs taught me alot about how their code base worked and how different parts of the code base worked together. I gained many frontend skills from CSS, HTML, jQuery and React from doing these bug fixes. Bug fixing also helped me gain backend skills by seeing how the different classes worked together, this was my first experience using PHP so I had to learn quickly. This was the first time for me working in a tech company and seeing an agile environment in full force was a great learning opportunity for me.
        </p>

        <p>Towards the end of the internship I was given the task to redo the frontend styling of the Cordova mobile application login screen, I mostly used HTML, CSS and Javascript to complete this task. I however needed to know what information to send to the backend. The login screen can be seen seen here:</p>
        <img src={ require('./images/fergusapp.jpg')}  style={{width: '20%', height: '20%'}} />

        <p>I gained a lot of knowledge and upskilled myself during this internship. The biggest takeaway was not only the technical skills I gained but also the knowledge of how a start up company providing a SaaS product works, from the how the funding worked to important the work culture is.  I learnt how to work in a team, take constructive feedback, ask for help when needed and to communicate effectively in a team. It was a great experience and I was very happy with the personal growth I gained from the internship.</p>
      </div>

    </div>



  );
}

export default SummerOfTech;
