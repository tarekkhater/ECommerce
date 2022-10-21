import styles from '../../styles/Dashboard/HeaderDashboard.module.css'

export default function Header() {
  return (
    <div>
      <div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Hello, <span>Mr.</span>
					</h2>
					<p>welcome to the board.</p>
				</div>
				<div className={styles.profile}>
					
				</div>
			</div>
		</div>
    </div>
  )
}
