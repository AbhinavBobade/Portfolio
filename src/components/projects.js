import React,{ Component } from "react";
import { Tabs , Tab ,Grid ,Cell ,Card , CardTitle ,CardText,CardActions,Button,CardMenu,IconButton} from "react-mdl";
 


class Projects extends Component{
constructor(props){

    super(props);
    this.state = { activeTab:0 }; 
}

toggleCategories()
{

    if(this.state.activeTab === 0){

        return(
            <div className="projects-grid">
            <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px',
                 background: 'url(https://miro.medium.com/max/3600/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg) center / cover'}}>React projects #1</CardTitle>
                     <CardText>
                     A framework for building native apps with React. 
                     Contribute to facebook/react-native development by creating an account on GitHub.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

            </Card>
            {/* 222222222222222222222222222*/}
            <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px',
                 background: 'url(https://miro.medium.com/max/3600/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg) center / cover'}}>React projects #2</CardTitle>
                     <CardText>
                     A framework for building native apps with React. 
                     Contribute to facebook/react-native development by creating an account on GitHub.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

            </Card>
                  {/* 333333333333333333333333333333333333*/}
                  <Card shadow={5} style={{width: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px',
                
                 background: 'url(https://miro.medium.com/max/3600/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg) center / cover'}}>React projects #3</CardTitle>
                     <CardText>
                     A framework for building native apps with React. 
                     Contribute to facebook/react-native development by creating an account on GitHub.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

            </Card>
            </div>
        );
     } else   if(this.state.activeTab === 1){

        return(
             <div>
                   <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px',
                 background: 'url(https://miro.medium.com/max/3600/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg) center / cover'}}>Angular projects #2</CardTitle>
                     <CardText>
                     A framework for building native apps with React. 
                     Contribute to facebook/react-native development by creating an account on GitHub.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

            </Card>
            </div>
        );
     }else   if(this.state.activeTab === 2){

        return(
             <div>
                  <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px',
                 background: 'url(https://miro.medium.com/max/3600/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg) center / cover'}}>Vuejs projects #3</CardTitle>
                     <CardText>
                     A framework for building native apps with React. 
                     Contribute to facebook/react-native development by creating an account on GitHub.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

            </Card>
            </div>
        );
     }
     else   if(this.state.activeTab === 3){

        return(
             <div>
                  <Card shadow={5} style={{width: '450px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px',
                 background: 'url(https://miro.medium.com/max/3600/1*h8d-4wYLN9wwiEsLAA_5yg.jpeg) center / cover'}}>MangoDB projects #4</CardTitle>
                     <CardText>
                     A framework for building native apps with React. 
                     Contribute to facebook/react-native development by creating an account on GitHub.
    </CardText>
    <CardActions border>
        <Button colored>Get Started</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>

            </Card>
            </div>
        );
     }
       
       
}
 render()
    {
        return(
            <div className ="category-tabs">

                <Tabs activeTab={this.state.activeTab} onChange={(tabId => this.setState({activeTab :tabId}))} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>vuejs</Tab>
                    <Tab>MangoDB</Tab>
                </Tabs>
                
                    <Grid >
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>

                    </Grid>
                   

             


            </div>
        );
    }
}
export default Projects;