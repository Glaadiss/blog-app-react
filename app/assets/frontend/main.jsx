import Greet from './greet.jsx';

class Main extends React.Component {
  render(){
    return (
      <div class="container">
        <h1> hello from es6 syntax </h1>
        <Greet> </Greet>
      </div>
    )

  }

}



let documentReady = () => {
  React.render(
    <Main> </Main>,
    document.getElementById('react')
  )

};

$(documentReady);