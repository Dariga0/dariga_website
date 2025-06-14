import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import '../assets/styles/Contact.scss';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validate = () => {
    const newErrors = {
      name: name.trim() === '',
      email: email.trim() === '',
      message: message.trim() === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  return (
    <section id="contact" className="contact-section">
      <Paper className="contact-paper" elevation={4}>
        <h1 className="contact-title">Get in Touch</h1>
<p className="contact-subtext">
I’m always open to discussing new opportunities, creative ideas, or potential collaborations. Drop a message below.
</p>


        <Box
          component="form"
          className="contact-form"
          action="https://formsubmit.co/darigarakhat025@gmail.com"
          method="POST"
          onSubmit={(e) => {
            if (!validate()) e.preventDefault();
          }}
        >
          <div className="form-row">
            <TextField
              name="name"
              label="Your Name"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={errors.name}
              helperText={errors.name && 'Name is required'}
            />
            <TextField
              name="email"
              label="Email or Phone"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
              helperText={errors.email && 'Email or phone is required'}
            />
          </div>

          <TextField
            name="message"
            label="Message"
            multiline
            rows={6}
            fullWidth
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            error={errors.message}
            helperText={errors.message && 'Message cannot be empty'}
            sx={{ marginTop: 2 }}
          />

          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ marginTop: 3, float: 'right' }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </section>
  );
}

export default Contact;
