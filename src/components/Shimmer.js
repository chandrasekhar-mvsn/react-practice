import "./shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img" />
            <div className="shimmer-lines">
              <div className="shimmer-line short" />
              <div className="shimmer-line long" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
