import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import FaceBook from './components/FaceBook';
import SeparatorBar from './components/SeparatorBar';
import SignupPage from './components/SignupPage';
import RGBColorPicker from './components/RGBColorPicker';
function App() {
  const imageUrls = [
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg',
  ];
  return (
    <div className="App">
      <div>
      <h1>Id Card</h1>

        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>

      <SeparatorBar/>

      <div>
      <h1>Greetings</h1>

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
      </div>
      
      <SeparatorBar/>


      <h1>Random</h1>

      <div className='random'>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <SeparatorBar/>


      <div>
      <h1>Box Color</h1>

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={2} g={255} b={255} />
      </div>

      <SeparatorBar/>

      <div>

      <h1>Credit Card</h1>

     <CreditCard
        typeCard="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />

<CreditCard
        typeCard="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      
      <CreditCard
        typeCard="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />

      </div>

      <SeparatorBar/>

      <div>
      <h1 className='ratingCardH1' > Rating Card</h1>

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      </div>

      <SeparatorBar/>

      <div>
      <h1 className='DriverCardH1'>Driver Card</h1>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />

      </div>
      
      <SeparatorBar/>


      <div>
      <LikeButton initialLikes={0} buttonText="Likes" />
      </div>

      <SeparatorBar/>


      <div>
      <ClickablePicture
        img='maxence.png'
        imgClicked='maxence-glasses.png'
      />
      </div>

      <SeparatorBar/>

      <div>
      <Dice  />
      </div>

      <SeparatorBar/>


      <div>
      <h1>Image Carousel</h1>
      <Carousel images={imageUrls} />
      </div>

      <SeparatorBar/>

      <div>
        <h1>Numbers Table</h1>
        <NumbersTable limit={15} />
      </div>

      <SeparatorBar/>

      <FaceBook  />
      

      <SeparatorBar/>


      <div>
        <SignupPage />
      </div>

      <SeparatorBar/>
      
      <div>
      <RGBColorPicker />      </div>

    </div>

    

    
  );
}

export default App;
