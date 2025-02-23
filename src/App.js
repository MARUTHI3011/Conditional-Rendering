function Drink({ name }) {
  let part, cafContent, years;
  if (name === "tea") {
    part = "leaf";
    cafContent = "15-70 mg/cup";
    years = "4,000+ years";
  } else if (name === "coffee") {
    part = "bean";
    cafContent = "80-185 mg/cup";
    years = "1,000+ years";
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{cafContent}</dd>
        <dt>Age</dt>
        <dd>{years}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
