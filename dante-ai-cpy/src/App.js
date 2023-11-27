import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import MainComponentLayout from './MainComponent/MainComponentLayout';

function App() {
  return (
    <div className=''>
      {/* header component */}
      <HeaderComponent />
      {/* separable div */}
      <div className='h-16 px-6'></div>
      {/* Body component */}
      <MainComponentLayout />
      <div> adding something useful</div>
      {/* footer component */}
      <div>how are you?</div>
    </div>
  );
}

export default App;
