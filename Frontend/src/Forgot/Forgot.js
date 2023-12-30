import React from 'react'

function Forgot() {
  return (
    <div> 
    <main id="main">
  <section id="login" className="login_sec">
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="col-lg-8 mx-auto">
                <span className="form_heading_title">
                  <h4>Forgot Password</h4>
                </span>
                <div className="form_all">
                  <form className>
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <div className="input-group">
                          <input type="text" className="form-control" id="fpw" placeholder="Email ID / Mobile No." aria-describedby required />
                          <span className="icon_form_add"><i className="icofont-ui-user" /></span>
                        </div>
                        <span className="otp_forgot"><h6 className="pt-3">Please enter your <a href="#">OTP </a> </h6></span>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="input-group otp_forgot_pw">
                          <input type="text" className="form-control" id="fpw" placeholder={0} aria-describedby required />
                          <input type="text" className="form-control" id="fpw" placeholder aria-describedby required />
                          <input type="text" className="form-control" id="fpw" placeholder aria-describedby required />
                          <input type="text" className="form-control" id="fpw" placeholder aria-describedby required />
                          <input type="text" className="form-control" id="fpw" placeholder aria-describedby required />
                          <input type="text" className="form-control" id="fpw" placeholder aria-describedby required />
                        </div>
                        <span className="resend"><h6><a href="#">Please resend OTP</a></h6></span>
                      </div>
                      <div className="col-lg-12 mt-3">
                        <span className="d-flex align-items-center justify-content-center">
                          <button className="btn btn-primary form_btn" type="submit">Submit</button>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-flex bg-image" />
      </div>
    </div>
  </section>
</main>
{/* End #main */}

</div>
  )
}

export default Forgot