import React,{ Component } from 'react';
import {Grid ,Cell} from 'react-mdl';
import Education from './education';
import Experince from './experince';
import Skills from './skills';


class Resume extends Component{

    render()
    {
        return(
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'centre'}}>
                        <img
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                        alt="avatar"
                        style={{height: '200px'}}
                        /> 
                    </div>

                    <h2 style={{paddingTop:'2em'}}>Abhinav Bobade</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop:'3px solid #833fb2' ,width:'50%'}}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown printer
                         took a galley of type and scrambled it to 
                        make a type specimen book.
                         It has survived not only five centuries, but also the leap into
                          electronic typesetting, remaining essentially unchanged.</p>

                          <hr style={{borderTop:'3px solid #833fb2' ,width:'50%'}}/>
                          <h5>Address</h5>
                          <p>1 Hacker way Menlo park,94025</p>
                          <h5>Phone</h5>
                          <p>(+91)7845123659</p>
                          <h5>Email</h5>
                          <p>Abhinav@gmail.com</p>
                          <h5>Website</h5>
                          <p>www.hackerrank.com</p>
                          <hr style={{borderTop:'3px solid #833fb2' ,width:'50%'}}/>
                     
                </Cell>
                <Cell className="resume-right-col" col={8}>
                   <h2>Education</h2>


                    <Education
                    startYear={2012} 
                    endYear={2015} 
                    schoolName="pune Unversity"  
                    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged."
                    />

                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Experince</h2>
                    <Experince

                     startYear={2019} 
                    endYear="current working" 
                    jobName="   FirstJob"  
                    jobdescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic 
                    typesetting, remaining essentially unchanged."
                    
                    
                    />
                      <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Skills  </h2>
                    <Skills
                    skills="React"
                    progress={80}
                    />


                </Cell>
            </Grid>
        );
    }
}
export default Resume;