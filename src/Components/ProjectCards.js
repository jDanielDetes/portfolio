import React from 'react'
import { Button, Icon, Image, Item, Label } from 'semantic-ui-react'



export default function ProjectCards(props) {
    const style={
        maxWidth: 1000,
        height: 344,
        border: 'outset 10px #3f51b5',
        backgroundColor: '#fffff2',
        fontSize: '10px',
   
    }

    return (
        <div>
            <Item.Group divided>
    <Item style={style}>
      <Item.Image src={props.image} />
    
      <Item.Content>
        <Item.Header as='a'>12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className='cinema'>{props.price}</span>
        </Item.Meta>
        <Item.Description >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, illo! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, illo!</Item.Description>
        <Item.Extra>
        <Button primary floated='right'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
          <Label >IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
  
        </div>
    )
}
