import styles from '../styles/components/Login.module.scss';

export function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInfo}>
        <img src="icons/logo.svg" alt="logo" />
        <div className={styles.secondContainer}>
          <h3>Bem-vindo</h3>
          <div className={styles.loginText}>
            <img src="icons/github.svg" alt="" />
            <span>Faça login com seu Github para começar</span>
          </div>
          <div className={styles.loginInput}>
            <input type="text" placeholder="Digite seu username" />
            <button>
              <img src="icons/arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
