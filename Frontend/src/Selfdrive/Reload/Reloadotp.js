import React from 'react'

function Reloadotp() {
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
                  <div className="wait_pls">
                    <h4>Please Wait Some Time For Update Your Document</h4>
                    <span><i className="bx bx-rotate-right" /></span>
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
  </div>
  )
}

export default Reloadotp