import { useEffect, useState } from "react"
import Button from "./components/ui/Button"
import Form from "./components/ui/Form"
import Input from "./components/ui/Input"
import Title from "./components/ui/Title"
import style from './style.module.css'

export default function App() {

  return (
    <div className={style.main}>

      <div className={style.content}>

        <Title>To-Do List</Title>

        <Form >

          <div className={style.inputsArea}>

            <Input type={'text'}>Insira a tarefa:</Input>
            <Input type={'text'}>Insira o horario de inicio:</Input>
            <Input type={'text'}>Insira o horario de fim:</Input>

          </div>

          <Button>Adicionar</Button>

        </Form>

      </div>

    </div>
  )
}