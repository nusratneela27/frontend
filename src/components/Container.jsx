const Container = ({ children }) => {
    return (
      <div
        className="mx-auto px-5 container"
      >
        {children}
      </div>
    );
  };
  
  export default Container;