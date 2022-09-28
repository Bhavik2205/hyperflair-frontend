import React, {useEffect} from "react";

const Contacts = () =>{
	useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return(
        <>
        <div className="container">
			<div className="row row--grid pt-4">
            <div className="col-12 col-md-6 col-lg-5 col-xl-4">
					<div className="main__title main__title--sidebar">
						<h2>Get In Touch</h2>
						<p>If you have any suggestions or you would like to contact us please use this form or send us an email.</p>
					</div>
					<ul className="contacts__list">
						<li><a href="mailto:info@hyperflair.io"><i className="fa-solid fa-envelope"></i> info@hyperflair.io</a></li>
					</ul>
				</div>
				<div className="col-12 col-lg-7 col-xl-8">
					<form action="#" className="sign__form sign__form--contacts">
						<div className="row">
							<div className="col-12 col-md-6">
								<div className="sign__group">
									<input type="text" name="name" className="sign__input" placeholder="Name" />
								</div>
							</div>

							<div className="col-12 col-md-6">
								<div className="sign__group">
									<input type="text" name="email" className="sign__input" placeholder="Email" />
								</div>
							</div>

							<div className="col-12">
								<div className="sign__group">
									<input type="text" name="subject" className="sign__input" placeholder="Subject" />
								</div>
							</div>

							<div className="col-12">
								<div className="sign__group">
									<textarea name="text" className="sign__textarea" placeholder="Type your message"></textarea>
								</div>
							</div>

							<div className="col-12 col-xl-3">
								<button type="button" className="sign__btn">Send</button>
							</div>
						</div>
					</form>	
				</div>

				
			</div>
        </div>
        </>
    )
}
export default Contacts