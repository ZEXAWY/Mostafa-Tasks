import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import MainComponentLayout from './MainComponent/MainComponentLayout';
import FooterComponent from './MainComponent/FooterComponent/FooterComponent';

function App() {
  return (
    <div className=''>
      {/* header component */}
      <HeaderComponent />
      {/* separable div */}
      <div className='h-16 px-6'></div>
      {/* Body component */}
      <MainComponentLayout />

      {/* footer component */}
      <FooterComponent />
    </div>
  );
}

export default App;
