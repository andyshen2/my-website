import React from 'react';
import NavBar from './navbar'

function SpeciesApp() {
  return (


    <div style={{backgroundColor: '#141414', minHeight: '100vh', paddingBottom: '20px'}}>
      <NavBar/>
      <div className= "article">
        <h1>Species Identification on a Mobile</h1>
        <p>During my last year of University I needed to complete an honours project, I decided I wanted to do something involving machine learning and application building. The project involved creating a mobile application which classifies images of animals and plants by species. At first I had to gather a dataset to be able to train a model. I created a dataset from the non-profit organization iNaturalist. It provides a web application that users can use to upload images, called observations; then other users, which can be experts or non- experts, try to identify those observations. In turn, this provides a large database of labeled images of species. The iNaturalist export tool gives users the ability to download a CSV file that contains a downloadable link for 	the image and many other types of information including geoinformation, a taxonomy of the species and time and date of the image taken. It can also be specified if the images are of research grade meaning that the majority of the identification for a particular image is unanimous [8]. However, only 200,000 images can be exported in one query meaning multiple exports needed to be made to collect the necessary data for the training classifier. The exports made from the website were specified to only contain images taken within New Zealand, this made the scope of the app more applicable to the New Zealand environment.
        </p>

        <p>Three pretrained models are used: MobileNet, InceptionV3 and EfficientNet. Pretrained models are an important part of being able to apply the concepts of fine-tuning and transfer learning. All models used this in project have been trained on the ImageNet dataset, which is a dataset that has been created for machine learning on images. ImageNet has 1000 classes on many different everyday objects. The dataset contains millions of images and one thousand classes. TensorFlow and Keras are open source software libraries, I used these libraries to retrain the pretrained models. Tensorflow also gives the ability to transfer trained neural network models onto mobile phones. I retrained the pre trained models and transferred them to my android application.
        </p>

        <p>In the end I developed a custom mobile application that can take new images from the phones camera or from a phones local file system. The new image is then ran through the retrained model to be classified by its species.
        </p>
      </div>

    </div>



  );
}

export default SpeciesApp;
