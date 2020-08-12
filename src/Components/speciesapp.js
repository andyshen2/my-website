import React, { Component } from "react";
// import NavBar from './Components/navbar'
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import NavBar from "./navbar";
import "./NavBar.css";
import "./App.css";
import "./Species.css";
import "./Blog.css";
import "./mobile.css";

class SpeciesApp extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let width = window.innerWidth;
    if (width < 800) {
      return (
        <div className="mobile-blog">
          <Link className="mobile-header" to="/">
            HOME
          </Link>
          <h1>What The Duck</h1>
          <hr />
          <br />
          <img className="mobile-image" src={require("./images/duck.png")} />
          <p>
            For my honours project, I wanted to centre it around machine
            learning and application building. This lead me to build a mobile
            application which classifies images of animals and plants by
            species.
          </p>
          <p>
            To create this applicaction, I required a dataset to be able to
            train a model in which I used data from a non-profit organization,
            iNaturalist. It provides a web application that users can use to
            upload images, called observations; then other users, which can be
            experts or non-experts, try to identify those observations. Inturn,
            this provides a large database of labelled images of species. The
            iNaturalist export tool gives users the ability to download a CSV
            file that contains a downloadable link for the image and many other
            types of information including geo information, ataxonomy of the
            species and time and date of the image taken. It can also be
            specified if the images are of research grade meaning that the
            majority of the identification for a particular image is unanimous.
            However, only 200,000 images can be exported in one query meaning
            multiple exports needed to be made to collect the necessary data for
            the training classifier. The exports made from the website we
            respecified to only contain images taken within NewZealand, this
            made the scope of the app more applicable to the New Zealand
            environment.
          </p>
          <p>
            Three pretrained models are used: MobileNet, InceptionV3 and
            EfficientNet. Pretrained models are an important part of being able
            to apply the concepts of fine-tuning and transfer learning. All
            models used this in project have been trained on theImageNet
            dataset, which is a dataset that has been created for machine
            learning on images. ImageNet has 1000 classes on many different
            everyday objects. The dataset contains millions of images and one
            thousand classes. TensorFlow and Keras are open source software
            libraries, I used these libraries to retrain the pretrained models.
            Tensorflow also gives the ability to transfer trained neural network
            models onto mobile phones. I retrained the pre-trained models and
            transferred them to my android application.
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            <li className="nav">
              <Link id="special" to="/">
                HOME
              </Link>
            </li>
          </ul>
          <div className="toplevel">
            {/* <img className="plant" src={require('./images/original.jpg')} /> */}
            <div className="blog">
              <div className="blogcard">
                <img className="duck" src={require("./images/duck.png")} />
                <h1>What The Duck</h1>
                <hr />
                <br />
                <p>
                  For my honours project, I wanted to centre it around machine
                  learning and application building. This lead me to build a
                  mobile application which classifies images of animals and
                  plants by species.
                </p>
                <p>
                  To create this applicaction, I required a dataset to be able
                  to train a model in which I used data from a non-profit
                  organization, iNaturalist. It provides a web application that
                  users can use to upload images, called observations; then
                  other users, which can be experts or non-experts, try to
                  identify those observations. Inturn, this provides a large
                  database of labelled images of species. The iNaturalist export
                  tool gives users the ability to download a CSV file that
                  contains a downloadable link for the image and many other
                  types of information including geo information, ataxonomy of
                  the species and time and date of the image taken. It can also
                  be specified if the images are of research grade meaning that
                  the majority of the identification for a particular image is
                  unanimous. However, only 200,000 images can be exported in one
                  query meaning multiple exports needed to be made to collect
                  the necessary data for the training classifier. The exports
                  made from the website we respecified to only contain images
                  taken within NewZealand, this made the scope of the app more
                  applicable to the New Zealand environment.
                </p>
                <p>
                  Three pretrained models are used: MobileNet, InceptionV3 and
                  EfficientNet. Pretrained models are an important part of being
                  able to apply the concepts of fine-tuning and transfer
                  learning. All models used this in project have been trained on
                  theImageNet dataset, which is a dataset that has been created
                  for machine learning on images. ImageNet has 1000 classes on
                  many different everyday objects. The dataset contains millions
                  of images and one thousand classes. TensorFlow and Keras are
                  open source software libraries, I used these libraries to
                  retrain the pretrained models. Tensorflow also gives the
                  ability to transfer trained neural network models onto mobile
                  phones. I retrained the pre-trained models and transferred
                  them to my android application.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default SpeciesApp;
