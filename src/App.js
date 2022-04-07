import './App.css';
import Cards from './components/Cards';

function app() {
    return (
      <>
      <div className='App'>
       <Cards 
       title='Ritik Bardiyar'
       imageurl='https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg'
       body='Ritik is the new employee of Indpro'/>
       </div>

       <div className='App'>
       <Cards 
       title='Vithika'
       imageurl='https://cdn.dribbble.com/users/2199928/screenshots/11532918/media/5a7273b592ea860e6d0ff2931ecab4f3.png?compress=1&resize=400x300'
      //  imageurl='https://i.natgeofe.com/n/de7be89d-3715-4e89-b83b-ab697ef781b8/thumbnail-cape-buffalo-nationalgeographic_1976203.jpg'
       body='Hello every one'/>
       </div>

       <div className='App'>
       <Cards 
       title='Anubhav'
       imageurl='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png'
       body='Hello every one'/>
       </div>

       <div className='App'>
       <Cards 
       title='Abhijeet'
       imageurl='https://cdn.dribbble.com/users/3293507/screenshots/14667603/media/d8cbe035a61f64afdf6deabca5182842.jpg?compress=1&resize=400x300&vertical=top'
       body='Hello every one'/>
       </div>

       <div className='App'>
       <Cards 
       title='Ravi'
       imageurl='https://cdn.dribbble.com/users/1041205/screenshots/3636353/media/b9d3272401a456bdfaef25bb2a7accd2.jpg?compress=1&resize=400x300&vertical=top'
       body='Hello every one'/>
       </div>

       {/* <div className='App'>
       <Cards 
       title='Arvind'
       imageurl='https://cdn.dribbble.com/users/30476/screenshots/6169093/media/52fbf7783c247d1c334e1a9c98474236.jpg'
       body='Hello every one'/>
       </div> */}
      </>
    );
}
export default app;
