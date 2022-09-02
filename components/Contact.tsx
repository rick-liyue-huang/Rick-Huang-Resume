import React, { ReactNode, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { z } from 'zod';
import styles from '../styles/Contact.module.scss';
import Section from './Section';

interface InputContainerProps {
  children: ReactNode;
  error: any;
  htmlFor: string;
  label: string;
  className?: string;
}

const InputContainer: React.FC<InputContainerProps> = ({
  children,
  error,
  htmlFor,
  label,
}) => {
  return (
    <div className={styles.inputOuter}>
      <div className={styles.inputContainer}>
        <label htmlFor={htmlFor}>{label}</label>
        {children}
      </div>
      <div className={styles.error}>{error && error}</div>
    </div>
  );
};

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //zod schema
  const schema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    phone: z.string().min(1, { message: 'Phone is required' }),
    email: z
      .string()
      .email({ message: 'Email is not valid' })
      .min(1, { message: 'Email is required' }),
    subject: z.string().min(1, { message: 'Subject is required' }),
    message: z.string().min(1, { message: 'Message is required' }),
  });
  const [errors, setErrors] = useState<any>([]);
  //validate schema
  const validate = () => {
    const result = schema.safeParse({
      name: name,
      phone: phone,
      email: email,
      subject: subject,
      message: message,
    });
    // @ts-ignore
    setErrors(result?.error?.format());
  };

  return (
    <Section id="contact">
      {/* <span className={styles.subtitle}>Contact</span> */}
      <h1 className={styles.title}>Contact With Me</h1>
      <div className={styles.container}>
        {/* DETAILS */}
        <div
          className={styles.connect}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
          }}
        >
          {/* <div className={styles.imageContainer}></div> */}
          <h2>Rick Huang</h2>
          <span>Fullstack Developer</span>
          {/* <span>
            I am available for freelance work. Connect with me via and call in
            to my account.
          </span> */}
          {/* CONTACT DETAILS */}
          <div className={styles.contact}>
            <div className={styles.phone}>
              <span>Phone:</span>
              <span>0499059029</span>
            </div>

            <div className={styles.email}>
              <span>Email:</span>
              <span>rick.liyue.huang@gmail.com</span>
            </div>
          </div>

          {/* SOCIALS */}
          {/* <div className={styles.socials}>
            <span>Find Me</span>
            <div className={styles.links}>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target={'_blank'}
                    rel={'noreferrer'}
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        {/* FORM */}
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
          {/* NAME */}
          <div className={styles.name}>
            <InputContainer
              className={styles.inputContainer}
              htmlFor={'name'}
              label="YOUR NAME"
              error={errors?.name?._errors[0]}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputContainer>
            <InputContainer
              htmlFor={'phone'}
              label="PHONE"
              error={errors?.phone?._errors[0]}
            >
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputContainer>
          </div>
          {/* EMAIL */}
          <InputContainer
            htmlFor={'email'}
            label={'EMAIL'}
            error={errors?.email?._errors[0]}
          >
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>

          {/* SUBJECT */}
          <InputContainer
            htmlFor={'subject'}
            label={'SUBJECT'}
            error={errors?.subject?._errors[0]}
          >
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </InputContainer>

          {/* YOUR MESSAGE */}
          <InputContainer
            htmlFor={'message'}
            label="MESSAGE"
            error={errors?.message?._errors[0]}
          >
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </InputContainer>

          <button onClick={() => validate()}>
            <span>SEND MESSAGE</span>
            <FaArrowRight />
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
