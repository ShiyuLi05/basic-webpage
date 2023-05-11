
function Photo(props) {
  return (
    <>
        {props.photos.map(photo => (
            <div className="card" key={photo.id}>
                <figure>
                    <img src={photo.img} alt={''}/>
                </figure>
            </div>
        ))}
    </>
  )
}

export default Photo;