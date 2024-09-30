import React, { useRef, useState, Suspense } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';

import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef (null);
  const [form, setform] = useState({name: '', email: '', message: ''})
  const [isLoading, setIsloading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsloading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        form_name: form.name,
        to_name: "悠真",
        from_email: form.email,
        to_email: 'andong041205@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsloading(false);
      showAlert({ show: true, text: 'Message sent successfully!',
      type: 'success'
      })

      setTimeout(() => {
        hideAlert();
        setCurrentAnimation('idle')
        setform({ name: '', email: '', message: ''});
      }, [3000])

      
    }).catch((error) => {
      setIsloading(false);
      setCurrentAnimation('idle')
      console.log(error);
      showAlert({ show: true, text: 'I didnt receive your message',
      type: 'danger'
      })
    })
  };
  const handleBlur  = () => setCurrentAnimation('walk');
  const handleFocus = () => setCurrentAnimation('idle');

  return (
    <section className="relative flex lg:flex-row flex-col max-container"> 
    {/* これなに？ */}
      {alert.show && <Alert {...alert} />}
      {/* <Alert {...alert} /> */}
      {/* これなに？ */}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">お問い合わせ</h1>

        <form 
        className="w-full flex flex-col gap-6 mt-14"
        onSubmit={handleSubmit}  
        >
          <label className="text-black-500 font-semibold">
            Name
            <input 
              type="text"
              name="name"
              className="input"
              placeholder="フルネーム"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input 
              type="email"
              name="email"
              className="input"
              placeholder="例:～@gmail.com"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="ご自由にご記入ください"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}>
              {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
         <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={1} />
            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
         </Canvas>
      </div>
    </section>
  )
}

// flexフレックス要素にする flex-row lg以上でフレックス内の子要素を横並びにする
//flex-col:子要素が縦並びに配置する

export default Contact
