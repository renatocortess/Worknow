import React from 'react'
import SubscriptionPlan from './SubscriptionPlan'
import styles from './Fidelizacao.module.css'
const Fidelizacao = () => {
  return (
    <div className={styles.fidelizacao}><h1>Planos de Assinatura</h1>
    <div className={styles.subscriptionplans}>
      <SubscriptionPlan
        title="Plano Básico"
        price={9.99}
        description="Acesso a serviços de limpeza básica e manutenção doméstica com 10% de desconto."
      />
      <SubscriptionPlan
        title="Plano Premium"
        price={19.99}
        description="Acesso a serviços de limpeza completa, reparos e instalações com 20% de desconto."
      />
      <SubscriptionPlan
        title="Plano VIP"
        price={29.99}
        description="Acesso a serviços de limpeza, reparos, instalações e jardinagem com 30% de desconto."
      />
    </div></div>
  )
}

export default Fidelizacao