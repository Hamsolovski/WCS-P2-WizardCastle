import PropTypes from "prop-types";

function Info({ worker }) {
  return (
    <div className="info">
      <h2 className="titleAbout"> {worker.name} </h2>
      <br />
      <div className="profil">
        <a href={worker.linktogithub}>
          <p>github</p>
        </a>
        <br />
        <a href={worker.linktolinkedin}>
          <p>linkedin</p>
        </a>
      </div>
    </div>
  );
}
Info.propTypes = {
  worker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    linktogithub: PropTypes.string.isRequired,
    linktolinkedin: PropTypes.string.isRequired,
  }).isRequired,
};

export default Info;
