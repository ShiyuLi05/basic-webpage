import Button from './Button';

function Banner() {
  return (
    <div className='hero-banner'>
      <div className='container'>
        <div className='context'>
          <div className='center'>
            <p>KNOW MORE ABOUT </p>
            <h2>Siamese Cat</h2>
            <p>
              The Siamese cat 
              (Thai: แมวไทย, Maeo Thai; แมวสยาม, Maeo Seeaam) 
              is one of the first distinctly recognized breeds 
              of Asian cat. 
            </p>
            <p>
              The original Siamese were one of the most popular 
              breeds in Europe and North America in the 19th century.
            </p>
            <Button wantMore={true}/>
            <Button wantMore={false}/>
          </div>
        </div>
        <div className='img'></div>
        </div>
    </div>
  )
}

export default Banner;