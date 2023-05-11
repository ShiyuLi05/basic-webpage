import Photo from './Photo';

function Gallery() {
  const photos = [
    {
        "id":"01",
        "img": "https://raw.githubusercontent.com/ShiyuLi05/cdn/main/img/zhazha/zhazha01.jpeg"
    },
    {
        "id":"02",
        "img": "https://raw.githubusercontent.com/ShiyuLi05/cdn/main/img/zhazha/zhazha02.jpeg"
    },
    {
        "id":"03",
        "img": "https://raw.githubusercontent.com/ShiyuLi05/cdn/main/img/zhazha/zhazha03.jpeg"
    },
    {
        "id":"04",
        "img": "https://raw.githubusercontent.com/ShiyuLi05/cdn/main/img/zhazha/zhazha04.jpeg"
    }
];
  return (
    <div className="gallery">
      <div className="container">
        <div className="context">
          <div className='center'>
            <h2>Siamese We Have</h2>
            <p>Little Siamese kitten we bought from Toronto.  Now we have 3 cats in home.</p>
            <p>Here we have more cute photos for ZhaZha.</p>
          </div>
        </div>
        <div className="photos">
          <Photo photos={photos}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery;