import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'



export default function ProjectCards(props) {
    const style={
        maxWidth: 1000,
        height: 344,
        border: 'outset 10px #3f51b5',
        backgroundColor: '#fffff2',
      
   
    }
    const badgeStyle={
        width:670,
        display:'flex',
        justifyContent:'space-between',
        marginTop:10

    }

    const  snesStyle={
    height:57
    }

    const demoStyle={
        marginTop:70,
        marginLeft: 240
    }
    const titleStyle={
        marginTop:5,
        fontSize: 20
    }
    const container={
        marginBottom:30
    }

    return (
        <div style={container}>
            <Item.Group divided>
    <Item style={style}>
      <Item.Image src={props.image} />
    
      <Item.Content>
         <p style={titleStyle}>PlaceholderTitle</p>
        <div className="Badges" style={badgeStyle}>
        <    div class="nes-badge">
      <span class="is-primary">React</span>
    </div>
    
    <div class="nes-badge">
      <span class="is-success">javaScript</span>
    </div>
    <div class="nes-badge">
      <span class="is-warning">Semantic-ui</span>
    </div>
    <div class="nes-badge">
      <span class="is-error">CSS3</span>
    </div>
        </div>
       
        <Item.Meta>
          <span className='cinema'>{props.price}</span>
        </Item.Meta>
        <Item.Description >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, illo!</Item.Description>
        <Item.Extra>
        
          <div style={demoStyle}>
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
  
  
        </div>
    )
}
