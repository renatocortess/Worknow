import styles from './Crud.module.css';


function Crud({ type, text, name, handleOnChange, value,password,email }) {
    return (
      <div className={styles.form_control}>
        <form>
        <label htmlFor={name}>{text}</label>
        <input
          type={email}
          name={name}
          placeholder="digite o seu email"
          onChange={handleOnChange}
          value={value}
        />
        <label htmlFor={password}>{text}</label>
        <input
          type={type}
          password={password}
          placeholder="digite sua senha"
          onChange={handleOnChange}
          value={value}
        />
        <input type="submit" value="Entrar"></input>
        </form>
      </div>
    );
  }
  
  export default Crud;