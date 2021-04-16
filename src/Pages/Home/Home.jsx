import React, { Component ,useEffect,useState} from 'react';
import './Home.css'
// import '../../style/Global.css'
import Logo from './../../Assets/newbggw.png'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import dataDB from './../../Json/listData.json'
import { TiDelete } from "react-icons/ti";
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { API_URL } from '../../Helpers/apiUrl';
import { connect } from "react-redux";
import {useDispatch} from 'react-redux'
import {LogoutFunc} from './../../redux/Actions'
import {AiOutlineBars,AiOutlineSearch} from 'react-icons/ai'
import {FaGripLines,} from 'react-icons/fa'
import {GrEdit} from 'react-icons/gr'
import Axios from 'axios';
import {findAllPokemon} from './../../redux/Actions'
import { render } from 'react-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
import moment from 'moment';

import Juve from './../../Assets/juve.png'

function Home(props){
    var moment = require('moment'); // require

    const [yesterday,setYesterday]=useState('')

    const [dataMatch,setDataMatch]=useState([])


    const findYesterday=()=>{
        const today = new Date()
        const yesterday = new Date(today)
        yesterday.setDate(yesterday.getDate() - 1 )
        yesterday.toDateString()
        console.log(yesterday)
        var dateString=moment(today).format('YYYYMMDD')
        console.log(dateString)
        const string2 = parseInt(dateString)
        setYesterday(parseInt(string2))
        console.log(parseInt(dateString))
        console.log(typeof string2 )
        findDataMatch()
    }
    const findDataMatch=()=>{
        let dataArr=[]
        const options = {
            headers: {'X-API-KEY': '24578cdb-fc01-4794-9bb0-865dd8ac405c'}
          };
        console.log(yesterday,'line51')
        Axios.get(`https://client.elevenscore.com/api/football/match/matchfixtures?date=20210417&utc=1`,options)
        .then((res)=>{
            let data=res.data.result
            console.log(res.data)
            data.forEach((val,index)=>{
                if(index <4){
                    dataArr.push(val)
                }
            })
            console.log(dataArr)
            setDataMatch(dataArr)
        }).catch((err)=>{
            console.log(err)
        })
    }



    useEffect(()=>{
        findYesterday()

        
        console.log(props.dataPokemon,' ini redux 103')
    },[])

    const renderItem=()=>{
        let renderItem = dataMatch

        return renderItem.map((val,index)=>{
            return (
                    <Link to={'/detail/'+val.gameId} style={{textDecoration:'none'}}>
                <div className="box-club">
                        <div className="box-club-1">
                            <img src={val.awayTeamEvent.logoUrl} alt="" className="img-club"/>
                            <p>{val.eventShortName}</p>
                        </div>
                        <div className="box-club-2">
                            <div className="score">
                                <p>{val.awayTeamEvent.score}</p>
                                <p>-</p>
                                <p>{val.homeTeamEvent.score}</p>
                            </div>
                            <div className="detail-menit">
                            <ProgressBar variant="danger"  now={45} />
                            </div>
                            <div className="score-2">
                                <p>53'</p>
                            </div>

                        </div>
                        <div className="box-club-1">
                            <img src={val.homeTeamEvent.logoUrl} alt="" className="img-club"/>
                            <p>{val.eventShortName}</p>
                        </div>
                        
                </div>
                    </Link>
            )
        })
    }

    // const renderItemPokemon=()=>{
    //     let renderPokemon = props.dataPokemon
    //     console.log(renderPokemon)
    //     return renderPokemon.map((val,index)=>{
            
    //         return (
    //         <Link to={`/detail/${val.name}/${index+1}`} style={{textDecoration:'none',width:'50%',paddingRight:'5px'}} >
    //             <div className="box-item" key={index+1}>
    //                     <div className="pokedex-name">
    //                         <p className="pokename">{val.name}</p>
    //                         {
    //                             renderPokemon[index].abilities.map((val,id)=>{
    //                                     return (
    //                                         <div className="skill-mon">
    //                                             <p>{val.ability.name}</p>
    //                                         </div>
    //                                     )
    //                             })
    //                         }
    //                     </div>
    //                     <div className="pokedex-name2">
    //                         <img src={val.sprites.other.dream_world.front_default} className="img-pokemon"></img>
    //                     </div>
    //                 </div>
    //          </Link>
    //         )
    //     })
    // }


   
  
    return (
        
        <>
            <div className="box-home">
                <div className="header">
                    <FaGripLines className="icon-header"/>
                        <p>SCOREBOARD</p>
                    <AiOutlineSearch className="icon-header"/>
                </div>

                <div className="box-render-club">
                    {renderItem()}

                </div>

            </div>

        </>
    )
}
const Mapstatetoprops=({Auth})=>{
    return {
        ...Auth
    }
}

export default (connect(Mapstatetoprops,{findAllPokemon})(Home))