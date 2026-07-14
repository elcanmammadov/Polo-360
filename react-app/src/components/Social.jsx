import { useFormMessage } from "../useFormMessage";

export default function Social() {
  const { message, handleSubmit } = useFormMessage("You're subscribed! Thanks for joining.");

  return (
    <div className="col">
      <h3>Social Connection</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quidem tempore illo nobis.</p>
      <div id="icons1">
        <a id="rss" href=""></a>
        <a id="fab" href=""></a>
        <a id="lin" href=""></a>
        <a id="ytb" href=""></a>
        <a id="twi" href=""></a>
      </div>
      <h4>Newsletter</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus voluptatibus blanditiis aut. Esse?</p>
      <form id="newsletterForm" noValidate onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="your email address" required />
        <button className="btn btn2" type="submit">
          Subscribe <span>⤑</span>
        </button>
        <p className={`form-message ${message.type}`} aria-live="polite">
          {message.text}
        </p>
      </form>
    </div>
  );
}
