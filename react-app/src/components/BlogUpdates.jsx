import mozilla from "../img/mozilla.png";
import bubbles from "../img/bubbles.png";
import colors from "../img/colors.png";

const UPDATES = [
  {
    img: mozilla,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sit deserunt aliquid doloremque ipsa aliquam ea explicabo nobis.",
  },
  {
    img: bubbles,
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sit deserunt aliquid doloremque ipsa aliquam ea explicabo nobis.Illo sit deserunt aliquid doloremque ipsa aliquam",
  },
  {
    img: colors,
    text: "Lorem ipsum dolor sit amet consectetur. Doloremque ipsa aliquam ea explicabo nobis.",
  },
];

export default function BlogUpdates() {
  return (
    <div className="col" id="blog">
      <h3>News Updates</h3>
      {UPDATES.map((u, i) => (
        <article className="update" key={i}>
          <a href="">
            <img src={u.img} alt="" />
          </a>
          <p>{u.text}</p>
        </article>
      ))}
      <a className="btn btn2" href="">
        Visit our blog <span>⤑</span>
      </a>
    </div>
  );
}
