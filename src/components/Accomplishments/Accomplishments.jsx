import React from 'react';
import './accomplishments.css'

// images import
import accomplishments_main from '../../assets/images/accomplishments/accomplishments_main.png'

// images import
import { IoIosSend } from "react-icons/io";
import { TbCup } from "react-icons/tb";
import { IoPersonSharp } from "react-icons/io5";

const Accomplishments = () => {
  return (
    <div className='accomplishments'>
        <div className='accomplishments_overlay'>

        </div>
        <div className='main_container'>
            <div className="main_row works_content">
                <div className="column-8 column-8-ml content_header">
                    <h1 className='accomplishments_heading'>My Accomplishments</h1>
                </div>
            </div>
            <div className='main_row'>
                <div className='column-4'>
                    <div className='accomplishments_content'>
                        <span><IoIosSend/></span>
                        <h3>1539</h3>
                        <p>Projects</p>
                    </div>
                </div>
                <div className='column-4'>
                    <div className='accomplishments_content'>
                        <span><TbCup/></span>
                        <h3>3653</h3>
                        <p>Cups of Coffee</p>
                    </div>
                </div>
                <div className='column-4'>
                    <div className='accomplishments_content'>
                        <span><IoPersonSharp/></span>
                        <h3>5987</h3>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accomplishments