import React from 'react'
import styles from './Fidelizacao.module.css'
const SubscriptionPlan = ({ title, price, description }) => {
    
    const pagarCard = () =>{}
    return (
      <div className={styles.subscriptionplan}>
        <h2>{title}</h2>
        <p className="price">R${price} / mês</p>
        <p>{description}</p>
        <button onClick={pagarCard}></button>
      </div>
    );
  };

export default SubscriptionPlan