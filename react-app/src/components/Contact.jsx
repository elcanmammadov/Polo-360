import { useFormMessage } from "../useFormMessage";

export default function Contact() {
  const { message, handleSubmit } = useFormMessage("Thanks! Your message has been sent.");

  return (
    <div className="col" id="contact">
      <h3>Contact</h3>
      <form id="contactForm" noValidate onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="your name" required />
        <input type="email" name="email" placeholder="your email address" required />
        <textarea name="message" placeholder="message" rows="6" required></textarea>
        <button className="btn btn2" type="submit">
          Send it <span>⤑</span>
        </button>
        <p className={`form-message ${message.type}`} aria-live="polite">
          {message.text}
        </p>
      </form>
    </div>
  );
}
