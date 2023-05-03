import Notes from "./Notes";

const Home = (props) => {
  const { showAlert } = props;

  return (
    <div className="container">
      <Notes heading="Your Notes" showAlert={showAlert} mode={props.mode} />
    </div>
  )
}

export default Home;