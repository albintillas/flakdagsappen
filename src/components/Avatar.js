//Teo
const Name = " ";

function Avatar({name, imageSrc}) {
    return (
      <div>
          <img src={imageSrc} />
        <p>
          {name}
        </p>
      </div>
    );
  }

export default Avatar;