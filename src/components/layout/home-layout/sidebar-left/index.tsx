import styles from './sidebar-left.module.scss';
const SidebarLeft: React.FC = () => {
	return (
		<aside className={`${styles.sidebarLeft} d-sm-none d-md-block`}>
			<div className="mb-4">
				<h3>Documents</h3>
				<ul>
					<li>
						My Files
						<ul>
							<li>File 1.pdf</li>
							<li>File 2.pdf</li>
						</ul>
					</li>
					<li>Shared Files</li>
					<li>Favorites</li>
				</ul>
				{/* <input type="file" /> */}
			</div>
			<div>
				<h3>Tools</h3>
				<ul>
					<li>Email - Subject lines</li>
					<li>Sales prompts</li>
					<li>Code review</li>
				</ul>
			</div>
			<div>
				<h3>Knowledge</h3>
				<ul>
					<li>ServiceNow</li>
					<li>AskHR</li>
					<li>Brightspeed.com</li>
					<li>Database</li>
				</ul>
			</div>
		</aside>
	);
};

export default SidebarLeft;
