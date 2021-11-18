import Header from '../../Components/Header';
import Navigation from '../../Components/Navigation';
import Container from '../../Components/UI/Container';

export default function CurrencyView() {
  return (
    <>
    <header style={{backgroundColor: '#fff'}}>
      <Header/>
    </header>
    <Container>
      <Navigation />       
      {/* <Currency /> */}
      </Container>
    </>
  );
}
