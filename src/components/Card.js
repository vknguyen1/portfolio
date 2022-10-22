function Card({ title, data, cardIndex }) {
  return (
    <div>
      {data[cardIndex].map((item) => (
        <div className="card">
          <h1 className="card-title">{title}</h1>
          <p className="subtitle">{item.description}</p>
          <p className="description">{item.description2}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
