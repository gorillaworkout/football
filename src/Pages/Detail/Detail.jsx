import React, { Component ,useState,useEffect} from 'react';
import {BiArrowBack} from 'react-icons/bi'
import Axios from 'axios'
import {useParams} from 'react-router-dom'
import './Detail.css'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom'
import {AiOutlineBars,AiOutlineSearch} from 'react-icons/ai'
import {FaGripLines,} from 'react-icons/fa'
import Juve from './../../Assets/juve.png'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {BsOctagonFill} from 'react-icons/bs'
export default function Detail(){

    let {id} = useParams()
//    console.log(pokemon)

   
   const [isLoading,setIsLoading]=useState(true)
   const [activeTab,setActiveTab]=useState('1')
   const [dataMatch,setDataMatch]=useState([])
   const [linkGambar,setLinkGambar]=useState(null)
   const [linkGambar2,setLinkGambar2]=useState(null)

   const toggle = tab => {
       console.log('tab jalan')
    if(activeTab !== tab) setActiveTab(tab);
  }

  const findMatch=()=>{
      console.log(id)
      const options = {
        headers: {'X-API-KEY': '24578cdb-fc01-4794-9bb0-865dd8ac405c'}
      };
      Axios.get(`https://client.elevenscore.com/api/football/match/matchdetail/${id}`,options)
      .then((res)=>{
        console.log(res.data)
        console.log(res.data.away_team.logo)
        setDataMatch(res.data)
        setLinkGambar(res.data.away_team.logo)
        setLinkGambar2(res.data.home_team.logo)
        console.log(linkGambar)
        setIsLoading(false)
      }).catch((err)=>{
          console.log(err)
      })
  }


   
  
   useEffect(()=>{
        findMatch()

        
   },[])

   if(isLoading){
       return (
           <h1>LOADING</h1>
       )
   }

   console.log(dataMatch)
    return (
        <>
            <div className="box-home">
                <div className="header">
                    <FaGripLines className="icon-header"/>
                        <p>SCOREBOARD</p>
                    <AiOutlineSearch className="icon-header"/>
                </div>

                <div className="box-render-club">
                    <div className="box-club">
                        <div className="box-club-1">
                            <img src={dataMatch.home_team.logo} alt="" className="img-club"/>
                            <p>{dataMatch.home_team.name_en}</p>
                        </div>
                        <div className="box-club-2">
                            <div className="score">
                                <p>{dataMatch.home_team.score}</p>
                                <p>-</p>
                                <p>{dataMatch.away_team.score}</p>
                            </div>
                            <div className="detail-menit">
                                
                            </div>
                            <div className="score-2">
                                <p>90'</p>
                            </div>

                        </div>
                        <div className="box-club-1">
                            <img src={dataMatch.away_team.logo} alt="" className="img-club"/>
                            <p>{dataMatch.away_team.name_en}</p>
                        </div>
                        
                    </div>
                    {/* BATAS 1 box */}
                    <ProgressBar variant="danger"  now={90}  style={{marginBottom:'20px',marginTop:'20px'}}/>
                    <div style={{display:'flex',flexDirection:'column'}}>
                    <Nav tabs>
                                <NavItem className="cursor-nav">

                                    <NavLink
                                        className={classnames({ active: activeTab === '1' })}
                                        onClick={() => toggle('1') }
                                        
                                        >
                                        Game Detail
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: activeTab === '2' })}
                                        onClick={() => toggle('2') }>
                                        Highlight
                                    </NavLink>
                                </NavItem>
                                <NavItem className="cursor-nav">
                                    <NavLink
                                        className={classnames({ active: activeTab === '3' })}
                                        onClick={() => toggle('3') }>
                                        Chat
                                    </NavLink>
                                </NavItem>
                            
                            </Nav>

                            <TabContent activeTab={activeTab}>   
                                <TabPane  tabId="1" className="tab-row-1 tabpanel">
                                 <div className="tab1">
                                     <div className="info-tab-1">
                                        <p className="name-pl"></p>
                                        <BsOctagonFill style={{color:'orange'}}/>
                                        <p className="name-pl">33' Ronaldo</p>
                                     </div>
                                 </div>
                                 <div className="tab1">
                                     <div className="info-tab-1">
                                        <p className="name-pl"></p>
                                        <BsOctagonFill style={{color:'orange'}}/>
                                        <p className="name-pl">33' Ronaldo</p>
                                     </div>
                                 </div>
                                 <div className="tab1">
                                     <div className="info-tab-1">
                                        <p className="name-pl">33' Ronaldo</p>
                                        <BsOctagonFill style={{color:'orange'}}/>
                                        <p className="name-pl"></p>
                                     </div>
                                 </div>
                                 <div className="tab1">
                                     <div className="info-tab-1">
                                        <p className="name-pl"></p>
                                        <BsOctagonFill style={{color:'orange'}} />
                                        <p className="name-pl">33' Ronaldo</p>
                                     </div>
                                 </div>
                                 <div className="tab1">
                                     <div className="info-tab-1">
                                        <p className="name-pl">33' Ronaldo</p>
                                        <BsOctagonFill style={{color:'orange'}}/>
                                        <p className="name-pl"></p>
                                     </div>
                                 </div>

                                </TabPane>
                                <TabPane tabId="2" className="tab-row-2 tabpanel">
                                {/* {renderTab2()} */}
                                    <div className="abilities-2">
                                        <div className="abl-left-2">
                                            <p>Type Defenses</p>
                                        </div>
                                        <div className="abl-right-2">
                                            <p>the Effectiveness of each type on </p>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane  tabId="3" className="tab-row-1 tabpanel">
                                    <div>
                                        <h1>TAB 3</h1>
                                    </div>
                                </TabPane>
                                <TabPane  tabId="4" className="tab-row-1 tabpanel">
                                    <div>
                                        <h1>TAB 4</h1>
                                    </div>
                                </TabPane>
                            </TabContent>

                    </div>



                </div>

            </div>
        </>
    )
}