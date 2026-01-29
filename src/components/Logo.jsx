import Icon from "../assets/bakery48.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-3xl">
        <img src={`${Icon}`} alt="" />
      </span>
      <h1 className="text-xl font-bold tracking-wide">Top Choice Bakery</h1>
    </div>
  );
}
