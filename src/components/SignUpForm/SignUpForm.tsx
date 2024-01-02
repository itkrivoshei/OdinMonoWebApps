import React, { useState, useRef, useEffect } from 'react';
import './SignUpForm.scss';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/\D/g, '').slice(0, 10);
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    return match
      ? `${match[1]}${match[2] ? `-${match[2]}` : ''}${
          match[3] ? `-${match[3]}` : ''
        }`
      : '';
  };

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()<>/|';
    let fontSize = 14;
    let columns = canvas.width / fontSize;
    let drops: number[] = Array(Math.floor(columns)).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px 'VT323', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height || Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
      );

      fontSize = Math.max(canvas.width / 100, 10);
      columns = canvas.width / fontSize;
      drops = Array(Math.floor(columns)).fill(1);
    };

    const matrixInterval = setInterval(drawMatrix, 50);

    window.addEventListener('resize', () => {
      resizeCanvas();
      drawMatrix();
    });

    resizeCanvas();
    drawMatrix();

    return () => {
      clearInterval(matrixInterval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const isPasswordValid = (password: string) => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return regex.test(password);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'phoneNumber') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: formatPhoneNumber(value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log('Form submitted successfully', formData);
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    };

    for (const [key, value] of Object.entries(formData)) {
      if (value.trim() === '') {
        errors[key as keyof typeof errors] = `${key} is required.`;
        valid = false;
      } else if (key === 'email') {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(value)) {
          errors[key as keyof typeof errors] =
            'Please enter a valid email address.';
          valid = false;
        }
      } else if (key === 'phoneNumber') {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneRegex.test(value)) {
          errors[key as keyof typeof errors] =
            'Please enter a valid phone number (xxx-xxx-xxxx).';
          valid = false;
        }
      } else if (key === 'password' && !isPasswordValid(value)) {
        errors[key as keyof typeof errors] =
          'Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.';
        valid = false;
      } else if (key === 'confirmPassword' && value !== formData.password) {
        errors[key as keyof typeof errors] = 'Passwords do not match.';
        valid = false;
      }
    }

    setFormErrors(errors);
    return valid;
  };

  return (
    <div className='sign-up-form-container'>
      <canvas ref={canvasRef} id='canvas' />
      <div className='left-side'>
        <div className='logo'>
          <img
            src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWFmOGFiODQxZWY0N2Q5ODNhYmIzZGZmMDk5NTg5ZTJhNzQwNjcwMSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/2p1ng5ek9qIR8wzPn5/giphy.gif'
            alt='Logo'
          />
          <h1 className='logo-text'>Sign up Form</h1>
        </div>
      </div>
      <div className='right-side'>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor='firstName'>First Name *</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <div className='error'>{formErrors.firstName}</div>

          <label htmlFor='lastName'>Last Name *</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <div className='error'>{formErrors.lastName}</div>

          <label htmlFor='email'>Email *</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className='error'>{formErrors.email}</div>

          <label htmlFor='phoneNumber'>Phone Number *</label>
          <input
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <div className='error'>{formErrors.phoneNumber}</div>

          <label htmlFor='password'>Password *</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
          <div className='error'>{formErrors.password}</div>

          <label htmlFor='confirmPassword'>Confirm Password *</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          <div className='error'>{formErrors.confirmPassword}</div>

          <button type='submit'>Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
