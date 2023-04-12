import {useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
  const navigate=useNavigate()

  function createPost(project) {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate('/projects', { message: 'Serviço solicitado com sucesso!' })
      })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>    O que você precisa?</h1>
      <p>Após solicitar o pedido, pode-se adicionar os detalhes de execução</p>
      <ProjectForm handleSubmit={createPost} btnText="Enviar" />
    </div>
  )
}

export default NewProject
