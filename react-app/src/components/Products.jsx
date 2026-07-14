import art1 from "../img/art1.jpg";
import art2 from "../img/art2.jpg";
import art3 from "../img/art3.jpg";

const PRODUCTS = [
  {
    id: null,
    title: "Perfect Logic",
    hint: "All you want your website to do",
    img: art1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam porro officiis vel laborum, tenetur libero ea nihil eveniet eum suscipit saepe ex animi quos voluptate? Consectetur cum deserunt quibusdam.",
  },
  {
    id: "services",
    title: "Complete Solution",
    hint: "A tool anything and everything you can think",
    img: art2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam porro officiis vel laborum, tenetur libero ea nihil eveniet eum suscipit saepe ex animi quos voluptate? Consectetur cum deserunt quibusdam.consectetur adipisicing elit. Ullam",
  },
  {
    id: null,
    title: "Uber Culture",
    hint: "Fresh. Modern and ready for future",
    img: art3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aperiam porro officiis vel laborum, tenetur libero ea nihil eveniet eum suscipit saepe ex animi quos voluptate.",
  },
];

export default function Products() {
  return (
    <div className="row" id="products">
      {PRODUCTS.map((p) => (
        <article className="col" id={p.id ?? undefined} key={p.title}>
          <h2>{p.title}</h2>
          <h6>{p.hint}</h6>
          <img src={p.img} alt={p.title} />
          <p>{p.text}</p>
          <a className="btn btn1" href="#">
            Learn more <span>⤑</span>
          </a>
        </article>
      ))}
    </div>
  );
}
