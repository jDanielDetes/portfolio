import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'
import './ProjectCards.css'


export default function ProjectCards(props) {



    const  snesStyle={
    height:57
    }

   
    
    const container={
        marginBottom:30
    }



    
    return (
        <div style={container} className="mainContainer">
            <Item.Group divided>
              
    <Item id="cardBorder">
      
      <Item.Image src={props.image}  />
    
      <Item.Content>
         <p id="titleStyle">{props.title}</p>
        <div className="Badges" id="badgeStyle">
        <    div class="nes-badge">
      <span class="is-primary">{props.skill1}</span>
    </div>
    
    <div class="nes-badge">
      <span className="is-success">{props.skill2}</span>
    </div>
    <div class="nes-badge">
      <span class="is-warning">{props.skill3}</span>
    </div>
    <div class="nes-badge">
      <span class="is-error">{props.skill4}</span>
    </div>
        </div>
       
        <Item.Meta>
          <span className='cinema'>{props.price}</span>
        </Item.Meta>
        <Item.Description >{props.info}</Item.Description>
        <Item.Extra>
        
          <div id="demos">
              <a href={props.live}>
              <button type="button" class="nes-btn is-success"  style={snesStyle} >  <i class="snes-logo"></i>Live Demo</button>
              </a>
    
              <a href={props.code}>
              <button type="button" class="nes-btn is-primary">  <i class="nes-icon github "></i>Link to Code</button>
              </a>
          </div>
        </Item.Extra>
       
      </Item.Content>
      
    </Item>
  </Item.Group>
  
      <p>sample text</p>
        </div>
    )
}
