import styles from './Company.module.css';
import { useState } from "react"; 
import emilio from "./emilio.jpg"
import juan from "./juan.jpg"
import servicesimg from './servicesimg.png'
function Company() {

  const [rating, setRating] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  function handleSendRating() {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Esconde a mensagem após 3 segundos
    toggleDisableTextarea()
  }
  function toggleDisableTextarea() {
    setIsDisabled(!isDisabled);
  }

  return (
    <div className={styles.global}>
    <section className={styles.company}>
      <h1>Serviços prestados</h1>
      <p>Confira os serviços já realizados</p>
      <img src={servicesimg}/>
      
    </section>
    <div className={styles.card}>
    <img onClick={toggleDisableTextarea} src={juan}/>
    <h2>Juan Poze <span>4,5/5</span></h2>
    <p>Marceneiro</p>
    <p>Instalação do Armário da cozinha</p>
    <h3>Detalhes do serviço:</h3>
    <p>Total do orçamento:$200</p>
    <la>
      <li>Parafusos e bucha:<span>$20</span></li>
      <li>Mão de obra:<span>$180</span></li>
    </la>
    <textarea  disabled={isDisabled} name="postContent" placeholder='deixe sua opinião sobre Juan Poze' />
    <select value={rating} onChange={handleRatingChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        
      </select>
     
      
      <button onClick={handleSendRating}>Enviar Avaliação</button>
      {showMessage && <p>Avaliação enviada com sucesso!</p>}
 </div>
 <div className={styles.card}>
 <img src={emilio}/>
    <h2>Emilio Ret <span>2,1/5</span></h2>
    <p>
      Serviços gerais
    </p>
    <p>Limpeza geral, apartamento 60mts</p>
    <h3>Detalhes do serviço:</h3>
    <p>Total do orçamento:$300</p>
    <la>
      <li>materiais :<span>$60</span></li>
      <li>Mão de obra:<span>$240</span></li>
    </la>
    <select value={rating} onChange={handleRatingChange}>
      
        <option value="3">3</option>
      
      </select>
      <h4>Avalição já finalizada</h4>
 </div>
 
 
 </div>
  );
}

export default Company;
