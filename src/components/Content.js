const Content = ({ counter, HandleLess, HandleMore, AddTab }) => {
  return (
    <div className="content-box">
      <div className="content">
        <button onClick={HandleLess}>-</button>
        <div>{counter}</div>
        <button onClick={HandleMore}>+</button>
      </div>
      <button onClick={AddTab}>Add</button>
    </div>
  );
};

export default Content;
