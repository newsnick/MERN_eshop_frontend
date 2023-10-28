import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1
    const starClass =
      value >= starValue
        ? 'fas fa-star'
        : value >= starValue - 0.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star'
    return (
      <span key={index}>
        <i style={{ color }} className={starClass}></i>
      </span>
    )
  })

  return (
    <div className='rating'>
      {stars}
      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Rating

// return (
//   <div className='rating'>
//     <span>
//       <i
//         style={{ color }}
//         className={
//           value >= 1
//             ? 'fas fa-star'
//             : value >= 0.5
//             ? 'fas fa-star-halt-alt'
//             : 'far fa-star'
//         }
//       ></i>
//     </span>
//     <span>
//       <i
//         style={{ color }}
//         className={
//           value >= 2
//             ? 'fas fa-star'
//             : value >= 1.5
//             ? 'fas fa-star-halt-alt'
//             : 'far fa-star'
//         }
//       ></i>
//     </span>
//     <span>
//       <i
//         style={{ color }}
//         className={
//           value >= 3
//             ? 'fas fa-star'
//             : value >= 2.5
//             ? 'fas fa-star-halt-alt'
//             : 'far fa-star'
//         }
//       ></i>
//     </span>
//     <span>
//       <i
//         style={{ color }}
//         className={
//           value >= 4
//             ? 'fas fa-star'
//             : value >= 3.5
//             ? 'fas fa-star-halt-alt'
//             : 'far fa-star'
//         }
//       ></i>
//     </span>
//     <span>
//       <i
//         style={{ color }}
//         className={
//           value >= 5
//             ? 'fas fa-star'
//             : value >= 4.5
//             ? 'fas fa-star-halt-alt'
//             : 'far fa-star'
//         }
//       ></i>
//     </span>
//     <span>{text && text}</span>
//   </div>
// )
