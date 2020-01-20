import React from 'react'
import ProjectCards from './ProjectCards'
import image2 from '../images/stockmarketchart.c853bec5.jpg'




export default function Projects(props) {
   

const projects2=[
        {image: image2
  

},
{
    title: "Orange",
    price: "2.99",
    quantity: "4",
    image: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/tangerine.png"
  }    


]


    let  projectRow =projects2.map(project =>{

    return (
        <div>
            <ProjectCards
           image={project.image} />
        </div>
        
    )
})

return(
    <div>
  {projectRow}
  <img src={projects2.image} alt=""/>
    </div>
  
)

}
