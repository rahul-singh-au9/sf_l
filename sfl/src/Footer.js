import "./footer.css";

const Footer = ({ setNumber }) => {
  const handleCLick = (e) => {
    setNumber(parseInt(e.target.value));
    console.log(e.target.value);
  };
  return (
    <div className="footer">
      <p>
        <input
          style={{ marginLeft: "5%", marginRight: "5%", cursor: "pointer" }}
          value={5}
          onClick={handleCLick}
          type="radio"
          name="number"
        />
        5
        <input
          style={{ marginLeft: "5%", marginRight: "5%", cursor: "pointer" }}
          value={6}
          onClick={handleCLick}
          type="radio"
          name="number"
        />
        6
        <input
          style={{ marginLeft: "5%", marginRight: "5%", cursor: "pointer" }}
          value={7}
          onClick={handleCLick}
          type="radio"
          name="number"
        />
        7
        <input
          style={{ marginLeft: "5%", marginRight: "5%", cursor: "pointer" }}
          value={8}
          onClick={handleCLick}
          type="radio"
          name="number"
        />
        8
        <input
          style={{ marginLeft: "5%", marginRight: "5%", cursor: "pointer" }}
          value={9}
          onClick={handleCLick}
          type="radio"
          name="number"
        />
        9
      </p>
    </div>
  );
};

export default Footer;
