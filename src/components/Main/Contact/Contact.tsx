import './Contact.css'
import {useState, useEffect} from 'react';

function Contact(){
    const [visible,setVisible] = useState(true);
    
    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(document.getElementById('contact')!);
        return () => observer.unobserve(document.getElementById('contact')!);
    },[]);

    return(
        <div id="contact" className={`mainBodySection fade-in-section ${visible ? 'is-visible' : ''}`}>
            <h1 className="sectionTitle">Contact</h1>
            <a className="contactLink" href="mailto: tdansby7@gmail.com">Tdansby7@gmail.com</a>
            <a className="contactLink" href="https://github.com/saltedTofu">Github</a>
            <a className="contactLink" href="https://www.linkedin.com/in/tyler-dansby-rd-39541916b/">LinkedIn</a>
        </div>
    )
}

export default Contact;