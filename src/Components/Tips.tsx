export default function Tips() {
  let max = 19;

  const tips = [
    "Eat a healthy diet.",
    "Consume less salt and sugar.",
    "Reduce intake of harmful fats.",
    "Avoid harmful use of alcohol.",
    "Don't smoke.",
    "Be active.",
    "Check your blood pressure regularly.",
    "Get tested."
  ];

  const handleClick = () => {
    let random = Math.floor(Math.random() * max);
    alert(tips[random]);
  };

  return (
    <div className="tips">
      <button onClick={handleClick}>Tips</button>
    </div>
  );
}
