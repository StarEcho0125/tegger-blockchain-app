import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header-rt mb-2">
			<div className="container p-3">
				<div className="row">
					<div className="col-12">
						<Link to="/" className="logo-rt"><h5>Logo</h5></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;