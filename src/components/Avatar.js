//Teo

function Avatar({name, imageSrc}) {
    return (
      <div>
          <img className="AvatarImg" src={imageSrc} />
        <p className="AvatarText">
          {name}
        </p>
      </div>
    );
  }

export default Avatar;