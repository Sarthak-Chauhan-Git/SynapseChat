export default function Links({icon, info}) {
  return (
    <>
      <li className="links-li">
        <a href="">
          <i className={icon}></i>
          <span>{info}</span>
        </a>
      </li>
    </>
  );
}
