import React, { useState } from 'react';
import { contactInfo } from '../data';
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Heading,
  Info,
  Row,
  StyledContact,
} from './styles/Contact.styled';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <StyledContact id="contact">
      <Container>
        <Heading>Get in touch</Heading>
        <Row>
          <Col>
            <Form onSubmit={submitHandler}>
              <FormControl>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormControl>
              <Button type="submit">Send Message</Button>
            </Form>
          </Col>
          <Col>
            <Info>
              {contactInfo.map((item, i) => {
                return (
                  <li key={i}>
                    {item.icon}
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </Info>
          </Col>
        </Row>
      </Container>
    </StyledContact>
  );
};

export default Contact;
