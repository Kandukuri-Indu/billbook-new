import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header'
import Sidebar from '../layouts/Sidebar'

const BlankPage = () => {

	const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	}
	return (
		<div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

			<Header onMenuClick={(value) => toggleMobileMenu()} />
			<Sidebar />


			<div className="page-wrapper">
				<div className="content container-fluid">

					<div className="page-header">
						<div className="content-page-header">
							<h5>Blank Page</h5>
						</div>
					</div>

					<div className="row">
						<div className="col-sm-12">
							Contents here
						</div>
					</div>

				</div>
			</div>
		</div>



	);

}
export default BlankPage;