import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className='row'>
                <div class="col-sm-12 col-md-6">
                    <h6>A propos</h6>
                    <p>
                        Pour une expérience culinaire vraiment mémorable, réservez à l'avance une table dès que vous le pouvez. Venez déguster notre gastronomie et nos vins remarquables.</p>
                </div>
                <hr></hr>

                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">  2020 &copy; </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer
