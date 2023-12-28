
import './value.css';

const Value = () => {
  return (
    <div className='value-container'>
      <img src="apartment-outside-img.jpg" alt="Fancy apartment building" className='value-image'/>
      <div className="value-desc">
        <div className="value-title flex-col-start">
          <span className='primary-text'>Our Value</span>
          <span className='orange-text'>What We Give to You</span>
        </div>
        <div className="drop-down-options">

        </div>
      </div>
    </div>
  )
}

export default Value
