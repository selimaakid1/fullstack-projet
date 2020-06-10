import React from 'react'
import { Link } from 'react-router-dom'

const RestoInfo = () => {
    return (

        <div className='container'>
            <div className='row'>
                <h2 className='col-md-12 small-title'>-Welcome-</h2>
            </div>
            <div className='infoTitle'>
                <h1 className='resto-title'>Manducare</h1>
                <h4 className='resto-text'>L'art de vous acceuillir</h4>
            </div>
            <div className='inline '>
                <div className='Info'>
                    <div className='col-md-4'>
                        <div className='column'>
                            <div className='row'>
                                <div className='col-xs-12'>
                                    <img className='imgMod1' src='https://i.pinimg.com/564x/b3/3e/63/b33e63e229b518dd5473774b8ae7387d.jpg' />
                                </div>
                            </div>
                            <div className='row columntwo '>
                                {/* <div className='col-sm-6'>
                                <img className='imgcoltwo' src='https://i.pinimg.com/564x/f9/5e/96/f95e968d0c0a22cb78678c97b345a7fd.jpg' />
                            </div> */}
                                {/* <div className='col-sm-6 '>
                                <img className='imgcoltwo' src='https://i.pinimg.com/564x/2e/bf/2d/2ebf2dc8b9f91c3ebb34c1e638671b85.jpg' />
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <h4 className='resto-text-1'>Chez Manducare, il n'y a d'autres ambition que celle de proposer une cuisine sincère, ancrée dans les saisons, authentique mais moderne joyeux et genereuse.
                    Arrosée de bons vins nous la voulons au choix degustée, avalée, dévorée, engloutie dans une ambiance decontractée, simple et bon enfant.
                    </h4>

                </div>
                <div>
                    <button className='menu-btn'><Link to='/menu'>Découvrir la Carte</Link> </button>
                </div>

            </div>
        </div>
      
    )
}

export default RestoInfo