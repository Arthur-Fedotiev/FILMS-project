import React, {memo, useState} from "react";
import PropTypes from "prop-types";
//import withToggle from "components/HOCs/withToggle";
import Featured from "components/Featured";
//import useToggle from "components/hooks/useToggle";

//#region ------> WITH TOGGLE HOC
// const FilmCard_training = ({isToggled, handleToggle, film}) => {
//   return (
//     <>
//       <div className="ui card">
//         {/* IMAGE || CONTENT*/}
//         {!isToggled ? (
//           <>
//             <Featured featured={film.featured} id={film._id} />
//             <div className="image">
//               <span className="ui green label ribbon">{film.price}</span>
//               <img src={film.img} alt={film.title} />
//             </div>
//           </>
//         ) : (
//           <div className="content">
//             <p>{film.description}</p>
//           </div>
//         )}

//         {/* STATIC CONTENT START*/}

//         <div className="content">
//           <span className="header">{film.title}</span>
//           <div className="meta">
//             <i className="icon users"></i> {film.director}
//             <span className="right floated">
//               <i className="icon wait right"></i> {film.duration} min
//             </span>
//           </div>

//           <div className="content">
//             <i
//               onClick={handleToggle}
//               className={`icon eye ${isToggled && "slash"} link`}
//             ></i>
//           </div>
//         </div>
//         {/* STATIC CONTENT END*/}

//         {/* EXTRA CONTENT START*/}

//         {!isToggled && (
//           <div className="extra content">
//             <div className="ui two buttons">
//               <span className="ui red basic button">
//                 <i className="ui icon check">YES</i>
//               </span>
//               <span className="ui grey basic button">
//                 <i className="ui icon close">NO</i>
//               </span>
//             </div>
//           </div>
//         )}

//         {/* EXTRA CONTENT END*/}
//       </div>
//       {/* CARD END */}
//     </>
//   );
// };
// FilmCard_training.propTypes = {
//   film: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     director: PropTypes.string.isRequired,
//     img: PropTypes.string.isRequired,
//     duration: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
//     featured: PropTypes.bool.isRequired,
//   }).isRequired,
// };

// FilmCard_training.defaultProps = {
//   film: {},
// };

// export default withToggle(memo(FilmCard_training));
//#endregion

function useToggle(toggle = false) {
  const [isToggled, setIsToggled] = useState(toggle);
  const handleToggle = () => setIsToggled(!isToggled);
  return {isToggled, handleToggle};
}

const FilmCard = ({film}) => {
  const {isToggled, handleToggle} = useToggle();
  return (
    <>
      <div className="ui card">
        {/* CONDITIONAL: IMAGE || CONTENT*/}
        {!isToggled ? (
          <>
            <Featured featured={film.featured} id={film._id} />
            <div className="image">
              <span className="ui green label ribbon">{film.price}</span>
              <img src={film.img} alt={film.title} />
            </div>
          </>
        ) : (
          <div className="content">
            <p>{film.description}</p>
          </div>
        )}

        {/* MAIN CONTENT START*/}

        <div className="content">
          <span className="header">{film.title}</span>
          <div className="meta">
            <i className="icon users"></i> {film.director}
            <span className="right floated">
              <i className="icon wait right"></i> {film.duration} min
            </span>
          </div>

          <div className="content">
            <i
              onClick={handleToggle}
              className={`icon eye ${isToggled && "slash"} link`}
            ></i>
          </div>
        </div>
        {/* MAIN CONTENT END*/}

        {/* EXTRA CONTENT START*/}

        {!isToggled && (
          <div className="extra content">
            <div className="ui two buttons">
              <span className="ui red basic button">
                <i className="ui icon check">YES</i>
              </span>
              <span className="ui grey basic button">
                <i className="ui icon close">NO</i>
              </span>
            </div>
          </div>
        )}

        {/* EXTRA CONTENT END*/}
      </div>
      {/* CARD END */}
    </>
  );
};
FilmCard.propTypes = {
  film: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired,
  }).isRequired,
};

FilmCard.defaultProps = {
  film: {},
};

export default memo(FilmCard);
