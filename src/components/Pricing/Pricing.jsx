import React from 'react';
import './pricing.css';

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='main_container'>
            <div className="main_row works_content">
                <div className="column-8 column-8-ml content_header">
                    <h1>Pricing</h1>
                    <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name</p>
                </div>
            </div>
            <div className='main_row'>
                <div className="column-3">
                    <div className='pricing_box'>
                        <h3>Starter</h3>
                        <div className='pricing_box_prices'>
                            <h1><sup>$</sup>9</h1>
                            <span>per month</span>
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <button className='pricing_box_button'>Select Plan</button>
                    </div>
                </div>
                <div className="column-3">
                    <div className='pricing_box'>
                        <h3>Basic</h3>
                        <div className='pricing_box_prices'>
                            <h1><sup>$</sup>27</h1>
                            <span>per month</span>
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <button className='pricing_box_button'>Select Plan</button>
                    </div>
                </div>
                <div className="column-3">
                    <div className='pricing_box'>
                        <h3>Pro</h3>
                        <div className='pricing_box_prices'>
                            <h1><sup>$</sup>74</h1>
                            <span>per month</span>
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <button className='pricing_box_button'>Select Plan</button>
                    </div>
                </div>
                <div className="column-3">
                    <div className='pricing_box'>
                        <h3>Unlimited</h3>
                        <div className='pricing_box_prices'>
                            <h1><sup>$</sup>140</h1>
                            <span>per month</span>
                        </div>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <button className='pricing_box_button'>Select Plan</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing