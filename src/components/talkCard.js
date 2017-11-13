import React, { Component } from 'react'

// Material UI - Card
import {Card, CardTitle, CardText} from 'material-ui/Card'

// Material UI - Chip
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import {blue300, indigo900} from 'material-ui/styles/colors'


export class TalkCard extends Component {
    componentWillMount() {
        this.talk = this.props.talk
    }

    render() {
        return (
            <Card>
                <CardTitle title={ this.talk.title } subtitle={ this.talk.author }/>
                <div align="center">
                    <RoomComponent 
                        room={this.talk.room}
                    />
                </div>
                <CardText>
                </CardText>
            </Card>
        )
    }
    
}

export class RoomComponent extends Component {
    render() {
        return (
            <Chip
            backgroundColor={blue300}
            >
                <Avatar color={blue300} backgroundColor={indigo900}>
                    ?
                </Avatar>
                { this.props.room  }
            </Chip>
        )
    }
}