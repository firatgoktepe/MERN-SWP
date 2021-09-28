import React from 'react'
import './About.css'
import pic from '../img/pic.jpeg';


const About = () => {
    return (
        <div className="container">
            <h1 className="title">About me</h1>
            <div className="content">
                <img src={pic} alt="profile_picture" />
                <ul>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Provident omnis velit at dolore, quidem vitae, asperiores esse iure, aperiam tempora aspernatur dignissimos quos neque.</li>
                    <li>Minus error quas doloribus quam modi.
                Labore facilis impedit dicta ut iste consequatur sit nostrum.</li>
                    <li>maiores nemo perferendis deleniti cum totam voluptatibus, asperiores repellendus est? Quisquam beatae dolorem eius obcaecati.</li>
                    <li>Quisquam beatae dolorem eius obcaecati reprehenderit et pariatur veritatis quo.
                Amet.</li>
                </ul>
            </div>
        </div> 
    )
}

export default About