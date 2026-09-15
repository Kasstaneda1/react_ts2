import "./styles.css";
function Lesson_07_Practice() {
  // Типизация массива объектов
  interface Car {
    brand: string;
    price: number;
    isDiesel: boolean;
  }
  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porsche", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];
  return (
    <section className="practice_07">
      <h2 className="title">Автомобили</h2>
      <ul className="list">
        {cars.map((car) => (
          <li className="card" key={car.brand}>
            <h3 className="brand">{car.brand}</h3>
            <p className="price">{car.price} €</p>
            <p className="gas">{car.isDiesel ? "Дизель" : "Бензин"}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Lesson_07_Practice;
