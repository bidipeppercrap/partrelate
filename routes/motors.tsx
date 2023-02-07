interface Motor {
  name: string;
  brand: string;
}

export default function MotorsPage() {
  let motors: Motor[] = [
    {
      name: "KLX",
      brand: "Kawasaki"
    },
    {
      name: "CRF",
      brand: "Honda"
    }
  ]
  
  return (
    <main>
      <h1>Motors</h1>
      {motors.map(motor => <p>{motor.name}</p>)}
    </main>
  );
}
