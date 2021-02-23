import styles from '../styles/components/Profile.module.scss';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/54844480?s=460&u=81fe884f95dc1ed1f804f901f0c7d9a7eb060dad&v=4" alt="kitkoshino"/>
      <div>
        <strong>Cristiane Koshino</strong>

        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}
