import React from 'react'
import { Container } from "./ContactElements"
import {Layout} from "../Layout/Index"

export const Contact = () => {
    return (
        <Container>
            <Layout>
                <h1>Contato</h1>
                <hr />
                <p>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, nam dignissimos porro accusamus est dolor veniam nesciunt consectetur repellendus provident.</p>

                <form action="">
                    <input type="text" placeholder="Seu Nome" />
                    <input type="text" placeholder="Seu Endereço" />
                    <input type="text" placeholder="Seu Número" />

                    <textarea name="mensage" id="message_id" cols="30" rows="10" placeholder="Sua Mensagem"></textarea>
                    <button type="submit">Enviar</button>
                </form>
                </Layout>
        </Container>
    )
}
